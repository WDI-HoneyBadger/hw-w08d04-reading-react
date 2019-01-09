import React, { Component } from 'react';


class BookForm extends Component {
  constructor(){
    super();
    this.state ={
        title: '',
        author: '',
        image: '',
        release_date: ''
    }
  }

  handleChange(event){
    const currentInput = event.target.name;
    const newValue = event.target.value;

    this.setState({
        [currentInput]: newValue
    }, function() {
        console.log(this.state);   
    })
}

handleSubmit(event){
    event.preventDefault();
    this.props.createNewBook(this.state);
}
  render(){
      return(
          <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Title: </label> <input type="text" name="title" required onChange={this.handleChange.bind(this)}/><br/>
        <label>Author: </label> <input type="text" name="author" required onChange={this.handleChange.bind(this)}/><br/>
        <label>Image: </label> <input type="text" name="image" required onChange={this.handleChange.bind(this)}/><br/>
        <label>Release Date: </label> <input type="text" required  name="release_date"  onChange={this.handleChange.bind(this)}/><br/>
        <div className="buttons">
        <button>Add Book</button>
        <button onClick={() => this.props.toggleModal()}>Cancel</button>
        </div>
        </form>
      )
  }
}

export default BookForm;