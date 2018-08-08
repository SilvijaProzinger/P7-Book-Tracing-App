import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Search extends React.Component {
  state = {
    books: [],
    query: '',
    relevantBooks: []
  }

//fetch books in the database
componentDidMount() {
  BooksAPI.getAll().then((books) => {
      this.setState({ books:books })
    })
}

//create function which manages user input
updateQuery = (query) => {
    this.setState({query: query})
    let relevantBooks = []
    if (query) {
      BooksAPI.search(query).then(response => {
        if (response.length) {
          relevantBooks = response.map(b => {
            const index = this.state.books.findIndex(c => c.id === b.id)
            if(index >= 0 ) {
              return this.state.books[index]
            } else {
              return b
            }
          })
        }
        this.setState({relevantBooks})
      })
    }
    else {
      this.setState({relevantBooks})
    }
  }

 render () {
   return (
   <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                   type="text"
                   placeholder="Search by title or author"
                   value={this.state.query}
                   onChange={(event) => this.updateQuery(event.target.value)}
                  />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                 {this.state.relevantBooks.map((book, shelf) => (
                    <Book key={book.id} 
                        book={book}
                        onUpdateBook={(book, shelf) => this.props.updateShelf(book, shelf)}/>
                  ))}
              </ol>
            </div>
          </div>   
   ) 
 }
}

export default Search