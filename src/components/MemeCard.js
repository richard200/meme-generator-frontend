import React, { useState } from "react";


function MemeCard({ meme}) {
    let [id, Setid] = useState("")
//       let [text_top, setTextTop] = useState("");
//   let [text_bottom, setTextBottom] = useState("");


    function handleDeleteClick(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/memes/destroy/${meme.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id
          
          }),
        }).then((r) => r.json())
        .then((data) => {
         Setid(id)
       
        });
    
    
      }

    //   function handleUpdateMeme(e) {
    //         e.preventDefault();
        
    //         fetch(`http://localhost:9292/memes/update/${meme.id}`, {
    //           method: "PATCH",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //           body: JSON.stringify({
    //             text_top: text_top,
    //             text_bottom: text_bottom
    //           }),
    //         })
    //         .then((r) => r.json())
    //         .then((data) => {
    //          setTextTop(text_top)
    //          setTextBottom(text_bottom)
    //         });
    //     }

  return (

 <div className="card col-6 mt-5 h-100 shadow p-3 mb-5 bg-body rounded"
 key={meme.id}>
    <div className="card-body" >
   
     {/* <h6 className="date">Name: {meme.name} </h6> */}
        
     <p className="top_text">Top Text: {meme.text_top}</p>
       
     <p className="category">Bottom Text: {meme.text_bottom}</p>
     <br>
     </br>
     <br></br>

     <h5 className="category">Full Meme: {meme.text_top},  {meme.text_bottom}</h5>

     <button onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
            Delete Meme:  🗑
            </span>
          </button>

          {/* <button onClick={handleUpdateMeme}>
            <span role="img" aria-label="delete">
             Update
            </span>
          </button> */}

  </div>
  </div>
   );
  }

  export default MemeCard;
