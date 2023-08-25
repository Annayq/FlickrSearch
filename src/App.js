import React,{useEffect,useState} from 'react';
// import { SearchBar } from './components/searchBar';
import { ImageList } from './components/imageList';
import { DebounceSearch } from './components/debounceSearch';
import './App.css';

function App() {
  const [result, setResult]=useState([]);
  useEffect(()=>{
    if (result.length > 0) {
     console.log("@@result",result)
    }
  },[result])

  return (
    <div className="App">
      {/* <SearchBar setResult={setResult} /> */}
      <DebounceSearch setResult={setResult} />
      <ImageList result={result?.items || []} />
    </div>
  );
}

export default App;
