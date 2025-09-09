import React, { useState } from "react";
import { portfolioProjects } from "../data/mockData";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Kitchen", "Stairs", "Built-ins", "Outdoor", "Doors", "Cabinetry"];

  const filteredProjects = filter === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Craftsmanship Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of exceptional carpentry projects across Connecticut. 
            Each project showcases our commitment to quality, precision, and timeless design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-amber-600 text-white shadow-lg transform scale-105"
                  : "bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-amber-600 font-medium">
                    📍 {project.location}
                  </span>
                  <button className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Let's Create Your Next Masterpiece
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to see your vision come to life? Contact us today for a free consultation 
              and let's discuss how we can transform your space with our expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="tel:203-560-5585"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-amber-600 hover:text-amber-600 transition-all duration-300"
              >
                Call (203) 560-5585
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;