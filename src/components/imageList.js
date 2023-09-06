import React from "react";
import ".././App.css";

export function ImageList({ result, loading }) {
  console.log("ImageList rerendering");
    return (
      <div id="container" className="masonry">
        <div className="item">
          {loading
            ? null
            : result.map((item, index) => (
                <img src={item.url} key={Math.random(index)} alt={item.alt} />
              ))}
        </div>
      </div>
    );
}
