import { useState } from 'react'

function useCart() {
  const [cart, setCart] = useState([])

  const addItem = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const increaseItem = (product) => {
    setCart(prev => prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i))
  }

  const decreaseItem = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id)
      if (exists.quantity === 1) {
        return prev.filter(i => i.id !== product.id)
      }
      return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity - 1 } : i)
    })
  }

  const removeItem = (product) => {
    setCart(prev => prev.filter(i => i.id !== product.id))
  }

  const clearCart = () => setCart([])

  const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0)
  const totalPrice = cart.reduce((acc, i) => acc + i.price * i.quantity, 0)

  return {
    cart,
    addItem,
    increaseItem,
    decreaseItem,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
  }
}

export default useCart