import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'

interface NavItem {
  name: string
  href: string
  isActive?: boolean
}

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems: NavItem[] = [
    { name: 'Inicio', href: '/', isActive: location.pathname === '/' },
    { name: 'Idioma', href: '/idioma', isActive: location.pathname === '/idioma' },
    { name: 'Historia', href: '/historia', isActive: location.pathname === '/historia' },
    { name: 'Nuestros lugares', href: '/lugares', isActive: location.pathname === '/lugares' },
    { name: 'Artesanías', href: '/artesanias', isActive: location.pathname === '/artesanias' },
    { name: 'Nuestra gastronomía', href: '/gastronomia', isActive: location.pathname === '/gastronomia' },
    { name: 'Galería fotográfica', href: '/galeria', isActive: location.pathname === '/galeria' },
    { name: 'Blog Comunitario', href: '/blog', isActive: location.pathname === '/blog' },
  ]

  return (
    <div className="min-h-screen bg-[#f9f5f1] font-montserrat">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-b from-[#5e3b1e] via-[#6f4f2c] to-[#7e5c3d] text-white shadow-md backdrop-blur-sm">
        {/* Top Logo Bar */}
        <div className="px-4 py-6 flex items-center justify-between md:justify-center bg-gradient-to-r from-[#5e3b1e] to-[#4a3118] shadow-inner">
          <div className="flex items-center justify-center space-x-4">
            <span className="text-3xl font-bold tracking-wider drop-shadow-md text-[#f9f5f1] uppercase">
              Huehuetla
            </span>
            <div className="w-12 h-12 bg-[#d8cbb8] rounded-full flex items-center justify-center shadow-lg border-2 border-[#3f2a15]">
              <span className="text-xl">🌄</span>
            </div>
            <span className="text-3xl font-bold tracking-wider drop-shadow-md text-[#f9f5f1] uppercase">
              Puebla
            </span>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white focus:outline-none px-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-gradient-to-r from-[#7a5531] via-[#6e4a2a] to-[#5c3a1c] px-6 py-3 shadow-inner">
          {/* Desktop menu */}
          <ul className="hidden md:flex flex-wrap items-center justify-center space-x-1 max-w-7xl mx-auto">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`relative px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out
                    hover:bg-[#d8cbb8]/10 hover:shadow-lg
                    transform hover:scale-105 hover:-translate-y-0.5
                    ${item.isActive
                      ? 'bg-[#d8cbb8]/20 text-white shadow-lg scale-105 border border-white border-opacity-30'
                      : 'text-[#f3e8dc] hover:text-white'}`}
                >
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <ul className="md:hidden mt-3 space-y-2 px-4 pb-4 animate-fadeIn">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-center px-4 py-3 rounded-lg text-base transition-all font-semibold
                      ${item.isActive
                        ? 'bg-[#d8cbb8]/20 text-white shadow-md'
                        : 'text-[#f3e8dc] hover:bg-[#d8cbb8]/10 hover:text-white'}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>

        {/* Decorative border */}
        <div className="h-1 bg-gradient-to-r from-[#a38b70] via-[#bba88f] to-[#a38b70] shadow-sm"></div>
      </header>

      {/* Main Content */}
      <main className="relative">
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-black/5 to-transparent pointer-events-none"></div>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#4a3118] via-[#3e2814] to-[#4a3118] text-white shadow-2xl mt-16">
        <div className="container mx-auto px-4 py-10 text-center space-y-5">
          <h2 className="text-3xl font-bold">Huehuetla, Puebla</h2>
          <p className="text-[#e0d4c2] text-sm">🌍 Plataforma Cultural v3.0.0</p>
          <p className="text-[#dac7b0]">Diseñado con 💖 para nuestra comunidad</p>

          <h3 className="text-lg font-semibold pt-4">Síguenos en nuestras redes:</h3>
          <div className="flex justify-center gap-4">
            {[{ icon: '📘', label: 'Facebook' }, { icon: '📱', label: 'WhatsApp' }, { icon: '🎵', label: 'TikTok' }, { icon: '📺', label: 'YouTube' }].map((item, i) => (
              <Button
                key={i}
                variant="ghost"
                className="w-12 h-12 text-xl rounded-full bg-[#3e2a1a] hover:bg-[#6a4d32] transition-transform hover:scale-110 shadow-md"
                aria-label={`Ir a ${item.label}`}
              >
                {item.icon}
              </Button>
            ))}
          </div>

          <hr className="border-t border-[#7a5531] mt-6" />
          <p className="text-xs text-[#c6b09a]">© 2025 Municipio de Huehuetla. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}