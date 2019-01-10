import React, { Component } from 'react';


class ShowFrom extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            image: '',
        }
    }
    handleChange(event) {
        const currentInput = event.target.name;
        const newValue = event.target.value;

        this.setState({
            [currentInput] : newValue
        }, function(){
            console.log(this.state);
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.createNewbook(this.state)
      }

    render(){
        return(
            <div>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Title:</label>
                <input type="text" name="title" onChange={this.handleChange.bind(this)}/><br></br>
          <label>author:</label>
                <input type="text" name="author" onChange={this.handleChange.bind(this)}/><br></br>
          <label>Image:</label>
                <input type="text" name="image" onChange={this.handleChange.bind(this)} /><br></br>
          <button>submit</button>
        </form>
            </div>
        )

    }


}


export default ShowFrom;