import React, { useState } from "react";
import {Link} from 'react-router-dom'

function MemeCard({ meme}) {
    let [id, Setid] = useState("")
  //   let [name, setName] = useState("")
  //     let [text_top, setTextTop] = useState("");
  // let [text_bottom, setTextBottom] = useState("");


    function handleDeleteClick(e) {
        e.preventDefault();
        fetch(`https://meme-generator-backend.onrender.com/memes/destroy/${meme.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
          
          }),
        }).then((r) => r.json())
        .then((data) => {
         Setid(id)
       
        });
    
    
      }

      // function handleUpdateMeme(e) {
      //       e.preventDefault();
        
      //       fetch(`https://meme-generator-backend.onrender.com/memes/update/${meme.id}`, {
      //         method: "PATCH",
      //         headers: {
      //           "Content-Type": "application/json",
      //         },
      //         body: JSON.stringify({
      //           name: name,
      //           text_top: text_top,
      //           text_bottom: text_bottom
      //         }),
      //       })
      //       .then((r) => r.json())
      //       .then((data) => {
      //         Setid(id)
      //         setName(name)
      //        setTextTop(text_top)
      //        setTextBottom(text_bottom)
      //       });
      //   }

  return (

 <div className="card col-6 mt-5 h-100 shadow p-3 mb-5 mb-sm-5 bg-body rounded"
 key={meme.id}>
    <div className="card-body" >
   
     {/* <h6 className="date">Name: {meme.name} </h6> */}
        
     <p className="top_text">Top Text: {meme.text_top}</p>
       
     <p className="bottom_text">Bottom Text: {meme.text_bottom}</p>
     <br>
     </br>
     <br></br>

     <h5 className="fullmeme">Full Meme: {meme.text_top},  {meme.text_bottom}</h5>

     <button className="btn btn-danger" onClick={handleDeleteClick}>
            <span role="img" aria-label="delete">
            Delete Meme:  🗑
            </span>
          </button>

          {/* <span className="sign-up-button">
                                            <Link to="/update" className="showing-sign">
                                                <span className="signing-now">Update Meme</span>

                                            </Link>

                                        </span> */}

  </div>
  </div>
   );
  }

  export default MemeCard;
