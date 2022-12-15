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

            <Link
                className="POPOSSpace-title" 
                to={`/details/${id}`}>
                   <h1>{name}</h1> 
            </Link>
            <div className="POPOSSpace-info">
                <div>{address}</div>
                <div className="hours">{hours}</div>
                <div className="Likes">
                    Likes: {likes}
                    <img src="https://img.icons8.com/material-outlined/512/facebook-like.png" alt={name}/>
            </div>
            </div>
            
        </div>
    )
}

export default POPOSSpace