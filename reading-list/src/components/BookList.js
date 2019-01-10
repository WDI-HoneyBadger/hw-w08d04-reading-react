import React from 'react';

const BookList = (props) => {
    return (
        <div onMouseOver={() => {props.setCurrentBook(props.book)}}>
            <h2>{props.book.title}</h2>
            <p>By: {props.book.author} | {props.book.release_date}</p>
        </div>
    )
}

export default BookList;