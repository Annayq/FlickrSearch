import {Fragment, React, useState,useEffect} from 'react';
import fetchJsonp from "fetch-jsonp";


export function SearchBar({setResult}){
    const [input, setInput]=useState("");


    // useEffect(()=>{
    //     fetchJsonp("https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=all", {
    //        jsonpCallback: "jsoncallback"
    //     })
    //     .then(response=>{
    //         response.json().then(data=>setResult(data))
    //     })
    //     .catch(error =>{
    //         console.log("Something wrong when fetch data",error);
    //     })
    // },[input])

    const getInput=(event)=>{
        setInput(event.target.value)
    }
    
    const handleClick=()=>{
        fetchJsonp(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=all&tags=${input}` , {
            jsonpCallback: "jsoncallback"
         })
         .then(response=>{
             response.json().then(data=>setResult(data))
         })
         .catch(error =>{
             console.log("Something wrong when fetch data",error);
         })
    }

    return(
        <Fragment>
            <div className='search'>
             <input type='text' placeholder='Search your photo' value={input} onChange={getInput} />
             <button onClick={handleClick}>Go</button>
            </div>
        </Fragment>
    )
}