import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map() {
  const position = [41.6186, -0.9230] 

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '300px', width: '100%', marginTop: '20px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>Urban Fest Location</Popup>
      </Marker>
    </MapContainer>
  )
}