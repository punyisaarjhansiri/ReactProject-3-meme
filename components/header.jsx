import React from "react";
import image from "../src/assets/troll-face.png"

export default function Header() {
    return(
        <nav>
            <img src = {image} className="nav--logo"/>
            <h1 className="nav--logo--title">Meme Generator</h1>
            <h3 className="nav--title">React Course - Project 3</h3>
        </nav>
    )

}
