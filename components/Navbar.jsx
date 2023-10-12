import React from "react"

export default function Navbar() {
    return (
        <navbar>
            <img 
                src="../src/assets/troll-face.png" alt="troll-face"
                className = "navbar--image"
            />
            <h1 className = "navbar--title">Meme Generator</h1>
            <h3 className = "navbar--project">Simple Meme Generator</h3>
        </navbar>
    )
}