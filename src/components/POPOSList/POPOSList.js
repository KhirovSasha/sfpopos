import React, { useState } from "react";
import POPOSSpace from "../POPOSSpace/POPOSSpace.js";
import './POPOSList.css';
import data from '../../data.js'


function POPOSList(){
  const [ query, setQuery ] = useState('')
  const spaces = data.filter(({ name, address }) => {
    // true if query is in title
    const inTitle = name.toLowerCase().includes(query.toLowerCase())
    // true if query is in address
    const inAddress = address.toLowerCase().includes(query.toLowerCase())
    // return true if either is true
    return inTitle || inAddress
    }).map((obj) => 
    {
      const { id, name, address, images, hours, likes } = obj
      return (
        <POPOSSpace
          id={id}
          key={`${name}-${id}`}
          name={name}
          address={address}
          image={images[0]}
          hours={hours}
          likes={likes}
        />
      )
    })

    return(
        <div>
          <form>
              <input
                value={query}
                placeholder="search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">Submit</button>
          </form>
          <div className="POPOSList">
            { spaces }
          </div>
        </div>
        
    )
}

export default POPOSList