import "../UI/main.css"
import React from "react"
export default function Main() {

    const [meme, setMeme] = React.useState({
        imageUrl: "http://i.imgflip.com/1bij.jpg",
        topText : "One does not simply",
        bottomText: "Walk into Mordor"
    })
    
    const [memeData, setMemeData] = React.useState([])
    
    const [count, setCount] = React.useState(0)
    
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeData(data.data.memes))
    },[])

    function displayMeme(){
        if (memeData.length === 0) return   // safety check
        const random = Math.floor(Math.random() * memeData.length)
        const memeUrl = memeData[random].url
        setMeme(prev => ({
            ...prev,
            imageUrl: memeUrl
        }))
    }

    function handleChange(event){
        const {value, name} = event.currentTarget
        
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))

    }
    return (
        <main className="main">
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />  
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={displayMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} alt="Meme"/>
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}