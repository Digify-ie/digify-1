import React from "react";
import { Shield, Headphones, MapPin, Users } from "lucide-react";

import CoreValues from "../components/whydigify/CoreValues";
import Infrastructure from "../components/whydigify/Infrastructure";
import OurStory from "../components/about/OurStory";
import OurMission from "../components/about/OurMission";
import TeamSection from "../components/about/TeamSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function WhyDigify() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Shield className="w-16 h-16 text-white" />
              <Users className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Digify.ie?
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We're more than a service provider; we're your dedicated digital partner. 
              Discover our story, our mission, and why Irish businesses trust us for their online success.
            </p>
          </div>
        </div>
      </section>

      <OurStory />
      <CoreValues />
      <OurMission />
      <Infrastructure />
      <TeamSection />
      <TestimonialsSection />
    </div>
  );
}