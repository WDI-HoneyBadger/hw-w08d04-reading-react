import React, { Component } from 'react';
import Books from './components/Books';
import BooksForm from './components/BooksForm';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Books: [],
      activeBook: null,
      modal: false
    }
  } 
  componentDidMount(){
    // fetch all the data from our API
    // update our state "shows" with that data
    console.log('fetching data');
    fetch('http://myapi-profstream.herokuapp.com/api/fa39e1/books')
      .then( response => response.json())
      .then( data => {
        console.log(data);
        this.setState({
          Books: data
        })
      })
      .catch( error => {
        console.log(error)
      })
  }
  createNewBook(book) {
    /* 
      posts data to the database, the database
      sends that same data back.
      add that data to the 'shows' state
    */
   console.log('updating show');
   const url = 'http://myapi-profstream.herokuapp.com/api/fa39e1/books'
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
       const updatedBooks = this.state.Books.concat([data]);
       console.log(updatedBooks)
       this.setState({
        Books: updatedBooks
       })
     })
     .catch(error => {
       console.log(error);
     })
  }
  deleteBook(id) {
    return fetch('http://myapi-profstream.herokuapp.com/api/fa39e1/books' + id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
    })
  }
  
  renderBook(allBooks) {
    
    return allBooks.map((book) => {
      return (
        <Books key={book.id}
          book={book}
         
          setCurrentShow={this.setCurrentShow.bind(this)}/>
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
      activeBook: null,
      modal: !this.state.modal
    })
  }


  render() {
    return (
        
      <div className="App">
           <button onClick={this.toggleModal.bind(this)}>add new book</button>
        {this.state.modal ? <BooksForm createNewBook={this.createNewBook.bind(this)}/> : ''}
         <div>
 
        <div className="shows">
        {/* if this.state.currentShow has value
          render the show component that in there
        */}
          {this.renderBook(this.state.Books)}
        </div>
      </div>
      </div>
    );
  }
}

export default App;
