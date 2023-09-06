import { Unsplash } from "./unsplash";
import { Flickr } from "./flickr";

const imageSearch = {
  flickr: {
    searchFunction: Flickr,
    sourceName: "flickr",
  },
  unsplash: {
    searchFunction: Unsplash,
    sourceName: "unsplash",
  },
};

export { imageSearch };

