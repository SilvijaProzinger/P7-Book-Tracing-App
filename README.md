
# MyReads Project

The goal of this project was to create a React application called MyReads, which allows books to be categorized in three bookshelves. The project was written with React and created using Udacity's workspace template. 

# Features

Three bookshelves, called 'Currently Reading', 'Want to Read' and 'Read'. A database of books is also included. Books can be searched, moved from one bookshelf to another, deleted from bookshelf and new books from search can be added. 

# How to run

To run this project all that is needed is NPM and these commands:
1. npm install
2. npm start

## Content

â”śâ”€â”€ README.md - This file.
â”śâ”€â”€ SEARCH_TERMS.md 
â”śâ”€â”€ package.json
â”śâ”€â”€ public
â”‚Â Â  â”śâ”€â”€ favicon.ico 
â”‚Â Â  â””â”€â”€ index.html 
â””â”€â”€ src
    â”śâ”€â”€ App.css 
    â”śâ”€â”€ App.js 
    â”śâ”€â”€ App.test.js 
    â”śâ”€â”€ BooksAPI.js 
    â”śâ”€â”€ icons 
    â”‚Â Â  â”śâ”€â”€ add.svg
    â”‚Â Â  â”śâ”€â”€ arrow-back.svg
    â”‚Â Â  â””â”€â”€ arrow-drop-down.svg
    â”śâ”€â”€ index.css 
    â””â”€â”€ index.js 

## Backend Server

The backend server [`BooksAPI.js`](src/BooksAPI.js) contains following methods:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature: getAll()

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in the app.

### `update`

Method Signature: update(book, shelf)

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature: search(query, maxResults)

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.


## Code Dependencies and References

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and the template was used via Udacity MyReads Project Workspace. Other references include:
1. Nicolas Marcora, React from Scratch, source: https://blog.usejournal.com/react-from-scratch-8acf7a1b00a4
2. Dave Ceddia, Where to Initialize State in React, source: https://daveceddia.com/where-initialize-state-react/
3. Official React documentation, Thinking in React, source: https://reactjs.org/docs/thinking-in-react.html
4. React.tips, How React.js Components Communicate, source: http://react.tips/how-reactjs-components-communicate/
