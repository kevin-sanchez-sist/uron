import { useState } from 'react'
import Text from '../atoms/Text'
import { formatPrice } from '../../utils/format'

function CartItem({ item, onIncrease, onDecrease }) {
  const [imgError, setImgError] = useState(false)

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    padding: '14px 0',
    borderBottom: '1px solid #E8ECF2',
  }

  const infoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1,
  }

  const imgStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    objectFit: 'cover',
    border: '1px solid #E8ECF2',
    minWidth: '48px',
  }

  const emojiStyle = {
    fontSize: '28px',
    lineHeight: 1,
    minWidth: '48px',
    textAlign: 'center',
  }

  const counterStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  }

  const btnStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '1.5px solid #E8ECF2',
    background: '#FFFFFF',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    color: '#12213A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.15s',
  }

  const decreaseBtnStyle = {
    ...btnStyle,
    color: item.quantity === 1 ? '#E8541A' : '#12213A',
    borderColor: item.quantity === 1 ? '#E8541A' : '#E8ECF2',
  }

  const subtotal = item.price * item.quantity

  return (
    <div style={containerStyle}>
      <div style={infoStyle}>
        {item.image && !imgError
          ? <img src={item.image} alt={item.name} style={imgStyle} onError={() => setImgError(true)} />
          : <span style={emojiStyle}>{item.emoji}</span>
        }
        <div>
          <Text variant="body" style={{ fontWeight: '500' }}>{item.name}</Text>
          <Text variant="small" color="secondary" style={{ marginTop: '2px' }}>
            {formatPrice(item.price)} c/u
          </Text>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
        <Text variant="body" color="brand" style={{ fontWeight: '700' }}>
          {formatPrice(subtotal)}
        </Text>
        <div style={counterStyle}>
          <button style={decreaseBtnStyle} onClick={() => onDecrease(item)}>
            {item.quantity === 1 ? '✕' : '−'}
          </button>
          <Text variant="body" style={{ fontWeight: '600', minWidth: '16px', textAlign: 'center' }}>
            {item.quantity}
          </Text>
          <button style={btnStyle} onClick={() => onIncrease(item)}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem