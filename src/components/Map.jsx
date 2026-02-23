import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const position = [41.618771, -0.934667]

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>Urban Fest 2026</strong> <br /> 
            Recinto Ferial Valdespartera.
          </Popup>
        </Marker>
      </MapContainer>
      
      <a 
        href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          zIndex: 1000,
          backgroundColor: 'var(--neon-purple)',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '0.8rem',
          fontWeight: 'bold'
        }}
      >
        ¿CÓMO LLEGAR? 🚗
      </a>
    </div>
  )
}