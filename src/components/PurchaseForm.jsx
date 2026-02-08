import { useState } from 'react'

export default function PurchaseForm({ remaining, pricePerPercent, onPurchase }) {
  const [name, setName] = useState('')
  const [percent, setPercent] = useState('')
  const max = Math.max(0, remaining)
  const total = (Number(percent) || 0) * pricePerPercent

  const submit = (e) => {
    e.preventDefault()
    if (!name || !percent) return
    onPurchase(name.trim(), Number(percent))
    setPercent('')
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <label className="block text-sm font-medium mb-1">Buyer Name</label>
        <input value={name} onChange={e => setName(e.target.value)} required className="w-full rounded-md border px-3 py-2" placeholder="Your name" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Buy Percent</label>
        <input type="number" min={0.01} step={0.01} max={max} value={percent} onChange={e => setPercent(e.target.value)} required className="w-full rounded-md border px-3 py-2" placeholder={`Max ${max}%`} />
        <p className="text-xs text-slate-500 mt-1">Remaining: {max.toFixed(2)}% • Price per 1%: ₹{pricePerPercent.toLocaleString('en-IN')} • Total: ₹{total.toLocaleString('en-IN')}</p>
      </div>
      <button className="btn-primary w-full" disabled={max <= 0}>Purchase Fraction</button>
    </form>
  )
}
