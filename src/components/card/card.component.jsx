import React from'react';
import {Link} from 'react-router-dom';
import'./card.styles.css';

export const Card = (props) =>(
    <div className ='card-container'>
        <img alt= "dogs" src = {`${props.item.img}?set=set2&size=180*180`}/>
         <h2> {props.item.name}  </h2>
         <h3>{props.item.owner.phoneNumber}</h3>
         <Link to ="/DetailsInfo">
             <button onClick= ""
             style={{width:'50%',height:'80%',backgroundColor:'beige',padding:'15px',WebkitTextEmphasisColor:'black',textfont:'bold',WebkitBorderRadius:'10px'}}
             >Details</button>
        </Link>
    </div>
)