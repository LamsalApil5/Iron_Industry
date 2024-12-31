import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Flame } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center">
              <Flame className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">Welding Grill Co.</span>
            </Link>
            <p className="mt-4 text-sm">Crafting Durable and Elegant Welded Solutions</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-gray-300">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 Welding St, Metalville, ST 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@weldinggrill.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-pink-400 hover:text-red-700">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-black hover:text-gray-900">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Welding Grill Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
