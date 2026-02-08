import { useState } from 'react'

export default function Carousel({ items = [] }) {
  const [i, setI] = useState(0)
  const prev = () => setI((i - 1 + items.length) % items.length)
  const next = () => setI((i + 1) % items.length)
  if (!items.length) return null
  const item = items[i]
  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white p-4">
        <div className="text-lg font-semibold">{item.name}</div>
        <div className="text-sm opacity-90">{item.location}</div>
      </div>
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 btn-primary px-2 py-1">‹</button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary px-2 py-1">›</button>
    </div>
  )
}
