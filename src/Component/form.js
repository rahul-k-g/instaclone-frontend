import React, { useState } from "react";
import "../Styles/App.css";
import Loader from "./Loader";
 import axios from "axios";
//import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
function FormHandle(){
    const [form,setForm] = useState({file:"",author:"",description:"",location:""});
    const [isLoader,setLoder] = useState(false);
    const navigate = useNavigate();
    //console.log(file);
    
    const postData = async()=>{
        setLoder(true)
        const formData = new FormData();
        formData.append("photo",form.file);
        formData.append("location",form.location);
        formData.append("description",form.description);
        formData.append("name",form.author);

        try{
            await axios({

                url: "https://insta-backend-f6wt.onrender.com/users",
                method: "post",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
              })

                .then((res) => {
                    return res;
                }).then((res)=>{
                    console.log(res);
                })

                .catch((err) => {
                    console.log(err);
                }).finally(()=>{
                    setLoder(false);
                });

        }catch(e){
            console.log(e);
        }

        navigate('/abc', {replace: true});
      
        }

    return (<>
    {isLoader?<Loader/>:
    <div className="form-container" >
    <div className="form">
        <div className="file">
            <input type="file" id="file" onChange={(e)=>{setForm({...form,file:e.target.files[0]})}}/>
            <label htmlFor="file" id="label">Browse</label>
        </div>
           
            <div id="author">
                <input type="text" placeholder="author" id="author-size" onChange={(e)=>{setForm({...form,author:e.target.value})}}/>
                <input type="text" placeholder="location"  onChange={(e)=>{setForm({...form,location:e.target.value})}}/>
            </div>
            <div id="description">
                <input type="text" placeholder="description" id="description"  onChange={(e)=>{setForm({...form,description:e.target.value})}} />
            </div>
             <button id="post-btn" onClick={postData}>post</button>
            
        </div>
    </div>
       
}</>)
}

export default FormHandle;