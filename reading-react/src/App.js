import React, { Component } from 'react';
import './App.css';
import BookForm from './Components/BookForm';
import Books from './Components/Books';

class App extends Component {
  constructor() {
    super();
    this.state = {

      books: [],
      activeBook: null,
      modal: false
    }
  }
  componentDidMount() {
    //fetch all data from boomAPI
    fetch('http://myapi-profstream.herokuapp.com/api/af2305/books')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.state({
          books: data
        })
      })
      .catch(error => {
        console.log(error)
      })

  }

  createNewBook(book) {
    const url = 'http://myapi-profstream.herokuapp.com/api/af2305/books'
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    })
      .then(response => response.json())
      .then(data => {
        console.log('DATA');
        console.log(data);
        const updateBooks = this.state.concat([data]);
        console.log(updateBooks)
        this.setState({
          books: updateBooks
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  // deleteBook(bookID) {
  //   const url = 'http://myapi-profstream.herokuapp.com/api/af2305/books'
  //   fetch(url, {
  //     method: 'DELETE',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  renderBooks(allBooks) {
    return allBooks.map((book) => {
      return (
        <Books key={book.id}
          book={book}
          setCurrentBook={this.setCurrentBook.bind(this)} />
      )
    })

  }
  setCurrentBook(book){
    console.log(book);
    this.setState({
      activeBook:book
    })
  }
  toggleModal() {
    console.log('toggle modal');

    this.setState({
      activeBook: null,
      modal: !this.state.modal
    })
  }


  render() {
    return (
      <div>

        <button onClick={this.toggleModal.bind(this)}>add</button>
        {this.state.modal ? <BookForm createNewBook={this.createNewBook.bind(this)} /> : ''}
        <div className="books">
          {this.renderBooks(this.state.books)}
        </div>
      </div>
    );
  }

  export default App;
