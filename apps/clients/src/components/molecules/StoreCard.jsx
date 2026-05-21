import Text from '../atoms/Text'
import Badge from '../atoms/Badge'

function StoreCard({ store, onClick }) {
  const cardStyle = {
    background: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid #E8ECF2',
    padding: '16px',
    cursor: store.open ? 'pointer' : 'default',
    opacity: store.open ? 1 : 0.6,
    transition: 'transform 0.15s, box-shadow 0.15s',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  }

  const headerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '8px',
  }

  const emojiStyle = {
    fontSize: '36px',
    lineHeight: 1,
  }

  const logoStyle = {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    objectFit: 'cover',
    border: '1px solid #E8ECF2',
    }

  const footerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  }

  const dotStyle = {
    width: '3px',
    height: '3px',
    borderRadius: '50%',
    background: '#94A3B8',
  }

  return (
    <div
      style={cardStyle}
      onClick={store.open ? onClick : undefined}
      onMouseEnter={e => {
        if (store.open) {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div style={headerStyle}>
        {store.image
            ? <img src={store.image} alt={store.name} style={logoStyle} />
            : <span style={emojiStyle}>{store.emoji}</span>
        }
        <Badge variant={store.tagVariant}>{store.tag}</Badge>
        </div>

      <div>
        <Text variant="h3">{store.name}</Text>
        <Text variant="small" color="secondary" style={{ marginTop: '2px' }}>
          {store.category}
        </Text>
      </div>

      <div style={footerStyle}>
        <Text variant="small" color="secondary">⭐ {store.rating}</Text>
        <div style={dotStyle} />
        <Text variant="small" color="secondary">🕐 {store.time}</Text>
        <div style={dotStyle} />
        <Text variant="small" color="secondary">📍 {store.distance}</Text>
      </div>
    </div>
  )
}

export default StoreCard