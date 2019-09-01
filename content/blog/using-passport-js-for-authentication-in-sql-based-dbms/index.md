---
draft: false
title: Using Passport.JS for Authentication in SQL Based Dbms
date: 2017-07-22
author: Harshit Pant
tags:
  - auth
  - node
cover: ./cover.png
---

The official documentation of [PassportJS](http://passportjs.org) is quite confusing for SQL based database system as its documentation contains the model function of mongoDB's ORM mongoose. Once it took me a while to implement it in a postgreSQL project using only node [pg](http://npmjs.org/package/pg) package. Then I came across with a awesome npm package called [Sequelize](http://sequelizejs.com) which is a Object Relation Mapper for SQL based databases like MySQL ,Postgres, SQLite, msSQL etc. It provide functions for SQL queries which is quite handy. I recommend to watch this [playlist](http://bit.ly/2ox7hId) to learn more about sequelize.

---

### Lets code a auth system with passport using postgreSQL

#### Prerequisites

1. You have to be familiar with passport and its local strategy.
2. Obviously you need to know node and some basics of db handling.

---

#### Our user model

```js
const Sequelize = require('sequelize');
const connection = new Sequelize(
  '<db name here>',
  '<db username here>',
  '<db passworfd here>',
  {
    // Defining our connect by Sequelize constructor
    host: '<db host here eg localhost, db.example.com, 127.0.0.1 >',
    dialect: 'postgres', // According to which dbms you are using
  }
);

const User = connection.define('users', {
  id: {
    type: Sequelize.INTEGER, // All dataTypes format available here http://bit.ly/2ofwgAm
    primaryKey: true,
    autoIncrement: true,
  },
  username: Sequelize.TEXT,
  password: Sequelize.TEXT,
});

// Syncing all our model to our DB
connection.sync().then(() => {
  console.log('Connected to DB');
});

module.exports = User; // Exporting our user model
```

In this example we are first bringing in `sequelize` using node `require`. Then we are defining the `connection` variable and setting it to the `Sequelize constructor`. The constructor takes 4 parameters first one is `database name`, second one is `username`, third one is `password` and last one is an object of `options`. In options we had defined the `dialect` to be postgres and `host` which is the address where the server of database is located. Then we are defining the `User` model which is equivalent to table in the database. We are using the `define` function for it which takes `name` and a object of `columns` as parameters. Each member of the object is a column in the table of DB. We can define column type by using sequelize. It also provide all options like `primary key`, `auto increment` etc. Then after we are connecting and syncing with the database. It will create the table if it doesn't exists in the database. At last we are exporting the `User model` for our use in the application.

---

#### Our express server

```js
// Using express as a server
const express = require('express');
const morgan = require('morgan'); // JUST FOR LOGS
const session = require('express-session'); // for sessions
const bodyParser = require('body-parser'); // for req.body
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('<relative path to User.js eg ./User>'); // Use relative path to the User file

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json()); // body-parser MW
app.use(bodyParser.urlencoded({ extended: false })); // See doc of it for ref

app.use(
  session({
    // Session MW
    secret: 'keyboard cat', // Use a more secure secret LOL
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 100 * 60 * 60 * 24 * 30 }, // = 30 days
  })
);

// Passport intialization
app.use(passport.initialize());
app.use(passport.session());

// Our passport stategy
passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({
      // Using sequelize model function
      where: {
        // Take an object with options where self explanatory
        username: username,
      },
    }).then(function(user) {
      // Sequelize return a promise with user in callback
      if (user == null) {
        // Checking if user exsists
        return done(null, false); // Standerd Passport callback
      }

      if (password == user.password) {
        // use your password hash comparing logic here for security
        return done(null, user); // Standerd Passport callback
      }
      return done(null, false); // Standerd Passport callback
    });
  })
);

// for maintaining session
passport.serializeUser(function(user, done) {
  // Standered Serialize for session
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({
    // Using sequelize model functoin
    where: {
      id: id,
    },
  }).then(function(user) {
    if (user == null) {
      done(new Error('Wrong user id.'));
    }

    done(null, user); // Standerd deserailize callback
  });
});

// Post request handling route for login
app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/testGuard',
    failureRedirect: '/testGuard',
  })
);

// Standerd middleware taking req, res and next as parameters
function loggedIn(req, res, next) {
  if (req.user) {
    // if request contains the user
    next(); // call next
  } else {
    res.status(403).send('Unauthorized'); // throwing unauthorized
  }
}

// Protected route
app.get('/testGuard', loggedIn, (req, res) => {
  res.send('YOU ARE AUTHENTICATED');
});

// Handle logout
app.get('/logout', (req, res) => {
  req.logout();
  res.send('YOU ARE NOW LOGGED OUT');
});

// start the app
app.listen(3000, () => {
  console.log('magical number is 3000');
});
```

In this example we are first just importing some `dependencies` and setting up some `middlewares`. That stuff should be familiar to you. We are using `express-session` and `body-parser` middlewares. Come to the part where we are setting up our passport strategy. We are calling `passport.use()` which takes a passport strategy object. In this case `localStrategy`. `LocalStrategy` take a function with all the fields required and a `callback` function done. Then we are using the `sequelize model` function `findOne()` which takes an object of options . Here in options we are specifying `where` email = provided email. SQL query it makes is `SELECT * FROM <tablename> WHERE email= <provided email> LIMIT 1;` It returns a `promise` with the data retrieved. Then we are checking for the user if it is null. If null so we are sending no user and no error in the callback. Then we are checking the password. You should use hashed password checking logic here for security. Some of password hashing libraries are `bcrypt, crypto etc`. If password do not match we will return no user. At last if all goes right we are return user with no error in the callback. Then there is standered passport `serialize and deserialize function`. But in `deserialize` we are using sequelize `findOne()` function as we have done above. Then there is a `post`request handler of express using passport middleware for authentication. Then we have a middleware function for `auth guard`. This function take `request, response and call next middleware` as parameters. In this we are checking if request contains the user then we are going to call next middleware else we are responding with `forbidden status`(403) with a unauthorised message. Then we have a protected route using this middleware. Then we have a logout route calling `request.logout()` when executed to log the user out and then send a success message. At last we are starting the app the to listen on `port` 3000._Tip:- Use [Postman](http://bit.ly/1HCOCwF) to test the apis._

---

#### Package.json file if anyone needs it

```json
{
  "name": "testPassport",
  "version": "1.0.0",
  "description": "Simple auth app",
  "main": "app.js",
  "author": "Harshit Pant",
  "license": "MIT",
  "dependencies": {
    "body-parser": "^1.17.1",
    "express": "^4.15.2",
    "express-session": "^1.15.2",
    "morgan": "^1.8.1",
    "passport": "^0.3.2",
    "passport-local": "^1.0.0",
    "pg": "^6.1.5",
    "pg-hstore": "^2.3.2",
    "sequelize": "^3.30.4"
  }
}
```

---

I recommend you to watch this [playlist](http://bit.ly/2ogl7zx) if you don't know how to use passport.
