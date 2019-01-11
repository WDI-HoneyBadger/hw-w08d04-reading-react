import React from 'react';


const Books = (props) => {
    return (
        <div className="books" onMouseOver={() => {props.setCurrentBooks(props.Books)}}>
        <button onClick={() => {props.deleteBook(props.Books.id)}}>Delete</button>
            <h2> Title: {props.Books.title}</h2>
            <h2> Author: {props.Books.author}</h2>
            <h2> Release Date: {props.Books.release_date}</h2>
            
        </div>
    )
}
export default Books;