import React from "react";
import POPOSSpace from "../POPOSSpace/POPOSSpace.js";
import './POPOSList.css';
import data from '../../data.json'


function POPOSList(){

  const spaces = data.map(({ name, address, images, hours, likes }, i) => {
    return (
      <POPOSSpace
        id={i}
        key={name}
        name={name}
        address={address}
        image={images[0]}
        hours={hours}
        likes={likes}
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