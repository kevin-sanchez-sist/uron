import Text from '../atoms/Text'
import Badge from '../atoms/Badge'
import logo from '../../assets/logo.png'

function Header({ totalItems, onCartClick }) {
  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: '#FFFFFF',
    borderBottom: '1px solid #E8ECF2',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  const cartBtnStyle = {
    position: 'relative',
    background: '#FFF0EA',
    border: 'none',
    borderRadius: '12px',
    padding: '10px 14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }

  const badgeStyle = {
    position: 'absolute',
    top: '-6px',
    right: '-6px',
  }

  const imgStyle = {
    height: '66px',
    width: 'auto',
    objectFit: 'contain',
  }

  return (
    <header style={headerStyle}>
      <img src={logo} alt="URÓN" style={imgStyle} />

      <button style={cartBtnStyle} onClick={onCartClick}>
        <span style={{ fontSize: '20px' }}>🛒</span>
        <Text variant="small" color="brand" style={{ fontWeight: '700' }}>
          Carrito
        </Text>
        {totalItems > 0 && (
          <div style={badgeStyle}>
            <Badge variant="brand">{totalItems}</Badge>
          </div>
        )}
      </button>
    </header>
  )
}

export default Header