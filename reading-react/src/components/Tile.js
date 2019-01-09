import React from 'react' ;

const Tile = (props) => {
  return (
    <div className= "tile" onMouseOver={() => {props.setCurrentShow(props.show.image)}} >
      <img src={props.show.image} alt=""   /> 
      <h2>  {props.show.author} <br/> {props.show.title}  </h2>
    </div>
  )
}


export default Tile ;
