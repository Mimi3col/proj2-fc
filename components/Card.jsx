import React from "react";
import { useState } from "react";
import './Card.css'




function Card(props) {
    return(
        <div className="Card">
            <h1>{props.qna}</h1> 
        </div>
    )
}

export default Card