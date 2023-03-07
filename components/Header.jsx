import React from "react"
import info from '../src/cardinfo'

function Header(){
    const size = info.length;
    return(
        <div className="Header">

            <img className="Title" src="src/assets/Welcome to the Dad Jokes.png"></img>
            <h1>FlashCards</h1>
            <p>There are {size} cards total</p>
        </div>
    )

}

export default Header 