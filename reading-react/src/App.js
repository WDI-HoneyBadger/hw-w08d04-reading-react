import React, { Component } from 'react';
import './App.css';
import BookItem from './components/BookItem';
import BookForm from './components/BookForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      books: [],
      hoveredImage: 'https://t1.rbxcdn.com/0628d923e3225f03a827bfcfd5c64b96'
    }
  }

  componentDidMount() {
    fetch('http://myapi-profstream.herokuapp.com/api/96bb86/books')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ books: data });
      })
      .catch(error => console.log(error))
  }

  renderBooks(books) {
    return books.map((book, index) => {
      return <BookItem key={index} book={book}
        updateImage={this.updateImage.bind(this)}
        deleteBook={this.deleteBook.bind(this)} />
    })
  }

  toggleForm() {
    this.setState({ showForm: !this.state.showForm })
  }

  updateImage(imageUrl) {
    this.setState({ hoveredImage: imageUrl })
  }

  appendBook(book) {
    this.setState({ books: this.state.books.concat(book) })
  }

  deleteBook(id) {
    const url = `http://myapi-profstream.herokuapp.com/api/96bb86/books/${id}`;
    fetch(url, {
      method: "DELETE"
    })
      .then(() => {

        const filteredArray = this.state.books.filter((element) => {
          return element.id !== id;
        })
        this.setState({books: filteredArray})
        
      })
      .catch(error => console.log(error))
  }

  render() {

    return (
      <div className="app">
        <div className="header">
          <h1>Reading</h1>
          <button onClick={() => this.toggleForm()}>+</button>
        </div>

        <div className="container">
          <div className="bookList">
            {this.renderBooks(this.state.books)}
          </div>

          <div className="imgOrForm">
            {this.state.showForm ? <BookForm toggleForm={this.toggleForm.bind(this)} appendBook={this.appendBook.bind(this)} />
              : <img src={this.state.hoveredImage} alt="BLA" />}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
