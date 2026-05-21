const variants = {
  brand: { background: '#FFF0EA', color: '#E8541A' },
  success: { background: '#ECFDF5', color: '#10B981' },
  warning: { background: '#FFFBEB', color: '#F59E0B' },
  neutral: { background: '#F1F5F9', color: '#5A6A7E' },
  dark: { background: '#12213A', color: '#FFFFFF' },
}

function Badge({ children, variant = 'neutral' }) {
  const style = {
    ...variants[variant],
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
  }

  return <span style={style}>{children}</span>
}

export default Badge