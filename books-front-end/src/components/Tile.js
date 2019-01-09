import React from 'react';

const Tile = (props)=>{
    return(
        
        <div className="tile" onClick = {()=>{props.setCurrentBook(props.book)} }>
            <h2>{props.book.title}</h2>
            <h3>{props.book.author}</h3>
            <img src={props.book.image} alt=''></img>

        </div>
    )
}

export default Tile ;