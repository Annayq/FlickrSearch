import React from 'react';
import '.././App.css'


export function ImageList({result}){
 return(
    <div className='picture'>
        {result.map((item,index)=>(
            <img src={item.media.m} key={index} alt={item.tags} className='image' />
        ))}
    </div>
 )
}