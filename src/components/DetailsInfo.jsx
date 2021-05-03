import React ,{ Component } from 'react';

 
class DetailsInfo extends Component{ 
    componentDidMount(){
        let item = this.props.match.params.item;
        console.log("item is ", item)
    }


   
}


export default DetailsInfo;