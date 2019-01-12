import React, { Component } from 'react';
import Book from './components/Book';


import './App.css';
import BookForm from './components/BookForm';

class App extends Component {
  constructor(){
    super();
    this.state= {
      books:[],
      activeShow: null,
      modal:false
    }
  }
  componentDidMount(){
    console.log('fetching data');
    fetch('http://myapi-profstream.herokuapp.com/api/d1d9fc/books')
    .then (response => response.json())
    .then (data => {
      console.log(data);
      this.setState({
        books:data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
  createNewbook(book){
    const url = 'http://myapi-profstream.herokuapp.com/api/d1d9fc/books'
    fetch(url , {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const updateBooks = this.state.books.concat([data]);
      console.log(updateBooks)
      this.setState({
        books: updateBooks,
        activeShow: data,
        modal: false
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

renderBooks(allBooks){
  return allBooks.map((book) => {
    return (
      <book key={book.id}
      book={book}
      setCurrentBook={this.setCurrentBook.bind(this)}/>
    )
  })
  
}

setCurrentBook(book){
  console.log('setting book');
  console.log(book);
  this.setState({
    activeShow: book
  })
}

toggleModal(){
  this.setState({
    modal: !this.state.modal
  })
}

  render() {
    return (
      <div className="App">
      <button onClick={this.toggleModal.bind(this)}> Create New Book</button>
      {this.state.modal ? <Book createNewbook={this.createNewbook.bind(this)}/> : ''}
      {this.renderBooks(this.state.books)}
      <img src={this.state.book.image} />
     
      </div>
    );
  }
}

export default App;
