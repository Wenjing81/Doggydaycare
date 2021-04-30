import React from'react';
import'./card.styles.css';

export const Card = (props) =>(
    <div className ='card-container'>
        <img alt= "dogs" src = {`${props.item.img}?set=set2&size=180*180`}/>
         <h2> {props.item.name}  </h2>
         <p>{props.item.phoneNumber}</p>
    </div>

)