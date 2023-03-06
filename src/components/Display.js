import React, { useEffect, useState } from "react";
import MemeCollection from "./MemeCollection";
import NewMeme from "./NewMeme";
// import BotArmy from "./YourBotArmy";

function Display() {

  let [memes, setMemes] = useState([])

// let [name, setName] = useState("")
// let [text_top, setTextTop] = useState("");
// let [text_bottom, setTextBottom] = useState("");

//   function displayMemes(e) {
//     e.preventDefault();
//     fetch("http://localhost:9292/memes", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: name,
//         text_top: text_top,
//         text_bottom: text_bottom,
      
//       }),
//     }).then((r) => r.json())
//     .then((data) => {
//       setName(name)
//       setTextTop(text_top)
//       setTextBottom(text_bottom)
   
//     });


//   }

  useEffect(() => {

    fetch("https://meme-generator-backend.onrender.com/memes", )
      .then((resp) => resp.json())
      .then((data) => {
        setMemes(data)
      })

  }, [])

  

//   let addBot= (bot)=>{
//     setBot(bots.map((b)=>(b.id === bot.id ? {...b, army:true} : b)))
// }
// let removeBot =(bot)=>{
//     setBot(bots.map((b)=>(b.id === bot.id ? {...b, army:false} : b)))
// }

// let deleteBot = (bot)=>{
//     let botRemoved =  bots.filter((b)=> b.id !==bot.id);
//     setBot((bot)=>botRemoved)
// }
  return (
    <div>

<NewMeme/>
 <MemeCollection 
            memes= {memes}
            // addBot={addBot}
            // deleteBot={deleteBot}
 />




 </div>
  )
}

export default Display;