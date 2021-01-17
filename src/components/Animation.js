import React from 'react';


class Animation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current : "animation0",
           a : 100,
        }
        this.moveAnim = this.moveAnim.bind(this);
        this.swordChange = this.swordChange.bind(this);
    }
    moveAnim(){
        if(this.state.a === 100){
        this.setState({
            a : 200,
            current : "animation1",
        })
    }
      if(this.state.a === 200){
          this.setState({
            a : 100,
            current : "animation0",
          })
      }
        
    }

    swordChange(){
        if(this.state.current === "animation1"){
            this.setState({
                current : "animation2",
              })
        }
        if(this.state.current === "animation2"){
            this.setState({
                current : "animation1",
              })
        }
    }

    render(){
        const {current} = this.state
           if(current === "animation0"){
            return (
                <section  className="main2">
                    <h1>Pic a Sword</h1>
                    <div className={current} onClick={this.moveAnim}></div>  
                </section>
             )
           }
           if(current === "animation1"){
            return (
                <section className="main2">
                    <h1>Welcome Jedi ! ! !</h1>
                    <div className={current} onClick={this.moveAnim}></div> 
                    <button onClick={this.swordChange} id="dark">Im In a Dark Side</button>
                </section>
             )
           }
           if(current === "animation2"){
            return (
                <section className="main2">
                    <h1>You from a Death Star ... ?</h1>
                    <div className={current} onClick={this.moveAnim}></div> 
                    <button onClick={this.swordChange} id="good">NO !,Im In a Good Side</button>
                </section>
             )
           }
       
        
    }
}

export default Animation;