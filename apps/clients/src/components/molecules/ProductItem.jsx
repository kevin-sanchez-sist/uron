import { useState } from 'react'
import Text from '../atoms/Text'
import Button from '../atoms/Button'
import { formatPrice } from '../../utils/format'

function ProductItem({ product, onAdd }) {
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
    fontSize: '32px',
    lineHeight: 1,
    minWidth: '48px',
    textAlign: 'center',
  }

  const actionsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '8px',
    minWidth: '90px',
  }

  return (
    <div style={containerStyle}>
      <div style={infoStyle}>
        {product.image && !imgError
          ? <img src={product.image} alt={product.name} style={imgStyle} onError={() => setImgError(true)} />
          : <span style={emojiStyle}>{product.emoji}</span>
        }
        <div>
          <Text variant="body" style={{ fontWeight: '500' }}>{product.name}</Text>
          <Text variant="small" color="secondary" style={{ marginTop: '2px' }}>
            {product.desc}
          </Text>
        </div>
      </div>

      <div style={actionsStyle}>
        <Text variant="body" color="brand" style={{ fontWeight: '700' }}>
          {formatPrice(product.price)}
        </Text>
        <Button variant="secondary" onClick={() => onAdd(product)}>
          + Agregar
        </Button>
      </div>
    </div>
  )
}

export default ProductItem