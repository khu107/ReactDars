import React from "react";

class ClassComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 2,
            data: []
        }
    }
    render(){
        const {count} = this.state
        return(
            <div>
                <h1>ClassComponont</h1>
                <h1>Count : {count}</h1>
                <button onClick={()=>this.setState( {count: count +1})}>+</button>
                <button onClick={()=>this.setState( {count: count -1})}>-</button>
            </div>
        )
    }
}

export default ClassComp