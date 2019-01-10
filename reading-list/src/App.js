import React, { Component } from 'react';
import './App.css';
import Books from './components/Books';
import NewBook from './components/NewBook';

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      // activeBook :null,
      modal: false,
    }
  }
  componentDidMount() {
    console.log('fetching data');
    fetch('http://myapi-profstream.herokuapp.com/api/0602b2/books')
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
    const url = 'http://myapi-profstream.herokuapp.com/api/0602b2/books'
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
        const updatedBooks = this.state.books.concat([data]);
        console.log(updatedBooks)
        this.setState({
          books: updatedBooks
        })
      })
      .catch(error => {
        console.log(error);
      })
  }



  renderBooks(allBooks) {
    return allBooks.map((book) => {
      return (
        <Books key={book.id}
          setCurrentShow={this.setCurrentShow.bind(this)} />
      )
    })
  }

  setCurrentShow(book) {
    console.log(book);
    this.setState({
      activeBook: book
    })
  }

    toggleModal(){
      console.log('toggle modal');
      this.setState({
        activeShow: null,
        modal: !this.state.modal
      })
    }
    render() {
      return (

        <div className="app">
          <div>
            <button onClick={this.toggleModal.bind(this)}>Add A New Books</button>
            {this.state.modal ? <NewBook createNewBook={this.createNewBook.bind(this)} /> : ''}
            <div className="books">
              {this.renderBooks(this.state.books)}
            </div>

          </div>
        </div>
      )
  }
}
  export default App;
