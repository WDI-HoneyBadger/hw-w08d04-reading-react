import React, { Component } from 'react';

class AddBooks extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            release_date: '',
            image: '',
            instance_id: '',
            created_at: '',
            updated_at: ''
        }
    }
    handleChange(event) {
        const currentInput = event.target.name;
        const newValue = event.target.value;

        this.setState({
            [currentInput]: newValue
        })
    }


    handleSubmit(event) {
        event.preventDefault();
        this.props.createNewBooks(this.state)
    }

    render() {
        return (
            <div class="eachBook">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Title:</label><input type="text" name="title" onChange={this.handleChange.bind(this)} /><br />
                    <label>Author:</label><input type="text" name="author" onChange={this.handleChange.bind(this)} /><br />
                    <label>Release Date:</label><input type="number" name="release_date" onChange={this.handleChange.bind(this)} /><br />
                    <label>Image:</label><input type="text" name="image" onChange={this.handleChange.bind(this)} /><br />
                    <label>Instance ID:</label><input type="text" name="instance_id" onChange={this.handleChange.bind(this)} /><br />
                    <label>Created at:</label><input type="number" name="created_at" onChange={this.handleChange.bind(this)} /><br />
                    <label>Updated at:</label><input type="number" name="updated_at" onChange={this.handleChange.bind(this)} /><br />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default AddBooks;