import React from "react";
import { Link } from "react-router-dom";
import "./POPOSSpace.css";  

function POPOSSpace(props){
    const {name, image, address, likes, hours, id} = props
    return(
        <div className="POPOSSpace">
            <Link to={`/details/${id}`}>
                <img src = {image}
                width="300" 
                height="300" 
                alt={name} 
                />
                
            </Link>
            
            <h1>
                <Link to={`/details/${id}`}>
                    {name} 
                </Link>
            </h1>
            <div>{address}</div>
            <div className="hours">{hours}</div>
            <div className="Likes">
                Likes: {likes}
                <img src="https://img.icons8.com/material-outlined/512/facebook-like.png" alt={name}/>
            </div>
        </div>
    )
}

export default POPOSSpace