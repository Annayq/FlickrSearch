import React, { useEffect, useState } from "react";
// import { SearchBar } from './components/searchBar';
import { ImageList } from "./components/imageList";
import { DebounceSearch } from "./components/debounceSearch";
import { imageSearch } from "./services/";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const [sourceName, setSourceName] = useState("flickr");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (result.length > 0) {
      console.log("@@result", result);
    }
  }, [result]);


  return (
    <div className="App">
      {/* <SearchBar setResult={setResult} /> */}
      <DebounceSearch setResult={setResult} source={imageSearch[sourceName]} setLoading={setLoading} />
      <div>
        <select
          name="select your source"
          defaultValue="flickr"
          onChange={(event) => {
            setLoading(true);
            setSourceName(event.target.value);
          }}
        >
          <option value="flickr">Flickr</option>
          <option value="unsplash">Unsplash</option>
        </select>
      </div>
      <ImageList result={result || []} loading={loading} />
    </div>
  );
}

export default App;
