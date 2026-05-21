import CartItem from '../components/molecules/CartItem'
import Button from '../components/atoms/Button'
import Text from '../components/atoms/Text'
import { formatPrice } from '../utils/format'

const BackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7"/>
  </svg>
)

function CartPage({ cart, onIncrease, onDecrease, onBack, onConfirm }) {
  const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0)
  const totalPrice = cart.reduce((acc, i) => acc + i.price * i.quantity, 0)
  const deliveryFee = 1500

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

  const summaryStyle = {
    background: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid #E8ECF2',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '24px',
  }

  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const dividerStyle = {
    height: '1px',
    background: '#E8ECF2',
  }

  const deliveryStyle = {
    background: '#FFF0EA',
    borderRadius: '12px',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '8px',
  }

  if (cart.length === 0) {
    return (
      <div>
        <div style={headerStyle}>
          <button style={backBtnStyle} onClick={onBack}>
            <BackIcon />
          </button>
          <Text variant="h3">Tu carrito</Text>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 20px',
          gap: '12px',
        }}>
          <span style={{ fontSize: '64px' }}>🛒</span>
          <Text variant="h3" color="secondary">Tu carrito está vacío</Text>
          <Text variant="body" color="secondary" style={{ textAlign: 'center' }}>
            Agrega productos desde cualquier comercio
          </Text>
          <div style={{ marginTop: '8px' }}>
            <Button onClick={onBack}>Ver comercios</Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ paddingBottom: '100px' }}>
      <div style={headerStyle}>
        <button style={backBtnStyle} onClick={onBack}>
          <BackIcon />
        </button>
        <Text variant="h3">Tu carrito</Text>
        <Text variant="small" color="secondary" style={{ marginLeft: 'auto' }}>
          {totalItems} {totalItems === 1 ? 'item' : 'items'}
        </Text>
      </div>

      <div style={{ padding: '20px' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E8ECF2', padding: '4px 16px' }}>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
            />
          ))}
        </div>

        <div style={deliveryStyle}>
          <span style={{ fontSize: '20px' }}>🛵</span>
          <div>
            <Text variant="small" style={{ fontWeight: '600' }}>Domicilio dentro del campus</Text>
            <Text variant="small" color="secondary">Entrega en {formatPrice(deliveryFee)}</Text>
          </div>
        </div>

        <div style={summaryStyle}>
          <Text variant="h3">Resumen</Text>
          <div style={dividerStyle} />
          <div style={rowStyle}>
            <Text variant="body" color="secondary">Subtotal</Text>
            <Text variant="body">{formatPrice(totalPrice)}</Text>
          </div>
          <div style={rowStyle}>
            <Text variant="body" color="secondary">Domicilio</Text>
            <Text variant="body">{formatPrice(deliveryFee)}</Text>
          </div>
          <div style={dividerStyle} />
          <div style={rowStyle}>
            <Text variant="h3">Total</Text>
            <Text variant="h3" color="brand">{formatPrice(totalPrice + deliveryFee)}</Text>
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
        <Button fullWidth onClick={onConfirm}>
          Confirmar pedido · {formatPrice(totalPrice + deliveryFee)}
        </Button>
      </div>
    </div>
  )
}

export default CartPage