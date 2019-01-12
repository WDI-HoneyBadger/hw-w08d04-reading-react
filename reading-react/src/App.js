import React, { Component } from 'react';
import './App.css';
import Books from './components/Books';
import NewBooks from './components/NewBooks'
class App extends Component {

  constructor(){
    super()

    this.state = {
      books:[],
      modal: false,
      image:''
    }

  }

  componentDidMount(){
    console.log('fetching data');
    fetch('http://myapi-profstream.herokuapp.com/api/8c36bf/books')
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

  renderBooks(allBooks) {
    return allBooks.map((book) => {
      return (
        <Books key={book.id}
          book={book} showImage = {this.showImage.bind(this)}/>
      )
    })
  }

  showImage(newImage){
    console.log('New image',newImage);
    this.setState({
      image: newImage
    })
 
  
  }

  renderImage(i){
    return (
      <img src={i} alt=""/>
    )
  }

  createNewBook(show) {
   
   console.log('updating show');
   const url = 'http://myapi-profstream.herokuapp.com/api/8c36bf/books'
   fetch(url, {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(show)
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


  toggleModal(){
    console.log('toggle modal');
    this.setState({
      activeShow: null,
      modal: !this.state.modal
    })
  }
  render() {
    return (
      <div className="app">
      <div>
              <button onClick={this.toggleModal.bind(this)}>Add A New Books</button>
              {this.state.modal ? <NewBooks createNewBook={this.createNewBook.bind(this)}/> : ''}
      </div>
      <div className="books">
         {this.renderBooks(this.state.books)}

      </div>
      <div className = "image">
          {this.renderImage(this.state.image)}
      </div>
      </div>
    );
  }
}

export default App;