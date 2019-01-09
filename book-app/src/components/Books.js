import React from 'react';

const Books = (props) => {

    return(
      <div className="book" onMouseOver={()=> props.setCurrentShow(props.book)}>
       <p>{props.book.title}</p>
        <p>{props.book.author}</p>
        <p>{props.book.release_date}</p>
        <button onClick={()=> props.deleteBook(props.book)}> delete </button>
      </div>
    )
  }
export default Books;