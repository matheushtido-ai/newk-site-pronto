import React, { useState } from "react";
import { services } from "../data/mockData";
import { ArrowRight, Check } from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Crafting Homes of All Styles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <strong>Colonial Charm | Modern Elegance | Traditional Craftsmanship</strong>
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            From historic homes to contemporary designs, we specialize in transforming every type of 
            residence into a masterpiece of function and beauty.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Service Display */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="order-2 lg:order-1">
                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {services[activeService].title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {services[activeService].description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-200"
                >
                  Get Quote for This Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Service Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                  activeService === index
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="font-semibold text-sm mb-1">
                  {service.title.split(' ')[0]}
                </div>
                <div className="text-xs opacity-90">
                  {service.title.split(' ').slice(1).join(' ')}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-12 rounded-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that exceeds your expectations. 
              Every project is unique, and we're here to bring your vision to life.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;