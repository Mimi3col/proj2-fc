import React from "react"
import info from '../src/cardinfo'

function Header(){
    const size = info.length;
    return(
        <div className="Header">
            <h1>My FlashCards</h1>
            <p>These are my flash cards for learning jsx</p>
            <p>There are {size} cards total</p>
        </div>
    )

}

export default Header 