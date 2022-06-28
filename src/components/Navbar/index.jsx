import React from "react";


class ClassComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }
    render(){
        return(
            <div>
                <h1>Class Compononts</h1>
            </div>
        )
    }
}


export default ClassComp