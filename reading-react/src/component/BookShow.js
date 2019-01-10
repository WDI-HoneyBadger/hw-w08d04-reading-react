import React from 'react';

const book = (props) => {
    return (
        <div className="book" onMouseOver={() => { props.showCurrentBook(props.book) }}>

            <button onClick={() => { props.deleteBook(props.book.id) }}> <h2>X</h2> </button>

            <h1>Book Title: {props.book.title}</h1>
            <h1>Book Author: {props.book.author}</h1>
            <h1>Release Date: {props.book.release_date}</h1>


        </div>
    )
}
export default book;