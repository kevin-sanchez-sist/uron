import StoreList from '../components/organisms/StoreList'
import CampusMap from '../components/organisms/CampusMap'
import Text from '../components/atoms/Text'
import { STORES } from '../data/stores'

function HomePage({ onStoreClick }) {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <Text variant="h1">¡Hola! 👋</Text>
        <Text variant="body" color="secondary">
          ¿Qué quieres pedir hoy?
        </Text>
      </div>

      <div>
        <Text variant="h3" style={{ marginBottom: '10px' }}>Comercios en el campus</Text>
        <CampusMap stores={STORES} onStoreClick={onStoreClick} />
      </div>

      <StoreList onStoreClick={onStoreClick} />
    </div>
  )
}

export default HomePage