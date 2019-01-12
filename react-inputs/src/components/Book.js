import React from 'react';

const Book = (props) =>{
    return (
        <div className='displayBook' onMouseOver={() => {props.setCurrentBook(props.book)}}>
        <h2>Title: {props.book.title}</h2>
        <h2>Author: {props.book.author}</h2>
        <h2>Relese Date: {props.book.release_date}</h2>
        </div>
    )
}

export default Book;