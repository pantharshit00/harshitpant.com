---
draft: false
title: Using React Router Version 4
date: 2017-04-19
author: Harshit Pant
tags:
  - react
  - frontend
cover: ./cover.jpg
---

A few days ago when I started a new react project which includes routing with react router. After setting up the react router, my code simply start to broke. I debugged my code many times but still nothing worked. At last I realised that [React Router](http://reacttraining.com/react-router) version 4 has been released to main stream. A quite a few things have changes. So lets dive right into it. Here is an example:-

---

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

//State less components
//Home
const Home = () => (
  <div>
    <h1>Home</h1>
    <p>This is the Home Page</p>
  </div>
);

//About
const About = () => (
  <div>
    <h1>About</h1>
    <p>This is about</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
```

[See live example on codepen](https://codepen.io/pantharshit00/pen/OpZLoa)

---

### Example Expained!

The `<Router>` component now has been removed in react router version 4 which used to receive history as prop, which is either `HashHistory` and `BrowserHistory`. This now has been replaced with two separate component for hash and browser history. For `browserHistory` now `<BrowserRouter>` component is being used. Similarly there is `<HashRouter>` for `hashHistory`. You may rename them as Router if you find it more readable as I have done in the example using the ES6 `as` keyword.

The top level component of your app in this case the `<App>` should be wrapped within this new `<Router>` component so that the `<Route>`component may use the router. In react router v3 or below we use to render `this.props.children` inside the component of the root route. Now we render the `<Route>` component in the component we want to spit out the routes. You may notice in the code above that there is an `exact` prop in the home route component. This is so now that if exact is not included it will behave as a **'catch all route'** and any route will be rendered by that route. I think sub routes for url now have been deprived I am not sure though. I'll test it an update this article. There are two routes in this example. They are only spitting out two stateless components. Note components should also be passed in `{}` not as a string, it will cause an error.

---

### Notable changes in React Router v4

1. Separate Package for Web and React Native(_Android and iOS_)
2. Easy server side rendering with `<StaticRouter>` component
3. Its a complete rewrite and it is more declarative
4. Easy redirection with `<Redirect>` component
5. Redux integration baked in to the package.

---

### See official site of [React Router](https://reacttraining.com/react-router) for more details
