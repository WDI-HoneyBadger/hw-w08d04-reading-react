import React, { Component } from 'react';
import './App.css';
import Book from './component/BookShow';
import Form from './component/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      show: '',
      active:null,
      modal: false
    }
  }
  componentDidMount() {
    fetch('http://myapi-profstream.herokuapp.com/api/9eb23d/books')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          books: data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  createNewBook(book) {

    const url = 'http://myapi-profstream.herokuapp.com/api/9eb23d/books';

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)

    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        const updatedShows = this.state.books.concat([data]);
        console.log(updatedShows)
        this.setState({
          books: updatedShows
        })
      })
      .catch(error => {
        console.log(error);
      })
  }


  deleteBook(id) {
    const url = `http://myapi-profstream.herokuapp.com/api/9eb23d/books${id}`
    fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(this.state.books)
  }


  renderbooks(allbooks) {
    return allbooks.map((book) => {
      return (
        <Book key={book.id}
          book={book}
          showCurrentBook={this.setCurrentShow.bind(this)}
          deleteBook={this.deleteBook.bind(this)}
        />
      )
    })
  }

  setCurrentShow(bookData) {
    console.log(bookData)

    this.setState({
      show: bookData
    })
  }

  toggleModal() {
    this.setState({
      active: null,
      modal: !this.state.modal
    })
  }

  render() {
    return (

      <div className="App">

        <button onClick={this.toggleModal.bind(this)}>Add New Book</button>

        {this.state.modal ? <Form createNewBook={this.createNewBook.bind(this)} /> : ''}

        {this.renderbooks(this.state.books)}

        <img className="img" src={this.state.show.image} alt="" />

      </div>

    );
  }
}

export default App;