import React from 'react';

const ShowBook = (props) => {

    return (
        <div className="books" onMouseOver={() => { props.setCurrentShow(props.book) }}>

            <div className="top">
                <button onClick={() => { props.deleteBook(props.book.id) }}>X</button>
                <h2>Title: {props.book.title}</h2>
            </div>

            <div className="end">
                <h2>Author:</h2> <h3> {props.book.author} </h3>
                <h2>Date:</h2> <h3> {props.book.release_date}</h3>
            </div>
        </div>
    )
}
export default ShowBook;
