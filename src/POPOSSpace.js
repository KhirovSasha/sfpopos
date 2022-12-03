import React from "react";
import "./POPOSSpace.css";  

function POPOSSpace(props){
    const {name, image, address, likes, hours} = props
    return(
        <div className="POPOSSpace">
            <img src = {image}
            width="300" 
            height="300" 
            alt="Hello" 
            />
            <h1>{name}</h1>
            <div>{address}</div>
            <div className="hours">{hours}</div>
            <div className="Likes">
                Likes: {likes}
                <img src="https://img.icons8.com/material-outlined/512/facebook-like.png" />
            </div>
        </div>
    )
}

export default POPOSSpace