import React from 'react';

const Books = (props) => {

    return(
        <div>
        <div  onMouseOver={() => props.showImage(props.book.image)}>
        <h2>{props.book.title}</h2>
        <p>{props.book.author}</p>
        <p>{props.book.release_date}</p>
      
    </div>
        </div>

    )
}

export default Books;