import React from "react";
import Button from "./button";
// class componot
class Student extends React.Component{
    render(){
        return(
            <div>Hello {this.props?.name}
            <Button>login</Button>
            <Button>register</Button>
            </div>
            
        ) 
    }
}

// export {Student}
// export {Students} // shunday export qilsa ham buladi.
export default Student 