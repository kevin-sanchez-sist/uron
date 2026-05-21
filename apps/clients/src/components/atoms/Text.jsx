const variants = {
  h1: { fontSize: '24px', fontWeight: '700', lineHeight: '1.2' },
  h2: { fontSize: '20px', fontWeight: '700', lineHeight: '1.3' },
  h3: { fontSize: '17px', fontWeight: '600', lineHeight: '1.4' },
  body: { fontSize: '15px', fontWeight: '400', lineHeight: '1.6' },
  small: { fontSize: '13px', fontWeight: '400', lineHeight: '1.5' },
  label: { fontSize: '12px', fontWeight: '600', lineHeight: '1.4', textTransform: 'uppercase', letterSpacing: '0.5px' },
}

const colors = {
  primary: '#12213A',
  secondary: '#5A6A7E',
  light: '#94A3B8',
  brand: '#E8541A',
  white: '#FFFFFF',
}

function Text({ children, variant = 'body', color = 'primary', style = {} }) {
  const tag = variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : variant === 'h3' ? 'h3' : 'p'

  const Tag = tag

  return (
    <Tag style={{ ...variants[variant], color: colors[color], ...style }}>
      {children}
    </Tag>
  )
}

export default Text