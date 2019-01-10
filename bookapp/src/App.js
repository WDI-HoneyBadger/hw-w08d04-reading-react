import React, { Component } from 'react';
import './App.css';
import Book from './components/books';
import BooksForm from './components/BooksForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      image: '',
      activeBooks: null,
      modal: false,
    }
  }

  componentDidMount() {
    console.log('fetching data');
    fetch('http://myapi-profstream.herokuapp.com/api/709544/books')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          books: data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  createNewBook(book) {

    console.log('updating book');
    const url = 'http://myapi-profstream.herokuapp.com/api/709544/books'
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    })
      .then(response => response.json())
      .then(data => {
        console.log('DATA')
        console.log(data);
        const updatedbooks = this.state.books.concat([data]);
        console.log(updatedbooks)
        this.setState({
          books: updatedbooks
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  deleteBook(id) {
    const url = `http://myapi-profstream.herokuapp.com/api/709544/books/${id}`
    fetch(url, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      const updatedbooks = this.state.books.filter(books => books.id !== id);
      console.log(updatedbooks)
      this.setState({
        books:updatedbooks,
        activeBooks: null
      })
    })
    .catch(error => {
      console.log(error);
    })
  }



  renderbooks(allbooks) {
    return allbooks.map((book) => {
      return (
        <Book key={book.id}
          book={book}
          showCurrentBook={this.showCurrentBook.bind(this)}
          deleteBook={this.deleteBook.bind(this)}
        />
      )
    })
  }


  showCurrentBook(book) {
    console.log(book);
    this.setState({
      image: book
    })
  }

  toggleModal() {
    console.log('toggle modal');

    this.setState({
      activeBooks: null,
      modal: !this.state.modal
    })
  }


  render() {
    return (
      <div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <div className="header">
          <h2 className="he">Reading List</h2>
          <button onClick={this.toggleModal.bind(this)}><i class="material-icons">add</i></button>
        </div>
        <div className="container">
          <div className="info">
            {this.renderbooks(this.state.books)}</div>
          <div className="bookshow">
            <img className="image" src={this.state.image.image} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
