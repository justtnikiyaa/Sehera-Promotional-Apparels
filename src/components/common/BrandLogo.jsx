import { useState } from 'react'

function BrandLogo({
  size = 'md',
  className = '',
  showFallbackText = true,
  titleColorClass = 'text-white',
  subtitleColorClass = 'text-slate-300',
}) {
  const [logoLoaded, setLogoLoaded] = useState(true)

  const sizeMap = {
    sm: 'h-9 w-auto sm:h-10',
    md: 'h-11 w-auto sm:h-12',
    lg: 'h-16 w-auto sm:h-20 lg:h-24',
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {logoLoaded && (
        <img
          src="/src/assets/sehera-logo.png"
          alt="Sehera Promotional Apparels logo"
          className={`${sizeMap[size] ?? sizeMap.md} object-contain`}
          onError={() => setLogoLoaded(false)}
        />
      )}
      {(showFallbackText || !logoLoaded) && (
        <div className="leading-tight">
          <p className={`text-sm font-semibold sm:text-base ${titleColorClass}`}>Sehera Promotional</p>
          <p className={`text-xs sm:text-sm ${subtitleColorClass}`}>Apparels</p>
        </div>
      )}
    </div>
  )
}

export default BrandLogo
