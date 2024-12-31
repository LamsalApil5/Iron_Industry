import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Flame } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Flame className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">Welding Grill Co.</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Home</Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">About</Link>
              <Link to="/services" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Services</Link>
              <Link to="/portfolio" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Portfolio</Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Contact</Link>
              <Link to="/blog" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white">Blog</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">About</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Services</Link>
            <Link to="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Portfolio</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Contact</Link>
            <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Blog</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

