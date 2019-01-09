import React from 'react';


const Book = (props) => {
    return(
        <div className="book" onMouseOver={() => {props.showImage(props.book.image)}}>
            <div>
            <h2>{props.book.title}</h2>
            <p>by: {props.book.author} | {props.book.release_date}</p>
            </div>
            <div className="delete" onClick={() => {props.deleteBook(props.book.id)}}>X</div>
        </div>
    )
}

export default Book;