import React, { Component } from 'react';

class ShowForm extends Component {
  constructor(){
    super();
    this.state ={
        title:'',
        image:'',
        auther:'',
        release_date :''
    }
  }

  handleChange(event){
      const currentInput = event.target.title;
      const newValue = event.target.value;
    this.setState({
        [currentInput] : newValue
    },function(){
        console.log(this.state)
    })
  }

  handleSubmit(event){
event.preventDefault();
this.props.createNewBook(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Title: </label>
            <input type="text" name="title"  onChange={this.handleChange.bind(this)}/><br></br>
            <label>Auther: </label>
            <input type="text" name="auther" onChange={this.handleChange.bind(this)}/><br></br>
            <label>image: </label>
            <input type="text" name="image" onChange={this.handleChange.bind(this)}/><br></br>
            <label>Release date: </label>
            <input type="number" name="release_date" onChange={this.handleChange.bind(this)}/><br></br>
            <button>submit</button>
        </form>
      </div>
    );
  }
}

export default ShowForm;