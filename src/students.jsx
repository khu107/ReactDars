import { logDOM } from "@testing-library/react";
import React from "react";
import {students} from './mock'
class Student extends React.Component{
    
  state = {
    isLooged: false,
    login: '',
    password: '',
  }

    render(){
    const onSubmit = () => {
      if(this.state.login === "a" && this.state.password === '1'){
        this.setState({isLooged: true})
        
      }else{
        alert("parol no tugri")
      }
    }  
    
    if(this.state.isLooged){
      return(
        <div>
          <h1>Main Page</h1>
          <button onClick={() => this.setState({isLooged: false})}>Log Out</button>
        </div>
      )
    }
      return (
        <div >
          <h1>Login Page</h1>
          <input onChange={({target:{value}})=> this.setState({login:value})} type="text" value={this.state.login} />
          <input onChange={({target:{value}})=> this.setState({password:value})} type="password" value={this.state.password} />
          <button onClick={onSubmit}>Login</button>


        </div>
      );
    }
}

// export {Student}
// export {Students} // shunday export qilsa ham buladi.
export default Student 

// CRUD
// Create -add
// Read -filter -sort
// Update, Qiymatni uzgartirish
// Delete - Delete

//  filter, map, forEach,