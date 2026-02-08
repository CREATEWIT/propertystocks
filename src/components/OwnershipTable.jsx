export default function OwnershipTable({ ownership = [] }) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-slate-500">Owner</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-slate-500">Ownership</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {ownership.map((o, idx) => (
            <tr key={idx}>
              <td className="px-4 py-2 text-sm">{o.owner}</td>
              <td className="px-4 py-2 text-sm">{Number(o.percent).toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
