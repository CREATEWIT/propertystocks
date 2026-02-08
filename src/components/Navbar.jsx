import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-primary' : 'text-slate-700 hover:text-primary'}`
  return (
    <header className="border-b bg-white sticky top-0 z-20">
      <div className="container-xl flex items-center justify-between h-16">
        <Link to="/" className="font-bold text-xl">Commission<span className="text-primary">.com</span></Link>
        <nav className="hidden md:flex gap-1">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/properties" className={linkClass}>Properties</NavLink>
          <NavLink to="/how-it-works" className={linkClass}>How It Works</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
