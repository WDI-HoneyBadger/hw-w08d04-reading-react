import React from 'react';

const Books = (props) => {
    return (
        <div onMouseOver={() => props.bookImage(props.book.image)}>
            <h3>{props.book.title} </h3>
            <p>By : {props.book.author} | {props.book.release_date}</p>
        </div>

    )
}

export default Books;