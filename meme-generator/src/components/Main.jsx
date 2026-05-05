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

    const memeTexts = [
        {
            top: "Fixing one bug",
            bottom: "10 new bugs unlocked"
        },
        {
            top: "Me at 2am",
            bottom: "Overthinking everything"
        },
        {
            top: "I will start today",
            bottom: "Tomorrow for sure"
        },

        // 🔥 NEW ONES

        {
            top: "Opening laptop to study",
            bottom: "Ends up watching YouTube"
        },
        {
            top: "Just one more episode",
            bottom: "Sun: Good morning"
        },
        {
            top: "Me saving money",
            bottom: "Also me ordering food"
        },
        {
            top: "When code works",
            bottom: "Don't touch anything"
        },
        {
            top: "Debugging for hours",
            bottom: "Missed a semicolon"
        },
        {
            top: "Me: I'll sleep early",
            bottom: "Brain: let's remember everything"
        },
        {
            top: "Trying to be productive",
            bottom: "Phone: hello there"
        },
        {
            top: "Me after watching one tutorial",
            bottom: "I am now an expert"
        },
        {
            top: "Internet slow for 2 seconds",
            bottom: "Me: something is wrong"
        },
        {
            top: "Studying for 10 minutes",
            bottom: "Time for a 2 hour break"
        },
        {
            top: "Gym from tomorrow",
            bottom: "Tomorrow never comes"
        },
        {
            top: "Eating healthy today",
            bottom: "Also me: orders pizza"
        },
        {
            top: "Confidence level",
            bottom: "Google before exam"
        },
        {
            top: "My plans",
            bottom: "Reality"
        },
        {
            top: "When salary comes",
            bottom: "Bills: hello"
        },
        {
            top: "Trying to save battery",
            bottom: "Brightness at 100%"
        },
        {
            top: "Me reading code I wrote",
            bottom: "Who wrote this?"
        }
    ]
    function displayMeme(){
        if (memeData.length === 0) return   // safety check
        
        const random = Math.floor(Math.random() * memeData.length)
        
        const randomText = memeTexts[Math.floor(Math.random() * memeTexts.length)]
        
        setMeme(prev => ({
            ...prev,
            imageUrl: memeData[random].url,
            topText: randomText.top,
            bottomText: randomText.bottom
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