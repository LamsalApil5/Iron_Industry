import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

type Project = {
  title: string
  description: string
  imageUrl: string
  details: string
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      title: "Custom Outdoor Grill",
      description: "A large custom-built outdoor grill with side burners and storage.",
      imageUrl: "/placeholder.svg?height=300&width=400&text=Custom Outdoor Grill",
      details: "This custom outdoor grill was designed for a client who loves to entertain. It features a large grilling surface, side burners, and ample storage space. The stainless steel construction ensures durability and easy maintenance.",
    },
    {
      title: "Ornamental Gate",
      description: "Decorative iron gate for a residential property entrance.",
      imageUrl: "/placeholder.svg?height=300&width=400&text=Ornamental Gate",
      details: "This ornamental gate was crafted for a high-end residential property. The intricate design incorporates both traditional and modern elements, creating a stunning entrance that enhances the property's curb appeal.",
    },
    {
      title: "Industrial Staircase",
      description: "Heavy-duty staircase with railings for a manufacturing facility.",
      imageUrl: "/placeholder.svg?height=300&width=400&text=Industrial Staircase",
      details: "This industrial staircase was designed and built for a large manufacturing facility. The focus was on durability and safety, with non-slip treads and sturdy railings. The design also complies with all relevant safety regulations.",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-screen bg-gray-900 text-white flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">Our Portfolio</h1>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
            Explore our diverse range of welding projects, showcasing our expertise and craftsmanship.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="min-h-screen bg-white flex items-center py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="text-orange-500 hover:text-orange-600 font-semibold inline-flex items-center">
                    View Details
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="text-gray-600 mb-4">{selectedProject.details}</p>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio
