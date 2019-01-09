import React from 'react';

const Book = (props) => {
    return (
        <div className="book"
        onMouseOver={() => props.getCurrentImage(props.book.image)}>
            <h3>{props.book.title}</h3>
            <span className="info">By: {props.book.author}</span> | 
            <span className="info">{props.book.release_date}</span>
        </div>
    )
}

export default Book;