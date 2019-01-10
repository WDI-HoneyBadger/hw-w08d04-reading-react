import React,{Component} from 'react';

class BookForm extends Component{
    constructor(){
        this.state={
          title:'' ,
          author:'',
          release_date:'',
          image:'',
          instance_id:'',
          created_a:'',
          updated_at:''
        }
    }
    handleChange(event){
        const currInput = event.target.name;
        const newValue= event.target.value;
        console.log('currint input:',currInput);
        console.log('newValue:',newValue);

        this.setState({
            [currInput]:newValue
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.createNewBook(this.state)
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit.bind(this)}>

          <label>title:</label><input type="text" name="title" onChange={this.handleChange.bind(this)}/><br/>
          <label>author:</label><input type="text" name="auther" onChange={this.handleChange.bind(this)}/><br/>
          <label>release_date:</label><input type="number" name="release_date" onChange={this.handleChange.bind(this)}/><br/>
          <label>instance_id:</label><input type="number" name="instance_id" onChange={this.handleChange.bind(this)}/><br/>
          <label>created_at:</label><input type="number" name="created_at" onChange={this.handleChange.bind(this)}/><br/>
          <label> updated_at:</label><input type="number" name="updated_at" onChange={this.handleChange.bind(this)}/><br/>
          <button>submit</button>
        </form>
        </div>
        )
    }
}
export default BookForm;