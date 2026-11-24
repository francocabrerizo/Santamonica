import { useState } from 'react'

type SafeImageProps = {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  priority?: boolean
  loading?: 'eager' | 'lazy'
}

export default function SafeImage({
  src,
  alt,
  className = '',
  imageClassName = '',
  priority = false,
  loading = 'lazy',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-white/5 ${className}`}>
      {hasError ? (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-forest p-5 text-center"
        >
          <span aria-hidden="true" className="h-[2px] w-8 bg-gold" />
          <span className="font-display text-sm leading-snug text-white/85">{alt}</span>
          <span aria-hidden="true" className="h-[2px] w-8 bg-gold" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : loading}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover ${imageClassName}`}
        />
      )}
    </div>
  )
}
