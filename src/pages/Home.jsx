import { Link } from 'react-router-dom'
import { useProperties } from '../state/PropertiesContext'
import Carousel from '../components/Carousel'
import PropertyCard from '../components/PropertyCard'

export default function Home() {
  const { properties } = useProperties()
  return (
    <div>
      <section className="bg-gradient-to-b from-sky-50 to-white border-b">
        <div className="container-xl py-16 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Invest in real estate, one fraction at a time</h1>
            <p className="mt-3 text-slate-600">Commission Fractions lets you buy and trade fractional ownership in curated properties across India.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/properties" className="btn-primary">Browse Properties</Link>
              <Link to="/how-it-works" className="px-4 py-2 rounded-md border">How it works</Link>
            </div>
          </div>
          <Carousel items={properties} />
        </div>
      </section>
      <section className="container-xl py-10 space-y-4">
        <h2 className="text-xl font-semibold">Featured Properties</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map(p => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>
    </div>
  )
}
