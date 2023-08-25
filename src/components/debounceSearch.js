import { React, Fragment, useEffect, useState, useRef} from "react";
import fetchJsonp from "fetch-jsonp";

const callFlicker = async (tagsQuery) => {
  try {
    const resp = await fetchJsonp(
      `https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=all&tags=${tagsQuery}`,
      {
        jsonpCallback: "jsoncallback",
      }
    );
    return await resp.json();
  } catch (ex) {
    console.log("Something wrong when fetch data", ex);
  }
};

export function DebounceSearch({ setResult }) {
  const [input, setInput] = useState("");
  const [queryText, setQueryText] = useState(input);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  //setResult=useEffect(callFlicker(input),[input])
  const timer = useRef(undefined);
  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
        if (input !== queryText) {
            console.log({ input, queryText });
            setQueryText(input);
            callFlicker(input).then(setResult);
        }
    }, 1000)
  }, [input, queryText, setResult]);

  return (
    <Fragment>
      <div className='search'>
        <input
          type="text"
          value={input}
          placeholder="Search your photo"
          onChange={onInputChange}
        />
      </div>
    </Fragment>
  );
}
