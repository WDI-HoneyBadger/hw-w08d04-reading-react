import React from 'react';

const ShowBook = (props) => {
    return (
        <div className="books" onMouseOver={() => { props.setCurrentShow(props.book) }}>
        
<div className="top">
            <button onClick={() => { props.deleteBook(props.book.id) }}>X</button>
            <h2>Title: {props.book.title}</h2>
            </div>
            
            <div className="end">
            <h2>Author: {props.book.author}</h2>
            <h2>Release Date: {props.book.release_date}</h2>
            </div>
        </div>
    )
}
export default ShowBook;
