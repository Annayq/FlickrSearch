import React from "react";
import ".././App.css";

export function ImageList({ result }) {
  return (
    <div id="container" className="masonry">
      <div className="item">
        {result.map((item, index) => (
          //   <img
          //     src={item.media.m}
          //     key={Math.random(index)}
          //     alt={item.tags}
          //   />
          <img
            src={item.url}
            key={Math.random(index)}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
}
