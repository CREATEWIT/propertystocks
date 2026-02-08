import { Link } from 'react-router-dom'

export default function PropertyCard({ p }) {
  const pricePerPercent = p.totalValue / 100
  const owned = p.ownership.reduce((s, o) => s + Number(o.percent), 0)
  const remaining = Math.max(0, 100 - owned)
  return (
    <div className="card overflow-hidden">
      <img src={p.image} alt={p.name} className="h-44 w-full object-cover" />
      <div className="card-body space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-sm text-slate-500">{p.location}</p>
          </div>
          <span className="badge">₹{p.totalValue.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex gap-2 text-sm">
          <span className="badge">Available: {remaining}%</span>
          <span className="badge">₹{pricePerPercent.toLocaleString('en-IN')}/1%</span>
        </div>
        <Link to={`/property/${p.id}`} className="btn-primary w-full mt-2">View Details</Link>
      </div>
    </div>
  )
}
