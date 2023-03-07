import React from "react";
import { useState } from "react";
import './Card.css'




function Card(props) {
    const [count, setCount] = useState(0)

    if(count){
    return(
        <div className="Card">
            <button onClick={()=>setCount(count - 1)}>
                <h1>{props.answer}</h1>
                <p>(back card)</p>
        </button>
        </div>
        )
    }else{
    return(
        <div className="Card">
        <button onClick={ ()=>setCount(count + 1) }>
            <h1>{props.question}</h1>
            <p>(front card)</p> 
        </button>    
        </div>
        )
    }
}

export default Card