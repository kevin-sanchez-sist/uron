import { useState } from 'react'
import useCart from './hooks/useCart'
import Header from './components/organisms/Header'
import HomePage from './pages/HomePage'
import StoreDetailPage from './pages/StoreDetailPage'
import CartPage from './pages/CartPage'

function App() {
  const [page, setPage] = useState('home')
  const [selectedStore, setSelectedStore] = useState(null)
  const { cart, addItem, increaseItem, decreaseItem, totalItems, clearCart } = useCart()

  const handleStoreClick = (store) => {
    setSelectedStore(store)
    setPage('store')
  }

  const handleConfirm = () => {
    clearCart()
    setPage('home')
    alert('¡Pedido confirmado! Tu Urón está en camino 🛵')
  }

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', minHeight: '100vh', background: '#F7F8FA' }}>
      {page !== 'cart' && (
        <Header
          totalItems={totalItems}
          onCartClick={() => setPage('cart')}
        />
      )}

      {page === 'home' && (
        <HomePage onStoreClick={handleStoreClick} />
      )}

      {page === 'store' && selectedStore && (
        <StoreDetailPage
          store={selectedStore}
          onBack={() => setPage('home')}
          onAdd={addItem}
          cart={cart}
          onCartClick={() => setPage('cart')}
        />
      )}

      {page === 'cart' && (
        <CartPage
          cart={cart}
          onIncrease={increaseItem}
          onDecrease={decreaseItem}
          onBack={() => page === 'cart' ? setPage(selectedStore ? 'store' : 'home') : null}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  )
}

export default App