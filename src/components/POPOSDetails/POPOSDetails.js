import React, { useState } from 'react'
import data from '../../data.json'
import './POPOSDetails.css'


function POPOSDetails() {

  const [id, setId] = useState(window.location.href.toString().split('/').slice(-1))
  const { images, name, desc, hours, features, geo } = data[id]
  
  window.onpopstate = function(event) {
    setId(window.location.href.toString().split('/').slice(-1))
  }

  return (
    <div className='POPOSDetails'>
       <div>
        <img src={images[0]} width="300" height="300" alt={name}/>
      </div>

      <div>
        <h1>{ name }</h1>
        
        <p>{ desc }</p>
        <p><strong>Time:</strong> { hours }</p>
        <p><strong>Features:</strong> { features }</p>
        <p><strong>Coordinate:</strong> { geo.lat } { geo.lon }</p>
      </div>

    </div>
  )
}

export default POPOSDetails