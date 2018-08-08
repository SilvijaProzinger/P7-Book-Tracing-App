import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'

//import components
import BookList from './components/BookList'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    books: []
  }

//fetch all the books
componentDidMount() {
  BooksAPI.getAll().then((books) => {
      this.setState({ books:books })
    })
}

//update the shelf after selecting the option on the book
updateShelf = (book, shelf) => {
    let books;
    if (this.state.books.findIndex(b => b.id === book.id) > 0) {
      //change book from one shelf to another
      books = this.state.books.map(b => {
        if (b.id === book.id) {
          return {...book, shelf}
        } else {
          return b
        }
      })
    } else {
      //add a new book to a shelf
      books = [...this.state.books, {...book, shelf}]
    }
    this.setState({books})
    BooksAPI.update(book, shelf).then((data) => {
      //update shelves on the server
    })
  }

  render() {
    return (
      <div className="app">
       <Route path='/search' render={() => (
        <Search
           books={this.state.books}
           updateShelf={this.updateShelf}/>
        )}/> 
        <Route exact path='/' render={() => (
        <BookList 
           books={this.state.books}
           updateShelf={this.updateShelf}/>
        )}/>                               
      </div>
    )
  }
}

export default BooksApp
