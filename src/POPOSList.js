import React from "react";
import POPOSSpace from "./POPOSSpace";
import './POPOSList.css';
import data from './data.json'

function POPOSList(){

    const spaces = data.map(( { name, address, images, likes, hours } ) => {
        return (
          <POPOSSpace
            key={name} 
            name={name}
            address={address}
            image={images[0]}
            likes={likes}
            hours={hours}
          />
        )
      })

    return(
        <div className="POPOSList">
           { spaces }
        </div>
    )
}

export default POPOSList