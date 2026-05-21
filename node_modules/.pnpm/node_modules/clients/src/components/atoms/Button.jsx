const variants = {
  primary: {
    background: '#E8541A',
    color: '#FFFFFF',
    border: 'none',
  },
  secondary: {
    background: '#FFFFFF',
    color: '#E8541A',
    border: '1.5px solid #E8541A',
  },
  ghost: {
    background: 'transparent',
    color: '#5A6A7E',
    border: '1.5px solid #E8ECF2',
  },
}

function Button({ children, variant = 'primary', fullWidth = false, onClick, disabled = false }) {
  const style = {
    ...variants[variant],
    width: fullWidth ? '100%' : 'auto',
    padding: '12px 20px',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'opacity 0.2s, transform 0.1s',
  }

  return (
    <button style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button