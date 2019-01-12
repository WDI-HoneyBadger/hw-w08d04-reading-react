import React, { Component } from 'react';

class NewBooks extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      author: '',
      release_date: '',
      image: ''
    }
  }
  handleChange(event){
    const currentInput = event.target.name;
    const newValue = event.target.value;
    // console.log('current input: ', currentInput);
    // console.log('newValue: ', newValue);

    this.setState({
      [currentInput]: newValue
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createNewBooks(this.state)
  }
  
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>title:</label><input type="text" name="title" onChange={this.handleChange.bind(this)}/><br/>
          <label>author:</label><input type="text" name="author" onChange={this.handleChange.bind(this)}/><br/>
          <label>release_date:</label><input type="text" name="release_date" onChange={this.handleChange.bind(this)}/><br/>
          <label>image:</label><input type="text" name="image" onChange={this.handleChange.bind(this)}/><br/>
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default NewBook;
