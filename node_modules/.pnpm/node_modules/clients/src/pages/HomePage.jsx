import StoreList from '../components/organisms/StoreList'
import Text from '../components/atoms/Text'

function HomePage({ onStoreClick }) {
  const greetingStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    marginBottom: '20px',
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={greetingStyle}>
        <Text variant="h1">¡Hola! 👋</Text>
        <Text variant="body" color="secondary">
          ¿Qué quieres pedir hoy?
        </Text>
      </div>

      <StoreList onStoreClick={onStoreClick} />
    </div>
  )
}

export default HomePage