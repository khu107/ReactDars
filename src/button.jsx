import React from "react";

// class componot
class Button extends React.Component{
    render(){
        return <div className="container">{this.props.children}</div>;
    }
}

// export {Student}
// export {Students} // shunday export qilsa ham buladi.
export default Button  