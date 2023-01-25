 import { useEffect, useState, } from "react";
 import React from "react";
 import Loader from "./Loader";
 import "../Styles/App.css";
 import icon from "../images/icon.png";
 import camera from "../images/camera.png";
import threeDot from "../images/three_dot_vector.jpg"
import heart from "../images/heart_vector.png";
import share from "../images/telegram_vector.png";
import { Link } from "react-router-dom";



const  Card = ()=>{

    const [userData, setUserData] = useState([]);
    const [isLoader,setLoder] = useState(true);

useEffect(()=>{
     fetch("https://instaclone-backend-2023.onrender.com/users").then((res)=>{

        return res.json()
        }).then((data)=>{
      data=data.reverse()
            setUserData(data);
            
        }).catch((err)=>{
            console.log("error found=========================>");
        }).finally(()=>{
            setLoder(false);
        })
    
},[])


return (
    <div>


    <div className='header'>
        <div className="tag">
         <img src={icon} alt="icon" id="icon"/>
         <span className="tag-text">Instaclone</span>
         </div>
         <Link to="/upload"> <button id="camera-icon" ><img src={camera} alt="camera" id="camera"/></button> </Link>
    </div>


        {isLoader? <Loader/>:userData.map((item,i)=>{
        return(
    <div className="card" key={i}>
        <div className="card-header">
           <span>
                   <h2 id="name-heading">{item.name}</h2>
                   <p id="location">{item.location}</p>
           </span>
           <span>
            <img className="card-icon" src={threeDot} alt="icon"></img>
           </span>
        </div>
        <img id="card-image"  src={item.PostImage} alt="eye"/>

        <div>
            <span>
                <img  className="like-share" src={heart} alt="like"/>
                 <img className="like-share" id="share" src={share} alt="share"/>
            </span>
            <span id="date-stamp">date</span>
        </div>
        <p  id="number-like">likes</p>
        <h3>{item.description}</h3>
        </div>
        )
        }
        )
    }

        </div>

)
}
export default Card;
