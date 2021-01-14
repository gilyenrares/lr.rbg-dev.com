import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Container } from 'react-bootstrap';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 51.594417,
  lng: -0.275742
};

function MyMap() {
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <Container>
    <LoadScript
      googleMapsApiKey="AIzaSyDt_-OQTqONgw4mhhl6d0G8uo3RZPOzcgw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
    </Container>
  )
}

export default React.memo(MyMap)