import {useState} from "react"

const HooksComp = ()=>{
    const data = useState(0)
    console.log(data);
    return(
        <div>
            <h1>Hooks Compononts</h1>
        </div>
    )
}

export default HooksComp