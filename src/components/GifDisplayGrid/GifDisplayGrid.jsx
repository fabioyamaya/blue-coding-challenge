import React from "react";

export default function GifDisplayGrid({ gifsList, handleGifClick }) {
  //   console.log(gifsList);
  return (
    <div className="gif-display">
      {gifsList.map((gif, index) => (
        <img
          height={100}
          width={100}
          style={{ objectFit: "cover" }}
          key={gif.id}
          src={gif.downsized}
          onClick={() => handleGifClick(gif.original, index)}
        />
      ))}
    </div>
  );
}
