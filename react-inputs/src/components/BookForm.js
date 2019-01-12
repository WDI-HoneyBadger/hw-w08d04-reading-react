import React, { Component } from 'react';

class BookForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            relese_data: '',
            image: ''
        }
    }

    handeleChange(event) {
        const currentInput = event.target.name;
        const newValue = event.target.value;
        this.state({
            [currentInput]: newValue
        })
    }
    handeleSubmit(event) {
        event.preventDefault();
        this.props.createNewbook(this.state)

    }

    render() {
        return(
        <div className='nwbook'>
            <form onSubmit={this.handeleSubmit.bind(this)}>
                <label htmlFor="">Title :</label> <input type="text" name="title" onChange={this.handeleChange.bind(this)} /> <br />
                <label htmlFor="">Author:</label> <input type="text" name="author" onChange={this.handeleChange.bind(this)} /> <br />
                <label htmlFor="">Image :</label> <input type="text" name="image" onChange={this.handeleChange.bind(this)} /> <br />
                <label htmlFor="">Release Date :</label> <input type="text" name="relese_date" onChange={this.handeleChange.bind(this)} /> <br />
                <button>Submit</button>


            </form>

        </div>
        );
    }
}
export default BookForm;