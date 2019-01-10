import React, { Component } from 'react';
import './App.css';
import Tile from './components/Tile';
import ShowForm from './components/ShowForm';


class App extends Component {
  constructor(){
    super();
    this.state = {
      book: [],
      images: '',
      activeBook: null,
      modal: false
    }
  } 
  componentDidMount(){
    fetch('http://myapi-profstream.herokuapp.com/api/3c4eaa/books')
      .then( response => response.json())
      .then( data => {
        console.log(data);
        this.setState({
          book: data
        })
      })
      .catch( error => {
        console.log(error)
      })
  }

  createNewBook(book) {
   const url = 'http://myapi-profstream.herokuapp.com/api/3c4eaa/books'
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
       const updatedbook = this.state.book.concat([data]);
       console.log(updatedbook)
       this.setState({
         book: updatedbook
       })
     })
     .catch(error => {
       console.log(error);
     })
  }

  renderTiles(allBook) {
    // map through the state "shows" 
    // and make a tile for each TV show
    return allBook.map((book) => {
      return (
        <Tile key={book.id}
          book={book}
          //  Title={show.title} 
          // author={show.author}
          // img={show.image}
         setCurrentBook={this.setCurrentBook.bind(this)}/>
      )
    })
  }

  setCurrentBook(show) {
    console.log(show);
    this.setState({
      images: show
    })
    // when given a show, set state 'activeShow' to that show
  }

  toggleModal(){
    this.setState({
      activeBook: null,
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <h1> Reading List </h1>
        <button onClick={this.toggleModal.bind(this)}>add new Book</button>
        {this.state.modal ? <ShowForm createNewbook={this.createNewBook.bind(this)}/> : <img src={this.state.images} alt=""></img>}
      <div> 
          {this.renderTiles(this.state.book)}
      </div>
          
          
        </div>
      
    );
  }
}




export default App;
