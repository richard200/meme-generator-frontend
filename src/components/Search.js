import React from "react";

function Search({handleSearch}) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for your memes..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;