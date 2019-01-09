import React, { Component } from 'react';

class BookForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            release_date: '',
            image: ''
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        //FETCH
        const url = 'http://myapi-profstream.herokuapp.com/api/96bb86/books/';
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(data => {
                console.log("DATA IS HERE")
                this.props.appendBook(data)
                this.props.toggleForm();
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="showForm">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Title: <input required type="text" name="title" onChange={this.handleChange.bind(this)} /> </label> <br />
                    <label>Author: <input required type="text" name="author" onChange={this.handleChange.bind(this)} /> </label> <br />
                    <label>Release Date: <input required type="text" name="release_date" onChange={this.handleChange.bind(this)} /> </label> <br />
                    <label>Image: <input required type="text" name="image" onChange={this.handleChange.bind(this)} /> </label> <br />
                    <button>Submit</button>
                    <button onClick={() => this.props.toggleForm()}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default BookForm;