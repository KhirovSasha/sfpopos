import React from "react";
import POPOSSpace from "./POPOSSpace";
import './POPOSList.css';

function POPOSList(){
    return(
        <div className="POPOSList">
            <POPOSSpace
                name="50 California Street"
                address="50 California St."
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/50_California_Street%2C_San_Francisco.jpg/2448px-50_California_Street%2C_San_Francisco.jpg"
                likes="12"
            />
            <POPOSSpace
                name="100 Pine Street"
                address="100 Pine St."
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/100_Pine_Center.jpg/1200px-100_Pine_Center.jpg"
                likes="5"
            />
            <POPOSSpace
                name="101 California Street"
                address="101 California"
                image="https://101california.com/sites/default/files/home_left.jpg"
                likes="45"
            />
            <POPOSSpace
                name="343 Sansome Roof Garden"
                address="343 Sansome St."
                image="https://www.therooftopguide.com/rooftop-bars-in-san-francisco/Bilder/343-sansome-roof-deck-600-1.jpg"
                likes="8"
            />
            <POPOSSpace
                name="525 Market Street Plaza"
                address="525 Market St."
                image="https://images.squarespace-cdn.com/content/v1/55e77066e4b0ef23d8d3fdad/1516232191030-6PSMBSS8KQSGLOI7XI14/064015_010small.jpg"
                likes="6"
            />
            <POPOSSpace
                name="Citigroup Center"
                address="1 Sansome St."
                image="https://images.adsttc.com/media/images/5445/fab6/e58e/cefb/6000/00a2/newsletter/Paulkhor.jpg?1413872306"
                likes="100"
            />
        </div>
    )
}

export default POPOSList