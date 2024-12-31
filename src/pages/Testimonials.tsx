import { useEffect, useRef, useState } from "react";
import { ArrowForward, ArrowBack } from "@mui/icons-material";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      company: "Backyard BBQ Co.",
      quote: "The custom grill they built for our restaurant is amazing. It's durable, efficient, and looks great!",
    },
    {
      name: "Jane Smith",
      company: "Homeowner",
      quote: "I love the ornamental gate they created for my home. It's both beautiful and secure.",
    },
    {
      name: "Mike Johnson",
      company: "Industrial Solutions Inc.",
      quote: "Their industrial welding work is top-notch. They completed our project on time and within budget.",
    },
    {
      name: "Anna Lee",
      company: "Tech Solutions",
      quote: "Their custom-made metalwork elevated our office space, giving it a modern yet industrial feel.",
    },
    {
      name: "Paul Walker",
      company: "Automotive Parts Ltd.",
      quote: "They delivered exactly what we needed for our shop, and the quality was outstanding.",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Keeps track of the current position
  const testimonialsToShow = 3; // Show 3 testimonials at once
  const totalTestimonials = testimonials.length;

  const scrollToIndex = (index: number) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = (scrollContainer.offsetWidth / testimonialsToShow) * index;
      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(totalTestimonials / testimonialsToShow));
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(totalTestimonials / testimonialsToShow)) % Math.ceil(totalTestimonials / testimonialsToShow));
  };

  useEffect(() => {
    scrollToIndex(currentIndex); // Initially scroll to the first testimonial
  }, [currentIndex]);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Customer Testimonials</h1>

      <div className="relative flex justify-center items-center">
        {/* Previous Arrow */}
        <button
          onClick={prevTestimonials}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 p-2 bg-none text-black  shadow-lg"
        >
          <ArrowBack />
        </button>

        {/* Testimonials Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden py-4 gap-8 cursor-grab px-3"
        >
          {/* Display all testimonials but scroll to the required section */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 w-72 flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <h6 className="text-lg font-semibold">{testimonial.name}</h6>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={nextTestimonials}
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 p-2 bg-transparent text-black shadow-lg"
        >
          <ArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
