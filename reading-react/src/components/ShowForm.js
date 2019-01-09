import React, {Component} from 'react';


class ShowForm extends Component{
    constructor(){
        super();
        this.state ={
            title: '',
            image: '',
            author: ''
           

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
        this.props.createNewShow(this.state)

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Title:</label> <input type="text" name="Title" onChange={this.handleChange.bind(this)}/><br/>
                    <label>Image:</label> <input type="text" name="image" onChange={this.handleChange.bind(this)}/><br/>
                    <label>Author:</label> <input type="text" name="Author" onChange={this.handleChange.bind(this)}/><br/>

                    <button>Submit</button>
                </form>
                
            </div>
        )
    }

}


export default ShowForm;