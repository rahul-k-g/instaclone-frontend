import React from "react";
import image from "../images/image_landing.jpg"
import "../Styles/App.css";
import { Link } from "react-router-dom";
const LandingPage = ()=>{

    return(
        
     <>
           
      <div  className="parent">
              <div  className="childone">
               <img  className="container" src={image} alt="landing"/>
              </div>
             <div  className="childtwo">
            <h1 >WELCOME TO INSTACLONE</h1>
                
            
            <span id="btn">
                <Link to="/abc"> <button >Lets Go </button> </Link>
         
            </span>
           </div>
      </div>
        <footer className="footer">Rahul K G</footer>
 </>)
}
export default LandingPage;
