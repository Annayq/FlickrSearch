import { React, Fragment, useEffect, useState, useRef } from "react";

export function DebounceSearch({ setResult, setLoading, source }) {
  const [searchInput, setSearchInput] = useState("");
  const [queryParams, setQueryParams] = useState({ searchInput, sourceName: source.sourceName });

  const timer = useRef(undefined);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (
        searchInput !== queryParams.searchInput ||
        source.sourceName !== queryParams.sourceName
      ) {
        setLoading(true)
        console.log("searching", { searchInput, source, queryParams });
        setQueryParams({ searchInput, sourceName: source.sourceName });
        source.searchFunction(searchInput).then(setResult).then(()=>setLoading(false));
      }
    }, 1000);
  }, [searchInput, queryParams, setResult, source,setLoading]);

  return (
    <Fragment>
      <div className="search">
        <input
          type="text"
          value={searchInput}
          placeholder="Search your photo"
          onChange={(event) => setSearchInput(event.target.value)}
        />
      </div>
    </Fragment>
  );
}
