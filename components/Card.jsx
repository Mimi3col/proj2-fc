import React from "react";
import { useState } from "react";
import './Card.css'




function Card(props) {
    const [count, setCount] = useState(0)

    if(count){
    return(
        <div>
            <button onClick={()=>setCount(count - 1)}>
                <h1>{props.answer}</h1>
        </button>
        </div>
        )
    }else{
    return(
        <div className="Card">
        <button onClick={ ()=>setCount(count + 1) }>
            <h1>{props.question}</h1> 
        </button>    
        </div>
    )
    }
}

export default Card