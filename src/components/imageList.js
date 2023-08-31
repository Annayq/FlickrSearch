import React from "react";
import ".././App.css";

export function ImageList({ result }) {
  return (
    <div id="container" className="masonry">
      <div className="item">
        {result.map((item, index) => (
          <img
            src={item.media.m}
            key={index}
            alt={item.tags}
          />
        ))}
      </div>
    </div>
  );
}
