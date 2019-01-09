import React from 'react';

const Tile = (props) => {
    return (
        <div className="" onClick={() =>{props.setCurrentBook(props.book)}}>
           
            <h2>{props.book.title}</h2>
            {/* <h3>{props.book.date}</h3> */}
            <h3>{props.book.auther}</h3>

            <img src="{props.book.image}" alt=""/>
            
        </div>
    )
}

export default Tile;