import React, { Component } from 'react';
import './App.css';

class App extends Component {


  constructor(){
    super()
    this.state = { 
      books: [],
      allshows:'',
      model:false
    }
  }
  componentDidMount(){
    console.log('fetching data');
    fetch('http://myapi-profstream.herokuapp.com/api/99256f/books')
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

  createNewShow(show) {
  
   console.log('updating show');
   const url = 'http://myapi-profstream.herokuapp.com/api/99256f/books'
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
       const updatedShows = this.state.shows.concat([data]);
       console.log(updatedShows)
       this.setState({
         books: updatedShows
       })
     })
     .catch(error => {
       console.log(error);
     })
  }


  renderBook(show) {
    return show.map((book, index) => {
      return (
        <ShowBook key={index}
          book={book}
          setCurrentShow={this.setCurrentShow.bind(this)}
          deleteBook={this.deleteBook.bind(this)}
        />
      )
    })
  }

 
  setCurrentShow(show) {
    console.log(show);
    this.setState({
      activeShow: showBook
    })
    // when given a show, set state 'activeShow' to that show
  }



  toggleModal() {
    this.setState({
      modal: !this.state.modal
    })
  }


 

  render() {
    return (
      <div>
      <div className="header">
      <img src="https" onClick={this.toggleModal.bind(this)} className="add"/>
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
