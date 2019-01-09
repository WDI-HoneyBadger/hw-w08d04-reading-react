import React, { Component } from 'react';
import './App.css';
// import Book from './components/Book';
import Tile from './components/Tile';
import BookForm from './components/BookForm';


class App extends Component {
  constructor(){
    super();
    this.state ={
      books:[],
      activeBook :null,
      modal :false,

    }
  }
  componentDidMount(){
    console.log('fetching data');
    fetch('http://myapi-profstream.herokuapp.com/api/05119a/books')
    .then(response =>response.json())
    .then(data => {
      console.log(data)
      this.setState({
        books : data
      })

    })
      .catch(error =>{
        console.log('error /n',error)
    })
  }

  createNewBook(book){
    const url = 'http://myapi-profstream.herokuapp.com/api/05119a/books'
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
       const updatedBookss = this.state.books.concat([data]);
       console.log(updatedBookss)
       this.setState({
         books: updatedBookss
       })
     })
     .catch(error => {
       console.log(error);
     })
  }

  renderTiles(allBooks) {
    // map through the state "shows" 
    // and make a tile for each TV show
    return allBooks.map((book,index) => {
      return (
        <Tile key={index}
          book={book}
          // name={show.name} 
          // image={show.image}
          setCurrentBook={this.setCurrentBook.bind(this)}/>
      )
    })
  }

  setCurrentBook(book) {
    console.log(book);
    this.setState({
      activeBook: book
    })
    // when given a show, set state 'activeShow' to that show
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
      <div className="books">
      <button onClick={this.toggleModal.bind(this)}>add new book</button>
      {this.state.modal ? <BookForm createNewBook ={this.createNewBook.bind(this)}/> :''}
      <div>
        {this.renderTiles(this.state.books)}
      </div>
      </div>



    );
  }
}



export default App;
