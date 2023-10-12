import React from "react"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <section>
            <div className="form">
                <input 
                    type="text"
                    className = "meme--input"
                    placeholder = "Top text"
                    name = "topText"
                    value = {meme.topText}
                    onChange = {handleChange}
                />

                <input 
                    type="text"
                    className = "meme--input"
                    placeholder = "Bottom text"
                    name = "bottomText"
                    value = {meme.bottomText}
                    onChange = {handleChange}
                />

                <button
                    className = "meme--button"
                    onClick = {getMemeImage}
                >
                    Get a new meme image 🖼️
                </button>


            </div>
            <div className="meme--container">
                <img className = "meme--image" src= {meme.randomImage}  />
                <h2 className = "meme--text top">{meme.topText}</h2>
                <h2 className = "meme--text bottom">{meme.bottomText}</h2>
            </div>
        </section>
    )
}