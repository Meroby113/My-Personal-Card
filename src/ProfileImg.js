import React from "react";
import ReactDOM from 'react-dom/client';
import profile from './image/api.png';
import './ProfileImg.css';

export default function ProfileImg() {
    return (
        <React.Fragment>
            <img className="profile-img" src={profile} alt="curly hair computer girl" />
            <h1 className="myName">MERVE ÇOBAN</h1>
            <h2>Software developer</h2>
            <div class="button-container">
               <a href="https://github.com/Meroby113">
               <button  className="btn" >Github</button>
               </a> 
               <a href="https://www.linkedin.com/in/merve-%C3%A7oban-3b0561228/">
               <button  className="btn" >Linkedln</button>
               </a> 
            </div>
        </React.Fragment>
        
    )
}
