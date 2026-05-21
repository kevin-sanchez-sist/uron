import { useState } from 'react'
import ProductItem from '../components/molecules/ProductItem'
import Badge from '../components/atoms/Badge'
import Button from '../components/atoms/Button'
import Text from '../components/atoms/Text'

const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7"/>
  </svg>
)

function StoreDetailPage({ store, onBack, onAdd, cart, onCartClick }) {
  const [imgError, setImgError] = useState(false)

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

  const logoStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    objectFit: 'cover',
    border: '1px solid #E8ECF2',
  }

  const emojiStyle = {
    fontSize: '36px',
    lineHeight: 1,
  }

  const infoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    flex: 1,
  }

  const metaStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  }

  const dotStyle = {
    width: '3px',
    height: '3px',
    borderRadius: '50%',
    background: '#94A3B8',
  }

  const totalInCart = cart.reduce((acc, i) => acc + i.quantity, 0)
  const totalPrice = cart.reduce((acc, i) => acc + i.price * i.quantity, 0)

  return (
    <div>
      <div style={headerStyle}>
        <button style={backBtnStyle} onClick={onBack}>
          <BackIcon />
        </button>

        {store.image && !imgError
          ? <img src={store.image} alt={store.name} style={logoStyle} onError={() => setImgError(true)} />
          : <span style={emojiStyle}>{store.emoji}</span>
        }

        <div style={infoStyle}>
          <Text variant="h3">{store.name}</Text>
          <div style={metaStyle}>
            <Badge variant={store.tagVariant}>{store.tag}</Badge>
            <Text variant="small" color="secondary">⭐ {store.rating}</Text>
            <div style={dotStyle} />
            <Text variant="small" color="secondary">🕐 {store.time}</Text>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px' }}>
        <Text variant="h2" style={{ marginBottom: '4px' }}>Productos</Text>
        <Text variant="small" color="secondary" style={{ marginBottom: '16px' }}>
          {store.products.length} disponibles
        </Text>

        {store.products.map(product => (
          <ProductItem key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>

      {totalInCart > 0 && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 40px)',
          maxWidth: '440px',
          zIndex: 200,
        }}>
          <Button fullWidth onClick={onCartClick}>
            🛒 Ver carrito · {totalInCart} items · ${totalPrice.toLocaleString('es-CO')}
          </Button>
        </div>
      )}
    </div>
  )
}

export default StoreDetailPage