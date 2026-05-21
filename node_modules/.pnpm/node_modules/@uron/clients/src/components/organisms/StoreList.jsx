import { useState } from 'react'
import StoreCard from '../molecules/StoreCard'
import Input from '../atoms/Input'
import Badge from '../atoms/Badge'
import { STORES, CATEGORIES } from '../../data/stores'

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
  </svg>
)

function StoreList({ onStoreClick }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = STORES.filter(store => {
    const matchesCategory = activeCategory === 'Todos' || store.category === activeCategory
    const matchesQuery = store.name.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  const categoriesStyle = {
    display: 'flex',
    gap: '8px',
    overflowX: 'auto',
    paddingBottom: '4px',
    scrollbarWidth: 'none',
  }

  const categoryBtnStyle = (isActive) => ({
    background: isActive ? '#E8541A' : '#FFFFFF',
    color: isActive ? '#FFFFFF' : '#5A6A7E',
    border: `1.5px solid ${isActive ? '#E8541A' : '#E8ECF2'}`,
    borderRadius: '20px',
    padding: '8px 16px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.15s',
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Input
        placeholder="Buscar comercios..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        icon={<SearchIcon />}
      />

      <div style={categoriesStyle}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            style={categoryBtnStyle(activeCategory === cat)}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0
        ? <p style={{ color: '#94A3B8', textAlign: 'center', padding: '40px 0' }}>
            No hay comercios que coincidan
          </p>
        : filtered.map(store => (
            <StoreCard key={store.id} store={store} onClick={() => onStoreClick(store)} />
          ))
      }
    </div>
  )
}

export default StoreList