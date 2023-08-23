import React from 'react';


export function ImageList({result}){
 return(
    <div>
        {result.map((item,index)=>(
            <img src={item.media.m} key={index}/>
        ))}
    </div>
 )
}