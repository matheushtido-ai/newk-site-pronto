import React from "react";
import { processSteps } from "../data/mockData";
import { Palette, FileText, Hammer, CheckCircle, MessageSquare, Home } from "lucide-react";

const Process = () => {
  const icons = [Palette, FileText, Hammer, CheckCircle, MessageSquare, Home];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-amber-600">NEWK</span> Means Peace of Mind
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every Detail is a Testament to Timeless Design and Precision. Our proven process ensures 
            exceptional results from concept to completion.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={step.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start mb-6">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="text-3xl font-bold text-amber-600">{step.id}.</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Where Passion + Partnership Unite
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Transforming Homes with Craftsmanship, Transparency, and Unmatched Expertise. 
              Experience the difference that comes with working with true craftsmen who care about every detail.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;