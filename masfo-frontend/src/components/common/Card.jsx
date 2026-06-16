export const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`
      bg-white rounded-xl shadow-md overflow-hidden
      ${hover ? 'card-hover' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}