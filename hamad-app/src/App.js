import React, { Component } from 'react';
import './App.css';
import ShowtheBook from './components/ShowtheBook';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      holeBooks: [],
      show: '',
      model: false
    }
  }

  addingBook(book) {

    const url = 'http://myapi-profstream.herokuapp.com/api/4d7a16/books'
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
        const updatedShows = this.state.holeBooks.concat([data]);
        console.log(updatedShows)
        this.setState({
          holeBooks: updatedShows
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  deleteBook(id) {
    const url = `http://myapi-profstream.herokuapp.com/api/fa39e1/books/${id}`
    fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log(this.state.holeBooks)
  }

  componentDidMount() {
    fetch('http://myapi-profstream.herokuapp.com/api/fa39e1/books')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          holeBooks: data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  renderBook(show) {
    return show.map((book, index) => {
      return (
        <ShowtheBook key={index}
          book={book}
          setCurrentShow={this.setCurrentShow.bind(this)}
          deleteBook={this.deleteBook.bind(this)}
        />
      )
    })
  }

  setCurrentShow(showBook) {
    console.log(showBook)

    this.setState({
      show: showBook
    })
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div className="App">
       
          <button onClick={this.toggleModal.bind(this)}>Add New Book</button>

            {this.state.modal ? <Form addingBook={this.addingBook.bind(this)} /> : ''}
            
            {this.renderBook(this.state.holeBooks)}
            <img className="img" src={this.state.show.image} alt="" />
            
      </div>
          );
        }
      }
      
      export default App;