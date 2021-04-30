import React, {Component} from 'react';
import {Link} from 'react-router-dom';




class LoadAllDogs extends Component{

        
    constructor(props){
      super(props);
      this.state ={
        items:[],
        isLoaded :false,
      }
    }
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
    render() {
  
      var { isLoaded,items }=this.state;
  
      if(!isLoaded){
        return <div>Loading....</div>
      }
      else{
        return(
          <div className ="App">
            <ul>
              
               {items.map(item =>(
                    <li key ={item.id}>
                      {item.name} |{item.breed}|{item.age}
                    </li>
  
               ))};
              
            </ul>
            <Link to = "/DetailsInfo">
             <button onClick= "">More!</button>
            </Link>
          </div>
        );
      }
      
    }
  }


export default LoadAllDogs;