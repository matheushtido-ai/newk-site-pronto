import React from "react";
import { Award, Users, Clock, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&h=600"
                alt="Expert craftsman at work"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Overlay card */}
              <div className="absolute -bottom-8 -right-8 bg-amber-600 text-white p-8 rounded-xl shadow-xl">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-amber-100 font-medium">Years of Expert</div>
                <div className="text-amber-100 font-medium">Craftsmanship</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6">
            <div className="max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Dream + Design + Build Together
              </h2>
              
              <h3 className="text-2xl font-semibold text-amber-600 mb-6">
                Turning Your Vision Into Reality With Expert Craftsmanship
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At NEWK LLC, we take pride in over 15 years of experience transforming houses into dream homes. 
                As a trusted carpentry business serving Naugatuck and surrounding Connecticut areas, we're committed 
                to delivering exceptional craftsmanship, attention to detail, and a personalized approach for every project.
              </p>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Specializing in finish carpentry, custom woodwork, and precision installations, our full-service 
                approach is designed to meet your highest expectations—because your home deserves nothing less than the best.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Licensed & Insured</div>
                    <div className="text-sm text-gray-600">Fully certified</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">100+ Projects</div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">On-Time Delivery</div>
                    <div className="text-sm text-gray-600">Guaranteed</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Local Experts</div>
                    <div className="text-sm text-gray-600">Naugatuck, CT</div>
                  </div>
                </div>
              </div>

              <a
                href="#portfolio"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;