import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, BookOpen, PenTool, Home } from 'lucide-react'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const path = location.pathname

  const links = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/knowledge', label: 'Body of Knowledge', icon: BookOpen },
    { to: '/workbook', label: 'Practice Workbook', icon: PenTool },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#d8d0c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-[#6b3a5b] font-serif text-lg font-semibold tracking-wide">
            <span className="text-xl">~</span> Vibration Mastery
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  path === l.to
                    ? 'bg-[#6b3a5b] text-white'
                    : 'text-[#5a5248] hover:bg-[#6b3a5b]/10 hover:text-[#6b3a5b]'
                }`}
              >
                <l.icon size={16} />
                {l.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-[#5a5248] hover:text-[#6b3a5b]"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(prev => !prev)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-[#d8d0c8] bg-[#faf7f2]/95 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  path === l.to
                    ? 'bg-[#6b3a5b] text-white'
                    : 'text-[#5a5248] hover:bg-[#6b3a5b]/10 hover:text-[#6b3a5b]'
                }`}
              >
                <l.icon size={18} />
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
