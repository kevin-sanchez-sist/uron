import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import Text from '../atoms/Text'

const createIcon = (emoji) =>
  L.divIcon({
    html: `<div style="
      font-size: 24px;
      background: #FFFFFF;
      border: 2px solid #E8541A;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    ">${emoji}</div>`,
    className: '',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -24],
  })

function CampusMap({ stores, onStoreClick }) {
  const center = [4.793194, -75.688971]

  return (
    <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E8ECF2' }}>
      <MapContainer
        center={center}
        zoom={17}
        style={{ height: '280px', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {stores.filter(s => s.open && s.coords).map(store => (
          <Marker
            key={store.id}
            position={store.coords}
            icon={createIcon(store.emoji)}
            eventHandlers={{ click: () => onStoreClick(store) }}
          >
            <Popup>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '120px' }}>
                <strong style={{ fontSize: '14px', color: '#12213A' }}>{store.name}</strong>
                <span style={{ fontSize: '12px', color: '#5A6A7E' }}>🕐 {store.time}</span>
                <span style={{ fontSize: '12px', color: '#5A6A7E' }}>📍 {store.distance}</span>
                <button
                  onClick={() => onStoreClick(store)}
                  style={{
                    marginTop: '6px',
                    background: '#E8541A',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '6px 10px',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Ver menú
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default CampusMap