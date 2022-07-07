import React, {useContext}from 'react'
import { StudentContext } from '../../context'

export default function Student() {

  const [data,setData] = useContext(StudentContext);
  return (
    <div>
        <h1>Student : {data.length} found</h1>
        {
          data.map((v)=>{
            return <h1>{v.name} <button onClick={()=>{
              let res = data.filter(vl=>v.id !== vl.id);
              setData(res)
            }}>delete</button></h1>
          })
        }
    </div>
  )
}

