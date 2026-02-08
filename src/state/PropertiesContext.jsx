import { createContext, useContext, useMemo, useState } from 'react'
import { propertiesSeed } from '../data/properties'

const PropertiesContext = createContext()

export function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState(() => {
    // deep clone seed to allow mutations without side-effects
    return propertiesSeed.map(p => ({ ...p, ownership: [...p.ownership] }))
  })

  const getById = (id) => properties.find(p => p.id === id)

  const totalOwnedPercent = (p) => p.ownership.reduce((sum, o) => sum + Number(o.percent), 0)
  const remainingPercent = (p) => Math.max(0, 100 - totalOwnedPercent(p))
  const pricePerPercent = (p) => p.totalValue / 100

  const purchaseFraction = (propertyId, buyerName, percent) => {
    setProperties(prev => prev.map(p => {
      if (p.id !== propertyId) return p
      const desired = Number(percent)
      if (!buyerName || desired <= 0) return p
      const remaining = 100 - p.ownership.reduce((s, o) => s + Number(o.percent), 0)
      const toBuy = Math.min(desired, remaining)
      if (toBuy <= 0) return p
      const nextOwnership = [...p.ownership]
      const existing = nextOwnership.find(o => o.owner.toLowerCase() === buyerName.toLowerCase())
      if (existing) existing.percent = Number(existing.percent) + toBuy
      else nextOwnership.push({ owner: buyerName, percent: toBuy })
      return { ...p, ownership: nextOwnership }
    }))
  }

  const value = useMemo(() => ({
    properties,
    getById,
    purchaseFraction,
    totalOwnedPercent,
    remainingPercent,
    pricePerPercent,
  }), [properties])

  return (
    <PropertiesContext.Provider value={value}>{children}</PropertiesContext.Provider>
  )
}

export const useProperties = () => useContext(PropertiesContext)
