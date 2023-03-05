import React from "react";
import MemeCard from "./MemeCard";

function MemeCollection({ memes }) {
  const memeItem = memes.map((meme) => {
    return (
      <MemeCard
        key={meme.id}
        meme={meme}
        // clickEvent={addBot}
        // deleteBot={deleteBot}
       
      />
    );
  });
  return (
    <div className="container mt-4">
      <div className="row">
      
        {memeItem}
      </div>
    </div>
  );
}

export default MemeCollection;