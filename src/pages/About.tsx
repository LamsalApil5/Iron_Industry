import { Users, History, Target } from 'lucide-react'

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-screen bg-gray-900 text-white flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">About Welding Grill Co.</h1>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            We are passionate about crafting high-quality welding solutions for both residential and commercial clients. Our mission is to deliver durable, elegant, and custom-made welded products that exceed our customers' expectations.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="min-h-screen bg-white flex items-center py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2005, Welding Grill Co. has grown from a small workshop to a full-service welding business. With over 15 years of experience, we have completed hundreds of projects and built a reputation for excellence in craftsmanship and customer service.
              </p>
              <p className="text-gray-600">
                Our team of skilled welders and designers work tirelessly to bring your vision to life, whether it's a custom grill for your backyard or a large-scale industrial project.
              </p>
            </div>
            <div className="relative h-64 md:h-full">
              <img src="/placeholder.svg?height=400&width=600&text=Our Workshop" alt="Our Workshop" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="min-h-screen bg-gray-100 flex items-center py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
              <div className="bg-orange-500 rounded-full p-3 inline-block mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">We prioritize our clients' needs and strive to exceed their expectations in every project.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
              <div className="bg-orange-500 rounded-full p-3 inline-block mb-4">
                <History className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-600">Our commitment to excellence ensures that every weld is performed with precision and care.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300">
              <div className="bg-orange-500 rounded-full p-3 inline-block mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">We continuously improve our techniques and embrace new technologies to deliver the best results.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

