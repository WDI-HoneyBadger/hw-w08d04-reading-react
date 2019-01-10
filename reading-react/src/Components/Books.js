import React,{Component} from 'react';

const book =(props)=>{
    return(
        <div>
        <div onMouseOver={()=>{props.setCurrentBook(props.book)}}
        className="books">
        <h3>{props.book.title}</h3>
        <button onClick={()=>{props.deleteBook(props.book.id)}}>delete</button>
        
</div>
        </div>
    )
}

export default Books;