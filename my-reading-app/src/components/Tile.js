import React from 'react';

const Tile = (props) => {
  return(
   <section>
     <h2> {props.book.title} </h2>
      <h2>{props.book.author}</h2>
      
      <aside className="tile" onMouseOver={() => props.setCurrentBook(props.book.image)}>
      <h2> Name of the book: {props.book.title} </h2>
      <h4> By: {props.book.author}</h4> 
      </aside>
   </section> 
   
  )
}

export default Tile;