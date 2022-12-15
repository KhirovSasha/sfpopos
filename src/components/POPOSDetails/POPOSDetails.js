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
       <div className="POPOSDetails-image">
        <img src={images[0]} alt={name}/>
      </div>
      <div className="POPOSDetails-info">
        <h1 className="POPOSDetails-title">{ name }</h1>
        <p className="POPOSDetails-desc">{ desc }</p>
        <p className="POPOSDetails-hours"><strong>Time:</strong> { hours }</p>
        <p className="POPOSDetails-features"><strong>Features:</strong> { features }</p>
        <p className="POPOSDetails-geo"><strong>Coordinate:</strong> { geo.lat } { geo.lon }</p>
      </div>

    </div>
  )
}

export default POPOSDetails