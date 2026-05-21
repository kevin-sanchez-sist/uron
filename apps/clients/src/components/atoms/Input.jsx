import { useState } from 'react'

function Input({ placeholder = '', value, onChange, icon = null, type = 'text' }) {
  const [focused, setFocused] = useState(false)

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: '#FFFFFF',
    border: `1.5px solid ${focused ? '#E8541A' : '#E8ECF2'}`,
    borderRadius: '12px',
    padding: '12px 16px',
    transition: 'border-color 0.2s',
  }

  const inputStyle = {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '15px',
    color: '#12213A',
    background: 'transparent',
  }

  return (
    <div style={containerStyle}>
      {icon && <span style={{ color: '#94A3B8', display: 'flex' }}>{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={inputStyle}
      />
    </div>
  )
}

export default Input