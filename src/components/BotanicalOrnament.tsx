export function BotanicalSprig({ className = 'h-4 w-24 text-gold/70' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 20" fill="none" className={className}>
      <path
        d="M4 10H46M74 10H116"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.55"
        strokeLinecap="round"
      />
      <path
        d="M60 15C60 10 63.5 6.2 69 4.5C67.4 9.2 64.2 12.6 60 15ZM60 15C60 10 56.5 6.2 51 4.5C52.6 9.2 55.8 12.6 60 15Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="15.5" r="1.4" fill="currentColor" />
    </svg>
  )
}

export function EucalyptusEngraving({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 220 420" fill="none" className={className}>
      <path
        d="M116 408C112 332 96 254 114 176C128 116 144 64 138 14"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M110 342C82 328 54 326 36 338C56 356 84 358 110 342Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M108 292C138 274 168 274 188 286C166 306 136 308 108 292Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M106 242C74 224 44 226 24 240C48 258 78 260 106 242Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M114 190C146 170 178 168 198 182C174 202 142 206 114 190Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M124 138C96 118 68 116 48 128C70 148 98 152 124 138Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M132 88C158 70 184 68 200 78C180 96 156 100 132 88Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M137 46C118 32 98 30 84 38C98 52 118 56 137 46Z"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <path
        d="M138 14C146 28 156 42 152 56C140 46 134 30 138 14Z"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MeadowEngraving({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 260 360" fill="none" className={className}>
      <path
        d="M84 348C86 266 106 174 150 68"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M122 348C136 276 164 196 218 116"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M54 348C46 278 48 214 68 142"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M150 68C138 82 132 98 134 114M144 88C160 80 174 78 184 82M134 114C118 110 104 114 96 122M126 142C146 136 162 138 172 146M114 176C94 172 80 176 70 186"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      <path
        d="M218 116C202 126 194 140 194 154M204 138C220 136 234 138 244 144M184 174C168 172 156 178 148 186M168 206C186 204 202 208 212 216"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="68" cy="136" r="5" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="58" cy="148" r="3" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="78" cy="150" r="3" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

export function HorizonDivider({
  fillClass = 'text-forest-soft',
  flip = false,
}: {
  fillClass?: string
  flip?: boolean
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative -mb-px w-full overflow-hidden leading-none ${fillClass}`}
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className={`block h-8 w-full sm:h-11 md:h-14 ${flip ? 'scale-y-[-1]' : ''}`}
      >
        <path
          fill="currentColor"
          d="M0,36 C280,4 520,52 780,30 C1040,8 1260,34 1440,22 L1440,56 L0,56 Z"
        />
      </svg>
    </div>
  )
}

export function SanctuarySeal({ className = 'h-12 w-12' }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 64 64" fill="none" className={className}>
      <circle cx="32" cy="32" r="30" stroke="#D8C57E" strokeOpacity="0.65" strokeWidth="1.5" />
      <circle
        cx="32"
        cy="32"
        r="24.5"
        stroke="#6E9456"
        strokeOpacity="0.55"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      <path
        d="M21.5 21v13c0 5.8 4.7 10.5 10.5 10.5S42.5 39.8 42.5 34V21"
        stroke="#D8C57E"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M25.5 19.5h-4M42.5 19.5h-4"
        stroke="#D8C57E"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M32 38.5c0-4.6 2.6-8.4 6.8-10.2-1.6 4.2-3.6 7-6.8 10.2Zm0 0c0-4.6-2.6-8.4-6.8-10.2 1.6 4.2 3.6 7 6.8 10.2Z"
        fill="#6E9456"
      />
    </svg>
  )
}
