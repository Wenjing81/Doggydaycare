import React from 'react';
import { Card } from '../card/card.component';
import'./card-list.styles.css';


export const CardList = props => {
    return(
    <div className='card-list'>
       {props.items.map(item =>(
        <Card key ={item.chipNumber} item ={item}/>
    ))}
    </div>
    );
}; 