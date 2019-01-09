import React, { Component } from 'react';
import './App.css';
import Books from './components/Books';
import BookForm from './components/BookForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: [],
      activeBook: null,
      modal: false,
      bookImg:''
    }
  } 

  componentDidMount(){
    console.log('fetching data');
    fetch('http://myapi-profstream.herokuapp.com/api/84dfbc/books')
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

  createNewBook(book) {
   const url = 'http://myapi-profstream.herokuapp.com/api/84dfbc/books'
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

  renderBooks(allbooks) {
    return allbooks.map((book) => {
      return (
        <Books key={book.id}
          book={book}
          bookImage={this.bookImage.bind(this)}/>
      )
    })
  }


  toggleModal(){
    console.log('toggle modal');
    this.setState({
      activeBook: null,
      modal: !this.state.modal
    })
  }

  bookImage(img){
    this.setState({
      bookImg: img
    })
  }

  render() {
    return (
      <div>
        <h1>Reading List</h1>
        <button onClick={this.toggleModal.bind(this)}>Add new book</button>
        {this.state.modal ? <BookForm createNewBook={this.createNewBook.bind(this)} toggleModal={this.toggleModal.bind(this)}/> :  <img src={this.state.bookImg} alt="" height="300px" width="300px"/>}
        <div className="books">
          {this.renderBooks(this.state.books)}
        </div>
      </div>
    );
  }
}

export default App;