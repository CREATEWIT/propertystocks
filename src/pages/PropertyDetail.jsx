import { useParams } from 'react-router-dom'
import { useProperties } from '../state/PropertiesContext'
import OwnershipTable from '../components/OwnershipTable'
import PurchaseForm from '../components/PurchaseForm'

export default function PropertyDetail() {
  const { id } = useParams()
  const { getById, purchaseFraction, remainingPercent, pricePerPercent, totalOwnedPercent } = useProperties()
  const p = getById(id)
  if (!p) return <div className="container-xl py-8">Property not found.</div>

  const remaining = remainingPercent(p)
  const pricePer1 = pricePerPercent(p)
  const owned = totalOwnedPercent(p)

  return (
    <div className="container-xl py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="overflow-hidden rounded-xl">
            <img src={p.image} alt={p.name} className="w-full h-72 object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {p.images?.map((src, i) => (
              <img key={i} src={src} alt={`img-${i}`} className="h-28 w-full object-cover rounded-lg" />
            ))}
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">{p.name}</h1>
            <p className="text-slate-600">{p.location}</p>
            <p className="mt-2 text-slate-700">{p.description}</p>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="card">
            <div className="card-body space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-slate-500 text-sm">Valuation</div>
                <div className="font-semibold">₹{p.totalValue.toLocaleString('en-IN')}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-slate-500 text-sm">Owned</div>
                <div className="font-medium">{owned.toFixed(2)}%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-slate-500 text-sm">Available</div>
                <div className="font-medium">{remaining.toFixed(2)}%</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-slate-500 text-sm">Price / 1%</div>
                <div className="font-medium">₹{pricePer1.toLocaleString('en-IN')}</div>
              </div>
              <PurchaseForm
                remaining={remaining}
                pricePerPercent={pricePer1}
                onPurchase={(name, percent) => purchaseFraction(p.id, name, percent)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="font-semibold">Ownership Breakdown</h2>
            <OwnershipTable ownership={p.ownership} />
          </div>
        </aside>
      </div>
    </div>
  )
}
