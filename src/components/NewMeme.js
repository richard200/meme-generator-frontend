import React, { useState } from "react";

function NewMeme() {
//   const [body, setBody] = useState("");

let [name, setName] = useState("")
  let [text_top, setTextTop] = useState("");
  let [text_bottom, setTextBottom] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://meme-generator-backend.onrender.com/memes/create", {
      method: "POST",
      crossorigin: true,
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        text_top: text_top,
        text_bottom: text_bottom,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
       setName(name)
       setTextTop(text_top)
       setTextBottom(text_bottom)
      });
  }

  return (

    <div className="form">

   
    <form className="new-message" onSubmit={handleSubmit}>

Name: <input value={name} 
        onChange={(e) => setName(e.target.value)} 
        type="text"
         name="name"
          placeholder="Name" required />

First Part: <input value={text_top} 
        onChange={(e) => setTextTop(e.target.value)} 
        type="text"
         name="text_top"
          placeholder="First part of meme" required />

Second Part: <input value={text_bottom} 
        onChange={(e) => setTextBottom(e.target.value)} 
        type="text"
         name="text_bottom"
          placeholder="Second part of meme" required />
      {/* <input
        type="text"
        name="body"
        autoComplete="off"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      /> */}
      <button onClick={handleSubmit}type="submit">Create New Meme</button>
    </form>
    </div>
  );
}

export default NewMeme;