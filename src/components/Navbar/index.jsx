import { useState } from "react"

const HooksComp = ()=>{
    const [count,setCount] = useState(0); // useState ardoim array qaytaradi
    console.log(count);
    return(
        <div>
            <h1>Hooks Componont</h1>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count + 1)}>+</button>
            <button onClick={()=>setCount(count - 1)}>-</button>
        </div>
    )
}

export default HooksComp