import React from 'react';
import './styles/list.css';
import {Link} from 'react-router-dom';
import Animation from './Animation';

class List extends React.Component{
    render(){
    const persons = this.props.persons
    return (
    <section className="main">
        <div className="infoCard">
           {
            persons.map( (p) => { 
            console.log(p) 
            return (
                <div key={p.url}>
                 <Link to="/Detail" style={{textDecoration : "none"}}>
                 <h1 className="char-name">{p.name}</h1>
                 </Link>
                </div>
            )
              } )
           }
        </div>
        <Animation />
    </section>
    )
}
}

export default List;