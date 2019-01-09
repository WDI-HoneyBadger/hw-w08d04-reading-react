import React from 'react';

const BookItem = (props) =>{
    return(
        <div onMouseOver={() => props.updateImage(props.book.image)}>
            <h1>{props.book.title}</h1>
            <p>By: {props.book.author} | {props.book.release_date}</p>
            <button onClick={() => props.deleteBook(props.book.id)}>X</button>
        </div>
    )
}

export default BookItem;