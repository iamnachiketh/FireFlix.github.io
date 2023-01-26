import React from 'react'
import "./HomeScreen.css";
import Nav from "../Nav.js";
import Banner from "../Banner";
import requests from '../Rquests';
import Row from "../Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
        <Nav/>
        <Banner/>
        <Row title="ORIGINALS"
        fetchUrl={requests.fetchOriginals}
        isLargeRow 
        />
         
         <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
         <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
         <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
         <Row  title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
         <Row  title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
         <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
         <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen
