import { useState } from 'react'
import useCart from './hooks/useCart'
import Header from './components/organisms/Header'
import HomePage from './pages/HomePage'
import StoreDetailPage from './pages/StoreDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import TrackingPage from './pages/TrackingPage'

function App() {
  const [page, setPage] = useState('home')
  const [selectedStore, setSelectedStore] = useState(null)
  const [currentOrder, setCurrentOrder] = useState(null)
  const { cart, addItem, increaseItem, decreaseItem, totalItems, clearCart } = useCart()

  const handleStoreClick = (store) => {
    setSelectedStore(store)
    setPage('store')
  }

  const handleConfirm = ({ name, location, note }) => {
  const total = cart.reduce((acc, i) => acc + i.price * i.quantity, 0) + 1500
  setCurrentOrder({
    name,
    location,
    note,
    total,
    storeCoords: selectedStore.coords,
    storeEmoji: selectedStore.emoji,
  })
  clearCart()
  setPage('tracking')
}

  const hiddenHeader = ['cart', 'checkout', 'tracking']

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', minHeight: '100vh', background: '#F7F8FA' }}>
      {!hiddenHeader.includes(page) && (
        <Header totalItems={totalItems} onCartClick={() => setPage('cart')} />
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
          onBack={() => setPage(selectedStore ? 'store' : 'home')}
          onConfirm={() => setPage('checkout')}
        />
      )}

      {page === 'checkout' && (
        <CheckoutPage
          cart={cart}
          onBack={() => setPage('cart')}
          onConfirm={handleConfirm}
        />
      )}

      {page === 'tracking' && (
        <TrackingPage
          order={currentOrder}
          onDone={() => {
            setPage('home')
            setCurrentOrder(null)
            setSelectedStore(null)
          }}
        />
      )}
    </div>
  )
}

export default App