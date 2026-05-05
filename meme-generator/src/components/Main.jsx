import "../UI/main.css"
import React from "react"
export default function Main() {

    const [meme, setMeme] = React.useState({
        imageUrl: "http://i.imgflip.com/1bij.jpg",
        topText : "One does not simply",
        bottomText: "Walk into Mordor"
    })
    console.log(meme)
    return (
        <main className="main">
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}