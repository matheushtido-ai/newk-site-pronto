import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50 rounded-full opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Crafting{" "}
              <span className="italic text-amber-600 relative">
                Luxury
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-200 rounded-full"></div>
              </span>{" "}
              Homes with{" "}
              <span className="italic text-amber-600 relative">
                Precision
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-200 rounded-full"></div>
              </span>{" "}
              and{" "}
              <span className="italic text-amber-600 relative">
                Passion
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-amber-200 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Expert finish carpentry and custom woodwork in Naugatuck, CT. We transform your vision into 
              reality with unmatched craftsmanship and attention to detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white text-lg font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-lg hover:border-amber-600 hover:text-amber-600 transition-all duration-300"
              >
                View Our Work
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                Licensed & Insured
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                15+ Years Experience
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                Naugatuck, CT Area
              </div>
            </div>
          </div>

          {/* Right Content - Image placeholder */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&h=600"
                  alt="Professional carpentry work"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-amber-600">15+</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;