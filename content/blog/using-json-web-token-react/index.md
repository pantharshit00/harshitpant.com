---
draft: false
title: JSON Web Token Authentication in React and React-Router
date: 2017-08-29
author: Harshit Pant
tags:
  - react
  - auth
cover: ./cover.png
---

## Video

https://youtu.be/hjp-JHVsgxQ

In a previous blog I showed you guys how to make a JSON Web Token Authentication Server. You can find that article [here](http://hptechblogs.com). Now in this blog post I am going to show you how you can make use of that JWT auth server in an react application. We will using the concept of higher order component to protect some of our routes. So lets get started.

---

## Prerequesites

1. Node.js download it from [here](http://nodejs.org)

## Initialize a React App

We are going to make use of `create-react-app` tool provided by Facebook to quickly get started with a React App. Install it using npm globally.

```bash
> npm install -g create-react-app
```

Now lets Initialize a new React App by using the following command.

```bash
> create-react-app jwt-react-auth
```

It will make a folder name `jwt-react-auth` and give us a very nice development server. Now start the dev server as follows and open the folder in your code editor.

```bash
> cd jwt-react-auth
> npm start
```

Your development server should be ready on [http://localhost:3000](http://localhost:3000)

---

## Get Up and Running With JWT Server

As mentioned earlier the JSON Web Token authentication server we are going to use is from an earlier blog post. You may clone it and set it up by typing the folliwing commands onto your terminal.

```bash
> git clone http://github.com/pantharshit00/jwt-auth
> cd jwt-auth
npm install
node app.js
```

This should kick off the server on port 8080.

---

## Setting up React Router

Now lets setup react-router. First install using npm.

```bash
> npm install react-router-dom
```

Now open `src/index.js` and Bring in react-router's `BrowserRouter` and `Route` as follows.

```javascript
import { BrowserRouter as Router, Route } from 'react-router-dom';
```

Now change the DOM render as following.

```js
ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component="App" />
    </div>
  </Router>,
  document.getElementById('app')
);
```

You should see the Welcome to React just as before but now it is wrapped inside react router.

![welcome_to_react](./welcome.png)

---

## Create the login components

Create a components folder in your `src` folder. Here create two new files `Login.js` and `Login.css` .

Add this piece of code to Login.js

```js
import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div className="center">
        <div className="card">
          <h1>Login</h1>
          <form>
            <input
              className="form-item"
              placeholder="Username goes here..."
              name="username"
              type="text"
              onChange={this.handleChange}
            />
            <input
              className="form-item"
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <input className="form-submit" value="SUBMIT" type="submit" />
          </form>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
}

export default Login;
```

This is simple react component with some inputs with a `handleChange` method which sets the input values to state of component.

Add this code to style your `Login.css` file so that the login page do not look ugly.

```css
@import url('https://fonts.googleapis.com/css?family=Raleway');

.center {
  font-family: 'Raleway', sans-serif;
  background-color: #1abc9c;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background-color: #fff;
  border-radius: 15px;
  padding: 0.8rem;
}

.card > form {
  display: flex;
  flex-direction: column;
}

.card h1 {
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
}

.form-item {
  font-family: 'Raleway', sans-serif;
  padding: 5px;
  margin-bottom: 2rem;
  height: 30px;
  width: 16rem;
  border: 1px solid grey;
}

.form-submit {
  font-family: 'Raleway', sans-serif;
  height: 35px;
  color: #fff;
  background-color: #1abc9c;
  border: none;
  letter-spacing: 0.2rem;
  transition: 0.3s opacity ease;
  cursor: pointer;
}
.form-submit:hover {
  opacity: 0.6;
}
```

Now import the login component in src/index file like this

```js
import Login from './components/Login';
```

Add add `/login` as a route to your router like this.

```js
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById('root')
);
```

Now go to [http://localhost:3000/login](http://localhost:3000/login) and you should see login page like this.

![login_page](/content/images/2017/08/login.png)

---

## Create a Authentication Service

Now we will create an Authentication Service class with some useful methods that we can use for authentication.

So create a new file in `src/components/AuthService.js` and paste the following code.

```javascript
import decode from 'jwt-decode';
export default class AuthService {
  // Initializing important variables
  constructor(domain) {
    this.domain = domain || 'http://localhost:8080'; // API server domain
    this.fetch = this.fetch.bind(this); // React binding stuff
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(username, password) {
    // Get a token from api server using the fetch api
    return this.fetch(`${this.domain}/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(res => {
      this.setToken(res.token); // Setting the token in localStorage
      return Promise.resolve(res);
    });
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired. N
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
  }

  getProfile() {
    // Using jwt-decode npm package to decode the token
    return decode(this.getToken());
  }

  fetch(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options,
    })
      .then(this._checkStatus)
      .then(response => response.json());
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
```

This is heavily commented so you will understand what it is doing. It just couple of arbitrary methods like login. We are using the fetch api to perform requests. The token is fetched in the `login` method and gets stored in the `localStorage` of the browser. We have also created fetch method which automatically sets the `Authorization Header` and checks the response status. Now it is time to use these methods.

---

## Using AuthService in Login Page

### Import AuthService in Login Page.

```diff
import './Login.css';
+ import AuthService from './AuthService';
```

### Add AuthService to the contructor.

```diff
this.handleChange = this.handleChange.bind(this);
+ this.Auth = new AuthService();
```

### Add handleFormSubmit method

```js
 handleFormSubmit(e){
        e.preventDefault();

        this.Auth.login(this.state.username,this.state.password)
            .then(res =>{
               this.props.history.replace('/');
            })
            .catch(err =>{
                alert(err);
            })
    }
```

In this method we are calling login method that we created in the Auth service. If we are successfully logged in we are redirect to home page which we will protect with our higher order component later.

### Don't forget to bind handleFormSubmit in contructor

```diff
this.handleChange = this.handleChange.bind(this);
+ this.handleFormSubmit = this.handleFormSubmit.bind(this);
this.Auth = new AuthService();
```

### Add redirection if we are already loggedIn

We do not want to stay in the login page if we are already loggedIn. So add this `componentWillMount` method hook to prevent it.

```js
componentWillMount(){
    if(this.Auth.loggedIn())
        this.props.history.replace('/');
}
```

---

## Creating our Higer Order Component for Authentication Guard

A higher order component is generally a function which takes in a component and return another enhanced component. Head [here](https://facebook.github.io/react/docs/higher-order-components.html) to learn more about them.

Create a new file in `src/components` named `withAuth.js`

1. Import React and AuthService
   ```js
   import React, { Component } from 'react';
   import AuthService from './AuthService';
   ```
2. Export a function `withAuth` which takes a AuthComponent as a parameter
   ```js
   export default function withAuth(AuthComponent) {
     // Code here now
   }
   ```
3. Instantiate AuthService
   ```diff
   export default function withAuth(AuthComponent) {
   +   const Auth = new AuthService('http://localhost:8080');
   }
   ```
4. Return a class AuthWrapped in which auth is handled
   ```diff
   export default function withAuth(AuthComponent) {
      const Auth = new AuthService('http://localhost:8080');
   +    return class AuthWrapped extends Component {
   +        // Code here now
   +    }
   }
   ```
5. Add contructor to class and initialize its state with user as null
   ```js
   constructor() {
       super();
       this.state = {
           user: null
       }
   }
   ```
6. Add `componentWillMount` hook which checks the auth

   ```js
   componentWillMount() {
       if (!Auth.loggedIn()) {
           this.props.history.replace('/login')
       }
       else {
           try {
               const profile = Auth.getProfile()
               this.setState({
                   user: profile
               })
           }
           catch(err){
               Auth.logout()
               this.props.history.replace('/login')
           }
       }
   }
   ```

   In this lifeCycle hook we are first checking if we are loggedIn() which check the token from the localStorage. Then we are decoding the token so that we may set it to our state. If we failed to decode it so we will redirect to login page.

7. Add render method
   ```js
       render() {
       if (this.state.user) {
           return (
               <AuthComponent history={this.props.history} user={this.state.user} />
           )
       }
       else {
           return null
       }
   }
   ```
   In render methods we are checking of user exists are passing user to the component.

Our withAuth HOC is ready to be used.

---

## Use the HOC to protect our home page

1. Open `src/App.js` and paste this markup on the render method

   ```js
   return (
     <div className="App">
       <div className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h2>Welcome {this.props.user.username}</h2>
       </div>
       <p className="App-intro">
         <button
           type="button"
           className="form-submit"
           onClick={this.handleLogout.bind(this)}
         >
           Logout
         </button>
       </p>
     </div>
   );
   ```

This will give you a Logout button and User greeting so that we may test logout and user data.

2. Import withAuth and AuthService and instantiate the AuthService at the top of the file.

   ```js
   import AuthService from './components/AuthService';
   import withAuth from './components/withAuth';
   const Auth = new AuthService();
   ```

3. Add a `handleLogout()` method
   ```js
    handleLogout(){
       Auth.logout()
       this.props.history.replace('/login');
    }
   ```
   This method that we create in the AuthService will clear the token from localStorage.
4. Wrap the component in withAuth at the export
   ```diff
   - export default App;
   + export default withAuth(App);
   ```

---

## Test the App

There are hard coded user in the server

    username: test
    password: asdf123

    username: test2
    password: asdf12345

![JWT_GIF](/content/images/2017/08/JWT.gif)
