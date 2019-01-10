import React, { Component } from 'react';
import './App.css';
import BookList from './components/BookList';

class App extends Component {
  constructor(){
    super();
    this.state ={
      books: [],
      activeBook: null,
      displayedImage: ''
    }
  }

  componentDidMount(){
    console.log('fetching data');
    fetch('http://myapi-profstream.herokuapp.com/api/18bf36/books')
      .then( response => response.json())
      .then( data => {
        console.log(data);
        this.setState({
          books: data
        })
      })
      .catch( error => {
        console.log(error)
      })
  }

  renderBooks(books) {
    return books.map((book) => {
      return (
        <BookList key={book.id}
          book={book}
          setCurrentBook={this.setCurrentBook.bind(this)}/>
      )
    })
  }

  setCurrentBook(book) {
    console.log(book);
    this.setState({
      activeBook: book
    })

    this.updateDisplay(book.image);
  }

  
  updateDisplay(img){
    this.setState({
      displayedImage: img
    })
  }

  render() {
    return (
      <div>
        <nav>
          <h1>Reading List</h1>
        </nav>
        <div>
          <img className="imageDisplay"  src={this.state.displayedImage} alt=""/>
          {this.renderBooks(this.state.books)}
        </div>
      </div>
    );
  }
}

export default App;