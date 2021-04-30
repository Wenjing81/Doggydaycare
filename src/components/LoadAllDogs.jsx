import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { CardList } from './card-list/card-list.component';


//define a class LoadAllDogs in components
class LoadAllDogs extends Component{  
    constructor(props){
      super(props);
      this.state ={
        items:[],
        isLoaded :false,
      };
      
    }
//get the data from api    
    componentDidMount(){
      fetch ('https://api.jsonbin.io/b/6087d9c3f6655022c46d0b41')
      .then(res => res.json())
      .then(json =>{
            this.setState({
                 isLoaded:true,
                 items:json,
            })
      });
    }
//show the data from api, introduce a component - CardList.
    render() {

      const { isLoaded,items }=this.state;
  
      if(!isLoaded){
        return <div>Loading....</div>
      }
      else{
        return(
          <div className ="App">
     
          <CardList items= {this.state.items}> 
            
          </CardList>
            
            
            <Link to = "/DetailsInfo">
             <button onClick= "">More!</button>
            </Link>
          </div>
        );
      }
      
    }
  }


export default LoadAllDogs;