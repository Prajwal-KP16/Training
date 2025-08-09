import { NavLink } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Relationship Compass</h1>
          <nav className="flex flex-wrap gap-2 text-sm">
            <NavLink to="/" end className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}>Home</NavLink>
            <NavLink to="/principles" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}>Principles</NavLink>
            <NavLink to="/bare-minimum" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}>Bare Minimum</NavLink>
            <NavLink to="/situations" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}>Situations</NavLink>
            <NavLink to="/resources" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}>Resources</NavLink>
            <NavLink to="/thoughts" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}>Thoughts</NavLink>
            <NavLink to="/qna" className={({ isActive }) => `px-3 py-1.5 rounded-md ${isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-100'}`}>Q&A</NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
      <footer className="border-t py-6 text-center text-sm text-gray-500">Made with care • Relationship Compass</footer>
    </div>
  )
}

