import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'

const location = {
    address: '34 street 17, 8th district, 6th of Octber city',
    lat: 26.820553,
    lng: 30.802498
}

const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )
  
  const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )
  
  export default Map