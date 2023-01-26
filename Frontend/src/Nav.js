import React from 'react'
import "./Nav.css";
import { useEffect, useState } from "react";
import {useNavigate ,Link} from 'react-router-dom';

function Nav() {
    const [show,handleShow]=useState(false);
    const navigate=useNavigate();
    const transitionNavBar=() =>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }
    useEffect(() =>{
        window.addEventListener("scroll",transitionNavBar);
        return()=>window.removeEventListener("scroll",transitionNavBar);
    },[]);


  return (
    <div className={`Nav ${show && "Nav_black"}`}>
        <div className="nav__contents">
        <Link to='/'>
            {/* <span className="fire">🔥</span>
            <span className="nav__logo">net</span> */}
            <img className="nav__logo"  src="https://i.imgur.com/vGdP70t.png" alt=""
            onClick={()=>navigate("/")}
            />
        </Link>
        <img  className="nav__avatar" src="https://i.imgur.com/TvdSKFV.png" 
        onClick={navigate('/profile')}
        alt=""/>
        </div>
        
    </div>
  )
}


export default Nav
