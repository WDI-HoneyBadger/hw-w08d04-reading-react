import React, { Component } from 'react';
import './App.css';
import Books from './components/Books';
import AddBooks from './components/AddBooks';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Books: [],
      AddBooks: '',
      modal: false
    }
  }


  componentDidMount() {

    console.log('fetching data');
    fetch(`http://myapi-profstream.herokuapp.com/api/22d6b0/books`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          Books: data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  deleteBook(id) {
    const url = `http://myapi-profstream.herokuapp.com/api/22d6b0/books/${id}`
    fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(id)
    })
      .then(response => response.json())
    console.log(this.state.books)
  }

  createNewBooks(event) {

    console.log('updating books')
    const url = `http://myapi-profstream.herokuapp.com/api/22d6b0/books`;
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    })
      .then(response => response.json())
      .then(data => {
        console.log('DATA')
        console.log(data);
        const updatedBooks = this.state.books.concat([data]);
        console.log(updatedBooks)
        this.setState({
          Books: updatedBooks
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  renderBooks(allBooks) {

    return allBooks.map((event) => {
      return (
        <Books key={event.id}
          Books={event}

          setCurrentBooks={this.setCurrentBooks.bind(this)} />
      )
    })
  }

  setCurrentBooks(event) {
    console.log(event);
    this.setState({
      AddBooks: event
    })

  }

  toggleModal() {
    console.log('toggle modal');

    this.setState({
      activeBooks: null,
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal.bind(this)}>add new Book</button>
        {this.state.modal ? <AddBooks createNewBooks={this.createNewBooks.bind(this)} /> : ''}
        <div className="container">
          <div className="Books">
            {this.renderBooks(this.state.Books)}
          </div>
          
            <img className="img"  src={this.state.AddBooks.image} alt="" />
         
        </div>
        
      </div >
    );
  }

}

export default App;
