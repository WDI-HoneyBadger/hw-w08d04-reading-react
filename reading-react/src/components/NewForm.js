import React , { Component } from 'react';

class NewForm extends Component {
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
        this.setState({
            [currentInput]: newValue
        })
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        this.props.addNewBook(this.state);
    }

    render(){
        return (
            <div className="new">
                <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Title:</label><br/><input type="text" name="title" onChange={this.handleChange.bind(this)}/> <br/>
                <label>Author:</label><br/><input type="text" name="author" onChange={this.handleChange.bind(this)}/> <br/>
                <label>Release Date:</label><br/><input type="text" name="release_date" onChange={this.handleChange.bind(this)}/> <br/>
                <label>Image:</label><br/><input type="text" name="image" onChange={this.handleChange.bind(this)}/> <br/>
                <button>submit</button>
                </form>
            </div>
        )
    }
} 

export default NewForm;