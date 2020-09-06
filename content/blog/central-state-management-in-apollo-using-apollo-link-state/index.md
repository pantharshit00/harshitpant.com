---
draft: false
title: Central State Management in Apollo Using apollo-link-state
date: 2017-12-28
author: Harshit Pant
tags:
  - graphql
  - misc
cover: ./cover.png
---

I was wondering around twitter one day then I saw this tweet by Peggy Rayzis.

https://twitter.com/peggyrayzis/status/944226678292860928

I was pretty happy and excited as now I can kick redux out of my code base with by both hands and ten fingers. I don't hate redux in any ways it solves many problems but it was getting pretty hard to maintain our graphql and redux codebase simultaneously. Thanks you Peggy and all of the apollo team for listening to the community and making this awesome apollo-link-state package.

Now in this blog post I am going to show you people how to implement apollo-link-state in your own projects using apollo graphql. We are going to make use of the graphql server that I made in the previous [blog post](https://hptechblogs.com/making-a-graphql-api-in-express/). This post would be kind of making UI to that API. You can also implement this any gql API. Just write queries according to your need.

---

# Prerequisites

1. Node JS (version 8 LTS is recommended but do not use less than 7.6)
2. Graphql Server (Clone [this](https://github.com/pantharshit00/grapqhql-api) repository for the server I am using. [Blog Post](https://hptechblogs.com/making-a-graphql-api-in-express/))
3. Google Chrome Browser(Specifying chrome as firefox doesn't have apollo developer tools yet )
4. Apollo Devtools (Optional)
5. React Devtools (Optional)
6. Text Editor (VSCode is my bet)

---

# Initializing the project

1. Install create-react-app globally if not already

```bash
> sudo npm i -g create-react-app # or yarn users do
> sudo yarn global add create-react-app
```

2. Initialize a new react app

```bash
> create-react-app bookstore-apollo
> cd bookstore-apollo
```

3. Install additional dependencies

```bash
> yarn add apollo-client-preset apollo-link-state react-apollo graphql graphql-tag # or npm users do
> npm i apollo-client-preset apollo-link-state react-apollo graphql graphql-tag --save
```

---

# Remove boilerplate code

Open `src/App.js` and get rid of the following

```diff
import React, { Component } from 'react';
- import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
+      <div>
-      <div className="App">
-        <header className="App-header">
-          <img src={logo} className="App-logo" alt="logo" />
-          <h1 className="App-title">Welcome to React</h1>
-        </header>
-        <p className="App-intro">
-          To get started, edit <code>src/App.js</code> and save to reload.
-       </p>
       </div>
    );
  }
}

export default App;
```

---

# Initialize Apollo client

Create file `src/apollo.js` and write the following code.

```js
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import resolvers from './resolvers';

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/graphql',
});

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
  resolvers,
  defaults: {
    show_type: 'BELOW_15',
  },
});

const link = ApolloLink.from([stateLink, httpLink]);

const client = new ApolloClient({
  link,
  cache,
});

export default client;
```

To initialize an apollo client we need two things, the network layer called link, and the storage layer called cache. First we are bringing in all the the required packages. Most of these are install using the apollo-client-preset package. Then we are creating a httpLink which connects to a graphql server. Then we are initializing the cache using the InMemoryCache class. You may use a localStorage cache as well.

Then we are initializing the state link. State link takes three arguments namely cache, resolver and defaults. The cache is the place where store's data will be stored. We have passed the inmemory cache in there. The resolvers are basically like reducers in redux which the Mutations which changes the data in the store. We are going to import then later. Finally we have defaults which is the initial state of the store.

Then we are connecting the httplink and the statelink. After that we are initializing the apollo client using our cache and the links. Finally we are exporting the client so that we may make use of it in our react application.

---

# Bind Apollo Client to our app

Open `src/index.js` and add the following code:

```diff
import React from 'react';
import ReactDOM from 'react-dom';
+ import { ApolloProvider } from 'react-apollo';
+ import client from './apollo';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
+ <ApolloProvider client={client}>
    <App />
+ </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
```

In this snippet we are connecting our react app to apollo using the ApolloProvider. It takes the client we have made as a prop and make it available down the chain of components.

---

# Bring books to our app

```diff
import React, { Component } from 'react';
+ import gql from 'graphql-tag';
+ import { graphql, compose } from 'react-apollo';
import './App.css';

class App extends Component {
  render() {
+    const { allBooksQuery } = this.props;
+    if (allBooksQuery.loading) {
+      return <h1>Loading....</h1>;
+    }
+    const books = allBooksQuery.getAllBooks;
+    return (
+      <div>
+        <h1>Bookstore</h1>
+        {books.map(item => (
+          <h3 key={item._id}>
+            {item.title} - ${item.price}
+          </h3>
+        ))}
+      </div>
+    );
  }
}

+ const allBooksQuery = gql`
+  query allBooksQuery {
+    getAllBooks {
+      _id
+      author
+       title
+      price
+    }
+  }
+`;

- export default App;

+ export default compose(
+  graphql(allBooksQuery, { name: 'allBooksQuery' }),
+ )(App);
```

In this snippet first we are importing the dependencies. We are rendering the data made available using allBooksQuery props by the graphql Higher Order component. We are running an allBooksQuery which fetched the data from the server. We are also making use of compose HOC as we are going to add more to this.

---

# Make the toggle button

We are going to make use of two buttons to change our global state. Add the following code to add them

```diff
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import './App.css';

class App extends Component {
  render() {
    const { allBooksQuery } = this.props;
    if (allBooksQuery.loading) {
      return <h1>Loading....</h1>;
    }
    const books = allBooksQuery.getAllBooks;
    return (
      <div>
        <h1>Bookstore</h1>
        {books.map(item => (
          <h3 key={item._id}>
            {item.title} - ${item.price}
          </h3>
        ))}
+        <button onClick={() => this.changeShow('BELOW_15')}>Below $15</button>
+        <button onClick={() => this.changeShow('ABOVE_15')}>Above $15</button>
      </div>
    );
  }
}

 const allBooksQuery = gql`
  query allBooksQuery {
    getAllBooks {
      _id
      author
       title
      price
    }
  }
`;

 export default compose(
  graphql(allBooksQuery, { name: 'allBooksQuery' }),
 )(App);
```

Add this css to `src/app.css` if you want to make them look better

```css
button {
  padding: 0.5rem;
  cursor: pointer;
  background: rebeccapurple;
  border: none;
  outline: none;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  margin: 0 1rem 0 0;
  color: white;
}

#root {
  margin: 1rem;
}
```

These buttons will initiate the state change.

---

# Add mutation

Create a new file `src/resolvers` and add the code. These mutations acts kinda like reducers in redux and changes the state.

```js
export default {
  Mutation: {
    changeShowType: (_, { show_type }, { cache }) => {
      cache.writeData({ data: { show_type } });
      return { show_type, __typename: 'ShowType' };
    },
  },
};
```

This file exports an object containing mutations. Each key value pair represents a Mutation. The first argument is the parent object. Dont care much about it as docs says the same lol. The second argument is the query variables. The third argument is the context containing cache. We are taking the data and writing it to the cache. At last we are returning the show_type with a typename. Typename can be anything and it is important as it is used as key for the cache.

---

# Using our store to filter data

Open `src/App.js` and add the following

```diff
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import './App.css';

class App extends Component {
  render() {
-    const { allBooksQuery } = this.props;
+    const { showTypeQuery, allBooksQuery } = this.props;
-    if (allBooksQuery.loading) {
+    if (showTypeQuery.loading || allBooksQuery.loading) {
      return <h1>Loading....</h1>;
    }
-    const books = allBooksQuery.getAllBooks;
+    const books = allBooksQuery.getAllBooks.filter(item => {
+      if (showTypeQuery.show_type === 'BELOW_15') {
+        return item.price < 15;
+      }
+      return item.price >= 15;
+    });
    return (
      <div>
        <h1>Bookstore</h1>
        {books.map(item => (
          <h3 key={item._id}>
            {item.title} - ${item.price}
          </h3>
        ))}
        <button onClick={() => this.changeShow('BELOW_15')}>Below $15</button>
        <button onClick={() => this.changeShow('ABOVE_15')}>Above $15</button>
      </div>
    );
  }
+  changeShow = type => {
+    this.props.mutate({
+      variables: { show_type: type }
+    });
+  };
}

const allBooksQuery = gql`
  query allBooksQuery {
    getAllBooks {
      _id
      author
      title
      price
    }
  }
`;

+ const showTypeQuery = gql`
+  query showTypeQuery {
+    show_type @client
+  }
+`;

+ const showTypeMutation = gql`
+  mutation showTypeMutation($show_type: String!) {
+    changeShowType(show_type: $show_type) @client {
+      show_type
+    }
+  }
+ `;

export default compose(
+  graphql(showTypeQuery, { name: 'showTypeQuery' }),
  graphql(allBooksQuery, { name: 'allBooksQuery' }),
+  graphql(showTypeMutation)
)(App);
```

In this snippet first we are bringing in our store to our application using some of the queries. See in the the showTypeQuery to differentiate that we are reading data from the store not from the actual server. We use the `@client` directive. The mutation is the same one that we have created in our resolvers. Then we are filtering our books according to the value in our store. To chage the show type we call the changeShow method which calls the mutation to the store.

---

# Result

![apollo_example_gif](./apollo.gif)

---

# Conclusion

Now you can use apollo graphql tools as a complete rest redux replacement. They are very powerful and easy to work and I am sure sure they will be used widely in coming years.
