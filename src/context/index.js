import React, { createContext, useState } from "react"


export const StudentContext = createContext();

export const Context = ({children})=> {
    const [data,setData] = useState([
        {id:1, name: "Students  1"},
        {id:2, name: "Students  2"},
        {id:3, name: "Students  3"},
        {id:4, name: "Students  4"},
        {id:5, name: "Students  5"},
      ])
  return( <StudentContext.Provider value={[data,setData]}>
    {children}
  </StudentContext.Provider>
  )
}
export default Context;
