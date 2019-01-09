import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';
import NewForm from './components/NewForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: [],
      modal: false,
      currentImage: ''
    }
  }

  componentDidMount(){
    const url = 'http://myapi-profstream.herokuapp.com/api/417a98/books';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          books: data
        }, function(){
          console.log(this.state);
        })
      })
      .catch(error => console.log(error))
  }

  toggleModal(){
    this.setState({
      activeShow: null,
      modal: !this.state.modal
    })
  }

  getCurrentImage(image){
    this.setState({
      currentImage: image
    })
  }

  addNewBook(book){
    const url = 'http://myapi-profstream.herokuapp.com/api/417a98/books';
    fetch(url, {
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
        this.setState({
          books: updateBooks
        })
      })
      .catch(error => console.log(error));
  }

  renderBooks(books){
    return books.map((book, index) => {
        return (
        <Book key={index}
        book={book}
        getCurrentImage={this.getCurrentImage.bind(this)}/>
        )
      })
  }

  render() {
    return (
      <div>
        <div className="header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/PlusCM128.svg/1200px-PlusCM128.svg.png" onClick={this.toggleModal.bind(this)} className="add"/>
        </div>
        <div className="app">
          <div className="books">
            {this.renderBooks(this.state.books)}
          </div>
        <div className="divImage">
        {this.state.modal ? <NewForm addNewBook={this.addNewBook.bind(this)}/> : <img src={this.state.currentImage} alt="" className="image"/>}   
        </div>
        </div>
      </div>
    );
  }
}

export default App;
