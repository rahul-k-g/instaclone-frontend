import React from "react";
import image from "../images/loader.gif";
import "../Styles/App.css"

const Loader = ()=>{
    return(
        <div className="loader-container">
             <img src={image} alt="loader" id="loader"/>
        </div>
    )
}
export default Loader;