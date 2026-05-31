import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet'
import L from 'leaflet'
import driverImg from '../../assets/driver.png'

const storeIcon = (emoji) => L.divIcon({
  html: `<div style="
    font-size: 20px;
    background: #12213A;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  ">${emoji}</div>`,
  className: '',
  iconSize: [38, 38],
  iconAnchor: [19, 19],
})

const destinationIcon = L.divIcon({
  html: `<div style="
    font-size: 20px;
    background: #E8541A;
    border: 2px solid #FFFFFF;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(232,84,26,0.4);
  ">📍</div>`,
  className: '',
  iconSize: [38, 38],
  iconAnchor: [19, 19],
})

const driverIcon = L.divIcon({
  html: `<div style="
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 2.5px solid #E8541A;
    box-shadow: 0 3px 12px rgba(232,84,26,0.35);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: pulse 1s infinite;
  "><img src="${driverImg}" style="width: 48px; height: 48px; object-fit: cover;" /></div>`,
  className: '',
  iconSize: [52, 52],
  iconAnchor: [26, 26],
})

function AnimatedDriver({ from, to, duration = 18000 }) {
  const [position, setPosition] = useState(from)
  const startTime = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    startTime.current = performance.now()

    const animate = (now) => {
      const elapsed = now - startTime.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress

      const lat = from[0] + (to[0] - from[0]) * eased
      const lng = from[1] + (to[1] - from[1]) * eased
      setPosition([lat, lng])

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [from, to, duration])

  return <Marker position={position} icon={driverIcon} />
}

function FitBounds({ from, to }) {
  const map = useMap()
  useEffect(() => {
    const bounds = L.latLngBounds([from, to])
    map.fitBounds(bounds, { padding: [60, 60] })
  }, [map, from, to])
  return null
}

function DeliveryMap({ storeCoords, storeEmoji, destinationCoords }) {
  const center = [
    (storeCoords[0] + destinationCoords[0]) / 2,
    (storeCoords[1] + destinationCoords[1]) / 2,
  ]

  return (
    <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #E8ECF2' }}>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.12); }
        }
      `}</style>
      <MapContainer
        center={center}
        zoom={17}
        style={{ height: '300px', width: '100%' }}
        zoomControl={false}
        dragging={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <FitBounds from={storeCoords} to={destinationCoords} />
        <Polyline
          positions={[storeCoords, destinationCoords]}
          color="#E8541A"
          weight={3}
          dashArray="8 6"
          opacity={0.7}
        />
        <Marker position={storeCoords} icon={storeIcon(storeEmoji)} />
        <Marker position={destinationCoords} icon={destinationIcon} />
        <AnimatedDriver
          from={storeCoords}
          to={destinationCoords}
          duration={10000}
        />
      </MapContainer>
    </div>
  )
}

export default DeliveryMap