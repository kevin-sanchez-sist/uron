import { useState } from 'react'
import Button from '../components/atoms/Button'
import Text from '../components/atoms/Text'
import Input from '../components/atoms/Input'
import { formatPrice } from '../utils/format'

const LOCATIONS = [
  "Edificio 1",
  "Edificio 2",
  "Edificio 3",
  "Edificio 4",
  "Edificio 5",
  "Edificio 6",
  "Edificio 7",
  "Edificio 8",
  "Edificio 9",
  "Edificio 10",
  "Edificio 11",
  "Edificio 12",
  "Edificio 13",
  "Edificio 14",
  "Edificio 15",
  "Edificio 16",
  "Edificio 17",
]

const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
  </svg>
)

function CheckoutPage({ cart, onBack, onConfirm }) {
  const [name, setName] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [note, setNote] = useState('')

  const totalPrice = cart.reduce((acc, i) => acc + i.price * i.quantity, 0)
  const deliveryFee = 1500
  const total = totalPrice + deliveryFee

  const canConfirm = name.trim() !== '' && selectedLocation !== ''

  const headerStyle = {
    background: '#FFFFFF',
    borderBottom: '1px solid #E8ECF2',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  }

  const backBtnStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    color: '#12213A',
  }

  const sectionStyle = {
    background: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid #E8ECF2',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  }

  const locationGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '8px',
  }

  const locationBtnStyle = (isSelected) => ({
    padding: '12px',
    borderRadius: '12px',
    border: `1.5px solid ${isSelected ? '#E8541A' : '#E8ECF2'}`,
    background: isSelected ? '#FFF0EA' : '#FFFFFF',
    color: isSelected ? '#E8541A' : '#5A6A7E',
    fontSize: '14px',
    fontWeight: isSelected ? '600' : '400',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'all 0.15s',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  })

  const summaryRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const dividerStyle = {
    height: '1px',
    background: '#E8ECF2',
  }

  return (
    <div style={{ paddingBottom: '100px' }}>
      <div style={headerStyle}>
        <button style={backBtnStyle} onClick={onBack}>
          <BackIcon />
        </button>
        <Text variant="h3">Confirmar pedido</Text>
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* Datos personales */}
        <div style={sectionStyle}>
          <Text variant="h3">¿Quién recibe?</Text>
          <Input
            placeholder="Tu nombre"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        {/* Ubicación */}
        <div style={sectionStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Text variant="h3">¿Dónde estás?</Text>
          </div>
          <Text variant="small" color="secondary">
            Selecciona tu ubicación dentro del campus
          </Text>
          <div style={locationGridStyle}>
            {LOCATIONS.map(loc => (
              <button
                key={loc}
                style={locationBtnStyle(selectedLocation === loc)}
                onClick={() => setSelectedLocation(loc)}
              >
                <LocationIcon />
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Nota */}
        <div style={sectionStyle}>
          <Text variant="h3">Nota para el repartidor</Text>
          <textarea
            placeholder="Ej: Estoy en el segundo piso, mesa del fondo..."
            value={note}
            onChange={e => setNote(e.target.value)}
            style={{
              border: '1.5px solid #E8ECF2',
              borderRadius: '12px',
              padding: '12px 16px',
              fontSize: '15px',
              color: '#12213A',
              resize: 'none',
              height: '80px',
              fontFamily: 'inherit',
              outline: 'none',
            }}
          />
        </div>

        {/* Resumen */}
        <div style={sectionStyle}>
          <Text variant="h3">Resumen</Text>
          <div style={dividerStyle} />
          {cart.map(item => (
            <div key={item.id} style={summaryRowStyle}>
              <Text variant="body" color="secondary">{item.name} x{item.quantity}</Text>
              <Text variant="body">{formatPrice(item.price * item.quantity)}</Text>
            </div>
          ))}
          <div style={dividerStyle} />
          <div style={summaryRowStyle}>
            <Text variant="body" color="secondary">Domicilio</Text>
            <Text variant="body">{formatPrice(deliveryFee)}</Text>
          </div>
          <div style={summaryRowStyle}>
            <Text variant="h3">Total</Text>
            <Text variant="h3" color="brand">{formatPrice(total)}</Text>
          </div>
        </div>

      </div>

      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 40px)',
        maxWidth: '440px',
        zIndex: 200,
      }}>
        <Button
          fullWidth
          disabled={!canConfirm}
          onClick={() => onConfirm({ name, location: selectedLocation, note })}
        >
          Hacer pedido · {formatPrice(total)}
        </Button>
      </div>
    </div>
  )
}

export default CheckoutPage