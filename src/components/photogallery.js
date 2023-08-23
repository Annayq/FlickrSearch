import React,{useEffect,useState} from 'react';

function PhotoGallery() {
  const [result, setResult]=useState([]);


  useEffect(()=>{
      fetch("https://api.unsplash.com/photos/?client_id=ktov1rXm7r_SrX61cBu-Hu7nyP6iRi6oDFq1xivM7QI")
      .then(response=>{
        return response.json()
      })
      .then(data=>{
          setResult(data)
      })
      .catch(error =>{
          console.log("Something wrong when fetch data",error);
      });
  },[1]);

  return (
    <div className="App">
      {result.map((photo)=>(
        <img
         key={photo.id}
         src={photo.urls.regular}
         className='photo'
        />
      ))}
    </div>
  );
}

export default PhotoGallery;
