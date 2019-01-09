import React, { Component } from 'react';
import './App.css';
import ShowForm from './comoponents/ShowForm';
import Tile from './comoponents/Tile';

class App extends Component {
  constructor(){
    super();
    this.state={
      books: [],
      activeBook: null,
      modal: false
    }
  }

  componentDidMount(){
  
    console.log('fetching data');
    fetch('http://myapi-profstream.herokuapp.com/api/9d2a4e/books')
      .then( response => response.json())
      .then(data => {
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
      //  console.log('updating books');
        const url = 'http://myapi-profstream.herokuapp.com/api/9d2a4e/books'
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



      renderTile(allBooks){
      
        return allBooks.map((book) => {
          return <Tile key={book.id} 
          book={book}
       
          setCurrentBook={this.setCurrentBook.bind(this)}/>
        })
      }

      //button
      setCurrentBook(book){
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
      <div>
      <button onClick={this.toggleModal.bind(this)}>add new show</button>
       {/* for button */}
      {/* if value is true ?*/}
      {this.state.modal ? <ShowForm createNewBook={this.createNewBook.bind(this)}/> : ''}
      <div>
      {/* (detales if you click the page (if this.state.currentShow */}
      {this.renderTile(this.state.books)}

     
      </div>
    </div>
    );
  }
}

export default App;
