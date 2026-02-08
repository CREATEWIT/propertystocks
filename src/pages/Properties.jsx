import { useProperties } from '../state/PropertiesContext'
import PropertyCard from '../components/PropertyCard'

export default function Properties() {
  const { properties } = useProperties()
  return (
    <div className="container-xl py-8">
      <h1 className="text-2xl font-semibold mb-6">Available Properties</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map(p => (<PropertyCard key={p.id} p={p} />))}
      </div>
    </div>
  )
}
