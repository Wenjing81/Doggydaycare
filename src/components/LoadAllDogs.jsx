import React, {Component} from 'react';
import { CardList } from './card-list/card-list.component';
import{ SearchBox } from './search-box/search-box.component';

//define a class LoadAllDogs in components
class LoadAllDogs extends Component{  
    constructor(props){
      super(props);
      this.state ={
        items:[],
        isLoaded :false,
        searchField: ''
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
//show the data from api, introduce a component - CardList, card also.
    render() {

      const { isLoaded }= this.state;
      const { items,searchField } = this.state;
      const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchField.toLowerCase())
        )
      
      if(!isLoaded){
        return <div>Loading....</div>
      }
      else{
        return(
          <div className ="App">
            
            <SearchBox
            placeholder ='search dogs'
            handleChange={e=>this.setState({searchField: e.target.value})}
            />
     
            <CardList items= {filteredItems}> 
            
            </CardList>
          </div>
        );
      }
      
    }
  }


export default LoadAllDogs;