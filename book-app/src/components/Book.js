import React from 'react';

const Book = (props) => {
  return(
    <div className="bookInfos">
      <div onMouseOver={() => props.setImage(props.book.image)}>
        <h4>{props.book.title}</h4>
        <p>{props.book.author}</p>
        <p>{props.book.release_date}</p>
      </div>
    </div>
  )
}

export default Book;