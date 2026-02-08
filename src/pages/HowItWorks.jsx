export default function HowItWorks() {
  const steps = [
    { title: 'Browse', desc: 'Explore vetted properties and review valuation, location and images.' },
    { title: 'Buy Fraction', desc: 'Pick a percentage to own. Price is proportional to the fraction you buy.' },
    { title: 'Track Ownership', desc: 'Your ownership table updates instantly, all on the frontend.' },
  ]
  return (
    <div className="container-xl py-10 space-y-8">
      <div>
        <h1 className="text-2xl font-bold">How Fractional Ownership Works</h1>
        <p className="text-slate-600 mt-2">This demo simulates a fractional real-estate platform using only React state. No backend, no wallets.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={i} className="card">
            <div className="card-body">
              <div className="text-primary font-semibold">Step {i + 1}</div>
              <div className="mt-1 font-medium">{s.title}</div>
              <div className="text-slate-600 text-sm mt-1">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold">Rules</h2>
        <ul className="list-disc pl-6">
          <li>Ownership cannot exceed 100% for any property.</li>
          <li>Multiple purchases by the same person are merged.</li>
          <li>All state resets on page refresh (no persistence).</li>
        </ul>
      </div>
    </div>
  )
}
