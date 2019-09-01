---
draft: false
title: Using JSON Web Token for Authentication
date: 2017-05-31
author: Harshit Pant
tags:
  - auth
  - node
cover: ./cover.png
---

[JSON Web Tokens](http://jwt.io) are replacing cookies for authentication purposes pretty significantly. In this blog post I am going to show you how you can implement JWT in your api. I am going node express in this example.

---

## What is a JSON Web token

Formal is definition in official site. _JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties._ So:-

1. JWT is based on [RFC 7519](https://tools.ietf.org/html/rfc7519) Industry standard.
2. Used to securely communicate JSON objects.
3. They are self contained mean they all information use to decrypt the token is in the token itself except the secret obviously.
4. JWT consists of a header, payload and signature. These three parts are connect by **_._**

---

## A JWT looks like this

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDkyNjg1MDUwLCJleHAiOjE0OTUyNzcwNTB9.bHMstzcHfZQBND3QrugO4v3kTa7Zy7yifuuhWJbwhI0
```

You may see here three parts separated by _**.**_ The information we wanna store sits in the second part.

---

## Lets Code a Login API using JWT

```js
/**
 * To get started install
 * express bodyparser jsonwebtoken express-jwt
 * via npm
 * command :-
 * npm install express bodyparser jsonwebtoken express-jwt --save
 */

// Bringing all the dependencies in
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');

// Instantiating the express app
const app = express();

// See the react auth blog in which cors is required for access
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// INstantiating the express-jwt middleware
const jwtMW = exjwt({
  secret: 'keyboard cat 4 ever',
});

// MOCKING DB just for test
let users = [
  {
    id: 1,
    username: 'test',
    password: 'asdf123',
  },
  {
    id: 2,
    username: 'test2',
    password: 'asdf12345',
  },
];

// LOGIN ROUTE
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Use your DB ORM logic here to find user and compare password
  for (let user of users) {
    // I am using a simple array users which i made above
    if (
      username == user.username &&
      password ==
        user.password /* Use your password hash checking logic here !*/
    ) {
      //If all credentials are correct do this
      let token = jwt.sign(
        { id: user.id, username: user.username },
        'keyboard cat 4 ever',
        { expiresIn: 129600 }
      ); // Sigining the token
      res.json({
        sucess: true,
        err: null,
        token,
      });
      break;
    } else {
      res.status(401).json({
        sucess: false,
        token: null,
        err: 'Username or password is incorrect',
      });
    }
  }
});

app.get('/', jwtMW /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

// Error handling
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    // Send the error rather than to show it on the console
    res.status(401).send(err);
  } else {
    next(err);
  }
});

// Starting the app on PORT 3000
const PORT = 8080;
app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Magic happens on port ${PORT}`);
});
```

---

## Result(Using postman to test APIs)

---

## Trying to access protected api without authorization token

Got unauthorized error
![auth_error_screenshot](./ss1.jpg)

---

## Logging in with right credentials

Got the token back in the response
![Sucess Screenshot](./ss2.jpg)

---

## Accessing protected route with authorization token

Successfully entered the api
![Accessing protected route](./ss3.jpg)
