import { useState, useEffect } from 'react'
import Text from '../components/atoms/Text'
import Button from '../components/atoms/Button'
import DeliveryMap from '../components/organisms/DeliveryMap'
import { formatPrice } from '../utils/format'
import { BUILDING_COORDS } from '../data/stores'

const STEPS = [
  { id: 1, label: 'Pedido recibido',      emoji: '✅', duration: 5000  },
  { id: 2, label: 'Preparando tu pedido', emoji: '🍳', duration: 10000  },
  { id: 3, label: 'Tu Urón va en camino', emoji: '🛵', duration: 18000 },
  { id: 4, label: '¡Pedido entregado!',   emoji: '📦', duration: null  },
]

function TrackingPage({ order, onDone }) {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    if (currentStep >= STEPS.length - 1) return
    const timer = setTimeout(() => {
      setCurrentStep(prev => prev + 1)
    }, STEPS[currentStep].duration)
    return () => clearTimeout(timer)
  }, [currentStep])

  const isDelivered = currentStep === STEPS.length - 1
  const isOnTheWay = currentStep === 2

  const destinationCoords = order?.location
    ? BUILDING_COORDS[order.location]
    : null

  const containerStyle = {
    minHeight: '100vh',
    background: '#F7F8FA',
    display: 'flex',
    flexDirection: 'column',
  }

  const headerStyle = {
    background: isDelivered ? '#E8541A' : '#12213A',
    padding: '40px 20px 30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    transition: 'background 0.6s',
  }

  const stepStyle = (index) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    background: index <= currentStep ? '#FFFFFF' : '#F7F8FA',
    borderRadius: '16px',
    border: `1.5px solid ${index === currentStep ? '#E8541A' : '#E8ECF2'}`,
    transition: 'all 0.4s',
    opacity: index > currentStep ? 0.4 : 1,
  })

  const stepIconStyle = (index) => ({
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: index < currentStep ? '#E8541A' : index === currentStep ? '#FFF0EA' : '#F1F5F9',
    border: `2px solid ${index <= currentStep ? '#E8541A' : '#E8ECF2'}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    flexShrink: 0,
    transition: 'all 0.4s',
  })

  const connectorStyle = (index) => ({
    width: '2px',
    height: '20px',
    background: index < currentStep ? '#E8541A' : '#E8ECF2',
    margin: '0 23px',
    transition: 'background 0.4s',
  })

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <span style={{ fontSize: '56px' }}>{STEPS[currentStep].emoji}</span>
        <Text variant="h2" color="white" style={{ textAlign: 'center' }}>
          {STEPS[currentStep].label}
        </Text>
        {order && (
          <Text variant="small" color="white" style={{ opacity: 0.8, textAlign: 'center' }}>
            Pedido de {order.name} · {order.location}
          </Text>
        )}
      </div>

      {isOnTheWay && order?.storeCoords && destinationCoords && (
        <div style={{ padding: '16px 20px 0' }}>
          <DeliveryMap
            storeCoords={order.storeCoords}
            storeEmoji={order.storeEmoji}
            destinationCoords={destinationCoords}
          />
        </div>
      )}

      <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '0' }}>
        {STEPS.map((step, index) => (
          <div key={step.id}>
            <div style={stepStyle(index)}>
              <div style={stepIconStyle(index)}>
                {index < currentStep ? '✓' : step.emoji}
              </div>
              <div>
                <Text
                  variant="body"
                  style={{
                    fontWeight: index === currentStep ? '600' : '400',
                    color: index === currentStep ? '#E8541A' : index < currentStep ? '#12213A' : '#94A3B8',
                  }}
                >
                  {step.label}
                </Text>
                {index === currentStep && !isDelivered && (
                  <Text variant="small" color="secondary">En progreso...</Text>
                )}
                {index < currentStep && (
                  <Text variant="small" color="secondary">Completado</Text>
                )}
              </div>
            </div>
            {index < STEPS.length - 1 && (
              <div style={connectorStyle(index)} />
            )}
          </div>
        ))}
      </div>

      {order && (
        <div style={{
          margin: '0 20px',
          background: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E8ECF2',
          padding: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div>
            <Text variant="small" color="secondary">Total pagado</Text>
            <Text variant="h3" color="brand">{formatPrice(order.total)}</Text>
          </div>
          <div style={{ textAlign: 'right' }}>
            <Text variant="small" color="secondary">Entrega en</Text>
            <Text variant="h3">{order.location}</Text>
          </div>
        </div>
      )}

      {isDelivered && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 40px)',
          maxWidth: '440px',
          zIndex: 200,
        }}>
          <Button fullWidth onClick={onDone}>
            Volver al inicio
          </Button>
        </div>
      )}
    </div>
  )
}

export default TrackingPage