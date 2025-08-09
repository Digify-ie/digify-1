import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Server, 
  Laptop, 
  Shield, 
  Clock, 
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  HeadphonesIcon
} from "lucide-react";

import Hero from "../components/home/Hero";
import ServicesOverview from "../components/home/ServicesOverview";
import PackageCards from "../components/home/PackageCards";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TestimonialsSection from "../components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <ServicesOverview />
      <PackageCards />
      <WhyChooseUs />
      <TestimonialsSection />
      
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of Irish businesses who trust Digify.ie for their digital needs.
              Get online today with our professional services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Domains")}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Search Domains
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}