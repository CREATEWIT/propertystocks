export default function Contact() {
  return (
    <div className="container-xl py-10">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-slate-600 mt-2">This is a demo project. For queries, open an issue in the repository or contact the author.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="card"><div className="card-body">
          <div className="font-medium">General</div>
          <div className="text-sm text-slate-600">info@commission.demo</div>
        </div></div>
        <div className="card"><div className="card-body">
          <div className="font-medium">Support</div>
          <div className="text-sm text-slate-600">support@commission.demo</div>
        </div></div>
      </div>
    </div>
  )
}
