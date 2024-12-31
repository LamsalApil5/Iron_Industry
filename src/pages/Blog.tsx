const Blog = () => {
    const blogPosts = [
      {
        title: "5 Tips for Maintaining Your Custom Grill",
        date: "June 1, 2023",
        excerpt: "Learn how to keep your custom grill in top condition with these easy maintenance tips.",
      },
      {
        title: "The Benefits of Custom Welded Gates",
        date: "May 15, 2023",
        excerpt: "Discover why custom welded gates are the perfect choice for both security and aesthetics.",
      },
      {
        title: "Welding Techniques: MIG vs TIG",
        date: "May 1, 2023",
        excerpt: "Understand the differences between MIG and TIG welding and when to use each technique.",
      },
      // Add more blog posts as needed
    ]
  
    return (
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{post.date}</p>
              <p className="mb-4">{post.excerpt}</p>
              <a href="#" className="text-blue-500 hover:text-blue-600">Read more</a>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Blog
  
  