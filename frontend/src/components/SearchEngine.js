import React, { Component } from 'react';


class Search extends Component {
    constructor(props) {
        super(props);
        // N’appelez pas `this.setState()` ici !
        this.state = {
            fakeData: [],
          }
          this.getFakeData();
      }
 

async getFakeData(){
     await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>  this.setState({fakeData : json}))
  
 console.log("our data ",this.state.fakeData)
}



    render() { 
        return (
    
    <></>

          );
    }
}
 
export default Search;