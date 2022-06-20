import { logDOM } from "@testing-library/react";
import React from "react";
// import Button from "./button";
// class componot
class Student extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            students: [],
            username: '',
            email: '',
            password: '',
        }
    } 
    render(){
        const onSubmit = () =>{
          console.log(this.state);
        };

        // const changeSurname = ({target})=>{
        //     this.setState({username: target.value})
        // }
        // const changeName =({target})=>{
        //     this.setState({email: target.value})
        // }

        // const changePassword = ({target})=>{
        //     this.setState({passwrod: target.value})
        // }

        const onChange = ({target})=>{
            this.setState({[target.name] : target.value})
        }
      return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
           <h1>Name: {this.state.username}</h1>
           <h1>email: {this.state.email}</h1>
           <h1>passwrod: {this.state.password}</h1>
           
           <input name="username" value={this.state.username} onChange={onChange} type="username"  placeholder="username" />
           <input name="email" value={this.state.email} onChange={onChange} type="email"  placeholder="email" />
           <input name="password" value={this.state.passwrod} onChange={onChange} type="password"  placeholder="password" />
           <button onClick={onSubmit}>Submit</button>
        </div>
      );
    }
}

// export {Student}
// export {Students} // shunday export qilsa ham buladi.
export default Student 