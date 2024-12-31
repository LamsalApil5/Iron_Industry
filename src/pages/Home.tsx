import { Link } from 'react-router-dom'
import { ArrowRight, Flame, Shield, Wrench } from 'lucide-react'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-screen bg-gray-900 text-white flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Crafting Excellence in Metal</h1>
            <p className="text-xl mb-8">Custom grills, gates, and welding solutions for your home and business</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/portfolio" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-6 rounded-full transition duration-300">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen bg-gray-100 flex items-center py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
              <div className="bg-orange-500 rounded-full p-3 inline-block mb-4">
                <Flame className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-600">Our skilled welders bring years of experience to every project.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
              <div className="bg-orange-500 rounded-full p-3 inline-block mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Materials</h3>
              <p className="text-gray-600">We use only the finest materials to ensure durability and longevity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
              <div className="bg-orange-500 rounded-full p-3 inline-block mb-4">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored designs to meet your specific needs and preferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="min-h-screen bg-white flex items-center py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
                <img src={`/placeholder.svg?height=300&width=400&text=Project ${index}`} alt={`Project ${index}`} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Custom Grill Project {index}</h3>
                  <p className="text-gray-600 mb-4">A beautifully crafted custom grill for outdoor entertaining.</p>
                  <Link to="/portfolio" className="text-orange-500 hover:text-orange-600 font-semibold">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-300 text-black flex items-center py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation and quote.</p>
          <Link to="/contact" className="bg-white hover:bg-gray-100 text-orange-500 font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      <Testimonials/>
    </div>
  )
}

export default Home

