---
draft: false
title: Server Side Rendering in React and React Router(v4)
date: 2017-04-25
author: Harshit Pant
tags:
  - react
  - node
cover: ./cover.jpg
---

Server side rendering in react and react router is a thing that greatly helps in Search Engine Optimization(SEO) and improving the overall speed of the website. In this article I am going to show you how you can perform server side rendering in react router v4 very easily. We are also going to use the react router. As of server I am going to use Express js framework of node as in this example but you may use anything you like. So lets start.

---

### Code

App.js (Express Server)

```js
import express from 'express';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Component from './react-router.jsx';
import { StaticRouter as Router } from 'react-router-dom';

const app = express();

function template(data) {
  return `
  <html>
  <head>
    <title>Server Side Rendering</title>
  </head>
  <body>
    <div id="app">${data}</div>
  </body>
  </html>
`;
}

app.get('/*', (req, res) => {
  let context = {};
  let rendered = template(
    renderToString(
      <Router location={req.url} context={context}>
        <Component />
      </Router>
    )
  );
  res.send(rendered);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
```

---

react-router.jsx(Client)

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
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

if (typeof window !== 'undefined')
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app')
  );
```

---

### Result

![render](./ss.jpg)

Notice the data-react attributes. That is enough to prove that component was rendered in the server.

---

### Explanation

The react component that I used is the same that is in [using react router v4](http://hptechblogs.com/blog/1) blog. You may see that blog if wanna know how I made it. But it has a slight change. I have a if statement before `ReactDOM.render()` function. It is so as to stop it to execute in the server as there is no DOM in the the server. To check the DOM we check if the window exists. Also I have wrapped the `BrowserRouter` component down in the render as it also needs a DOM.

The main story is in the server. It is a simple express server. First I have imported all the dependencies and our component. Notice I have used ES6. It is so as we have to transpile it using babel as we have used JSX. I recommend `babel-node` or `babel-register` for it. I have linked to repository of this project down in which I have done so. Then we have a function returning simple html using ES6 template literals. Then we defined a catch all route `/*` as to render all the routes using `react-router`. Than we have a context variable which to to be passed to `StaticRouter`. `StaticRouter` is a component introduced in react-router v4 which requires no DOM. It need the location which we are passing using `request.url`.The context is used to deal with any redirects . As we don't have any redirects I have skipped that portion. Then we are using `renderToString` function of react-dom server to render our component to a string. In this we are passing our component wrapped in `StaticRouter`. Then we are passing this to our templating function with our component rendered into string. Then we are responding with this data. Lastly we are starting our server at port 3000.

---

### [Git Repo](https://github.com/pantharshit00/serversiderender) for this Project if someone wants to test this.
