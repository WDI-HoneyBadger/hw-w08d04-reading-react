import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';
import BookForm from './components/BookForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: [],
      activeImage: '',
      modal: false
    }
  } 

  componentDidMount(){
    console.log('fetching data');
    fetch('http://myapi-profstream.herokuapp.com/api/0f2b5a/books')
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
   console.log('updating book');
   const url = 'http://myapi-profstream.herokuapp.com/api/0f2b5a/books'
   fetch(url, {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(book)
     })
     .then(res => res.json())
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
        <Book key={book.id}
          book={book}
          setImage={this.setImage.bind(this)}/>
      )
    })
  }

  setImage(image) {
    console.log(image);
    this.setState({
      activeImage: image
    })
  }

  renderImage(image){
    return(
      <img src={image} alt=""/>
    )
  }

  toggleModal(){
    console.log('toggle modal');

    this.setState({
      activeBook: null,
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div className="app">
        <nav>
          <h3>Reading list</h3>
          <button onClick={this.toggleModal.bind(this)}>+</button>
        </nav>

        <div className="container">
        <div className="books">
        {this.state.modal ? <BookForm createNewBook={this.createNewBook.bind(this)}/> : ''}
          {this.renderBooks(this.state.books)}
        </div>
        <div className="image">
          {this.renderImage(this.state.activeImage)}
        </div>
        
        </div>
       

  
      </div>
    );
  }
}

export default App;