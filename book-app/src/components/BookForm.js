import React, {Component} from 'react';


class BookForm extends Component{
    constructor(){
        super();
        this.state ={
            title: '',
            author: '',
            release_date: '',
            image: ''

        }
       
    }
    handleChange(event){
        const currInput = event.target.name;
        const newValue = event.target.value;
        // console.log('current input', currInput);
        // console.log('new value', newValue);
        this.setState({
            [currInput]: newValue
        })
    }
    
    handleSubmit(event){
        event.preventDefault();
        this.props.createNewBook(this.state)

    }

    render(){
        return(
            <div className="newBook">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Title:</label> <input type="text" name="title" onChange={this.handleChange.bind(this)}/><br/>
                    <label>Author:</label> <input type="text" name="author" onChange={this.handleChange.bind(this)}/><br/>
                    <label>Image:</label> <input type="text" name="image" onChange={this.handleChange.bind(this)}/><br/>
                    <label>Release Date:</label> <input type="text" name="release_date" onChange={this.handleChange.bind(this)}/><br/>

                    <button>Submit</button>
                </form>
                
            </div>
        )
    }

}


export default BookForm;