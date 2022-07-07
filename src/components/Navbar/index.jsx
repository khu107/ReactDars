import { useState,useEffect } from "react"

const HooksComp = ()=>{

    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        console.log('case 1');
    })


    return(
        <div>

            <h1>Hooks</h1>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count + 1)}>+</button>
            <button onClick={()=>setCount(count - 1)}>-</button>

        </div>
    )
}

export default HooksComp