import axios from './axios';
import React, { useEffect,useState } from 'react'
import "./Row.css";
import  './screens/HomeScreen.js';

function Row({title,fetchUrl,isLargeRow=false}) {

    const[movie,setMovie]=useState([]);

    const base_url="https://image.tmdb.org/t/p/original/";

    useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovie(request.data.results);
        //console.log(request.data.results);
      return request;
    }
    fetchData()

},[fetchUrl]); 
     console.log(movie);
return (
    <div className="Row">
      <h2 className='title__font'>{title}</h2>
         <div className="Row__posters">
         {movie.map(movie => (
              <img className={`Row__poster ${isLargeRow && 'Row__posterlarge'}`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
             />
      ))}
      

        </div>
      
     
    </div>
  )
}

export default Row
