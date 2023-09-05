import { React, Fragment, useEffect, useState, useRef } from "react";
import { Unsplash } from "../services/unsplash";
import { Flickr } from "../services/flickr";

const imageSearchOptions = {
  flickr: Flickr,
  unsplash: Unsplash,
};

export function DebounceSearch({ setResult }) {
  const [searchInput, setSearchInput] = useState("");
  const [source, setSource] = useState("flickr");
  const [queryParams, setQueryParams] = useState({ searchInput, source });

  const timer = useRef(undefined);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (
        searchInput !== queryParams.searchInput ||
        source !== queryParams.source
      ) {
        console.log({ searchInput, source, queryParams });
        setQueryParams({ searchInput, source });
        const searchFunction = imageSearchOptions[source];
        searchFunction(searchInput).then(setResult);
      }
    }, 1000);
  }, [searchInput, queryParams, setResult, source]);

  return (
    <Fragment>
      <div className="search">
        <input
          type="text"
          value={searchInput}
          placeholder="Search your photo"
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <select
          name="select your source"
          defaultValue="flickr"
          onChange={(event) => setSource(event.target.value)}
        >
          <option value="flickr">Flickr</option>
          <option value="unsplash">Unsplash</option>
        </select>
      </div>
    </Fragment>
  );
}
