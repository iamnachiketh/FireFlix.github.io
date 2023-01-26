import React ,{ useEffect,useState } from 'react';
import "./Banner.css";
import axios from './axios';
import requests from './Rquests';

function Banner() {

    const [movie,setMovie]=useState([]);

     useEffect(()=>  {
         async function fetchData(){
             const request= await axios.get(requests.fetchOriginals)
             setMovie(
                 request.data.results[
                     Math.floor(Math.random() * request.data.results.length-1)
                 ]
             );
             return request
         }
         fetchData();
     },[]);

       // console.log(movie);

    function truncate(string,n){
      var st = string.length;
      if(st>n){
        var x=string.substr(0,n-1)+'...';
        return x;
      } else {
        return string;
      }
    }
  return (
    <header className="Banner" 
     style={{

        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition:"center center",
        
        
    }}>
      <div className="Banner__contents">
        <h1 className='Banner__title'>
          {movie.name || movie.title || movie.original_name}
        </h1>
        <div className="Banner__buttons">
            <button className='Banner__button'>Play</button>
            <button className='Banner__button'>MyList</button>
        </div>
        <h2 className="Banner__discription">
            {truncate(`${movie.overview}`,120)}        
            </h2>
      </div>
      <div className='Banner--fadebottom'/>
    </header>
  )
}
export default Banner
