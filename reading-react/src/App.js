import React, { Component } from 'react';
import './App.css';
import Book from './components/Books';
import BookForm from './components/BookForm';

class App extends Component {
  constructor(){
    super();
    this.state ={
      books: [],
      imgBook: '',
      modal: false
    }
  }

  componentDidMount(){
    
    fetch('http://myapi-profstream.herokuapp.com/api/ec5ef6/books')
      .then( response => response.json())
      .then( data => {
        this.setState({
          books: data
        })
      })
      .catch( error => console.log(error))
  }

  createNewBook(book){
    const url = 'http://myapi-profstream.herokuapp.com/api/ec5ef6/books';
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

  deleteBook(id){
    const url = `http://myapi-profstream.herokuapp.com/api/ec5ef6/books/${id}`;
    fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }      
    })
    .then(() => {

      const filteredArray = this.state.books.filter((element) => {
        return element.id !== id;
      })
      this.setState({books: filteredArray})
      
    })
    .catch( error => console.log(error))
  }
  renderBooks(allBooks){

    return allBooks.map((book, index) =>{
      return <Book key={index}
      book={book}
      showImage={this.showImage.bind(this)}
      deleteBook={this.deleteBook.bind(this)}/>
      
    })

  }

  showImage(img){
    // console.log(img);
    this.setState({
      imgBook: img
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
      <header>
        <h1>Reading List</h1>
        <div className="new" onClick={this.toggleModal.bind(this)}>+</div>
        </header>
        <div className="container">
        <div className="books">
          {this.renderBooks(this.state.books)}
          </div>
        {this.state.modal? <BookForm createNewBook={this.createNewBook.bind(this)} toggleModal={this.toggleModal.bind(this)}/> :  <img src={this.state.imgBook} alt=""/> }
         
        </div>
        
      </div>
    );
  }
}

export default App;
