import React from 'react';
import List from './List';
import Loading from './Loading';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading : false,
            persons : []
        }
    }

    componentDidMount(){
        const API_URL = "https://swapi.co/api/people"
        this.setState({
          loading : true
        })
        fetch(API_URL)
    .then(response => {
      return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
      });
    })
    .then((propertys) => {
      this.setState({
          persons : propertys.results,
          loading : false
      })
      console.log(this.state.persons)
    })
    .catch((error) => {
      console.log('Error', error);
    });
    }
render(){
  const {persons,loading} = this.state
   if(loading === false){
    return (
      <List persons={persons} />
    )
   }
   else if(loading === true){
      return (
        <Loading />
      )
   }
}
}

export default Content;