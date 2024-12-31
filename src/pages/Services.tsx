import { Flame, DoorOpenIcon as Gate, Rss, Factory, Wrench, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: "Custom Grills",
      description: "Tailor-made grills designed to your specifications and needs.",
      icon: Flame,
    },
    {
      title: "Gates and Fencing",
      description: "Secure and stylish gates and fences for residential and commercial properties.",
      icon: Gate,
    },
    {
      title: "Railings",
      description: "Durable and elegant railings for staircases, balconies, and more.",
      icon: Rss,
    },
    {
      title: "Industrial Welding",
      description: "Precision welding services for industrial applications and equipment.",
      icon: Factory,
    },
    {
      title: "Repairs and Maintenance",
      description: "Expert repair and maintenance services for all types of welded structures.",
      icon: Wrench,
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-screen bg-gray-900 text-white flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">Our Services</h1>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            From custom grills to industrial welding, we offer a wide range of welding services to meet your needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen bg-white flex items-center py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                <div className="bg-orange-500 rounded-full p-3 inline-block mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="h-screen bg-orange-500 text-white flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation and quote.</p>
          <a href="/contact" className="bg-white hover:bg-gray-100 text-orange-500 font-bold py-3 px-8 rounded-full inline-flex items-center transition duration-300">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Services

