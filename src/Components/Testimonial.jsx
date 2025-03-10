import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    review: "Working with [Your Name] was a fantastic experience! He is a highly skilled developer who delivered beyond expectations.",
    rating: 5,
    image: "https://i.postimg.cc/W42LMQRr/IMG-2828.avif",
  },
  {
    name: "Sarah Smith",
    role: "Project Manager, WebSolutions",
    review: "An excellent web developer with great attention to detail. The project was delivered on time and met all requirements.",
    rating: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQiUvtYCuHnxrQ9iJVqomIDZ-QUVdSUwyKgQ&s",
  },
  {
    name: "David Johnson",
    role: "Freelance Client",
    review: "Highly recommended! The website was built with clean code, amazing responsiveness, and excellent UI/UX.",
    rating: 5,
    image: "https://st2.depositphotos.com/2069447/44103/i/450/depositphotos_441038966-stock-photo-closeup-portrait-cute-little-girl.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-8 text-teal-400">What Clients Say</h2>

        <div className="relative flex flex-col items-center">
          {/* Testimonial Card */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full md:w-3/4 lg:w-1/2">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="text-lg italic text-gray-300">
              "{testimonials[currentIndex].review}"
            </p>
            <div className="mt-4 flex justify-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-yellow-400 ${index < testimonials[currentIndex].rating ? "opacity-100" : "opacity-30"}`}
                />
              ))}
            </div>
            <h4 className="mt-4 text-xl font-semibold">{testimonials[currentIndex].name}</h4>
            <p className="text-gray-400">{testimonials[currentIndex].role}</p>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-6 flex justify-between w-full md:w-1/2 lg:w-1/3">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-full transition transform hover:scale-105"
            >
              ◀
            </button>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-full transition transform hover:scale-105"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
