import { useState } from 'react'
//import './App.css'

function HurricaneTracker() {
  
  return (
    
    <div>
      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}><strong>Live Hurricane Tracking Interactive Map </strong></p>
      <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <iframe width="1300" height="700" frameborder="0" scrolling="no" allowfullscreen src="https://arcg.is/9r9uf0" ></iframe>
      <ul>

      <li><a  href="https://gis-fema.hub.arcgis.com/pages/hurricanes" target="_blank" rel="noopener noreferrer">
            <strong>Explore Map</strong>
        </a></li>
      <li><a  href="https://weather.com/?cm_ven=PS_GGL_Branded_07222020_1&par=MK_GGL&tpcc=mktg-search-Google-acquisition&gad_source=1&gclid=Cj0KCQjwm5e5BhCWARIsANwm06ha09phTo9G-xmBAFauCIC3OcvKfvBHm1ak8H4NxpnDAkBULkhv5fMaAtC3EALw_wcB" target="_blank" rel="noopener noreferrer">
            <strong>Weather Channel</strong>
        </a></li>
        <li><a  href="https://cnrse.cnic.navy.mil/Installations/NS-Mayport/About/Hurricane-Information/Terms/Hurricane-Categories/">
            <strong>Understanding Hurricane Categories</strong>
        </a></li>
        </ul>
        </p>
    </div>
  )
}

export default HurricaneTracker