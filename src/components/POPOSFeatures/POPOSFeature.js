import React from 'react'
import './POPOSFeature.css'

function getFeature(str) {
    switch(str) {
        case 'outdoors':
            return '🌲'
        case 'coffee':
            return '☕️'
        case 'art':
            return '🖼'
        case 'WC':
            return '🚽'
        case 'power':
            return '🔌'
        case 'Helicopter Pad':
            return '🚁'
        case 'Business Center':
            return '🏢'
        case 'Hospital':
            return '🏥'
        case 'Parking':
            return '🅿️'
        case 'Children Hub':
            return '👶'
        default:
            return '？'
    }
}

function POPOSFeature(props) {
    const emoji = getFeature(props.name)
    return <div className="POPOSFeature">{emoji}</div>
}

export default POPOSFeature