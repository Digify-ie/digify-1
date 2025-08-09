import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Shield, Clock, CheckCircle, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-600 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Special .ie Domain Offer Banner */}
        <div className="text-center mb-8">
          <Badge className="bg-green-600 hover:bg-green-600 text-white px-4 py-2 text-lg animate-pulse">
            <Star className="w-4 h-4 mr-2" />
            Special: .ie Domains Only €2.99/year* - Limited Time!
          </Badge>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
              <Globe className="w-4 h-4 mr-2" />
              Trusted Irish Digital Services
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Digital 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Success</span> Starts Here
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional domain registration, lightning-fast SSD hosting, and stunning websites. 
              Everything you need to succeed online, backed by Irish expertise and support.
            </p>

            {/* .ie Domain Promo Highlight */}
            <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-300 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-green-800">.ie Domains - 85% OFF!</p>
                  <p className="text-sm text-green-700">
                    Just €2.99/year* (was €19.99) - Get your Irish identity online
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span className="font-medium">Irish Based</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to={createPageUrl("Domains")}>
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg">
                  Get .ie Domain €2.99*
                </Button>
              </Link>
              <Link to={createPageUrl("Packages")}>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-2">
                  View Packages
                </Button>
              </Link>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              * .ie domain promotional price valid for first year only
            </p>
          </div>

          {/* Right Content - Stats/Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">.ie Domains €2.99*</h3>
              <p className="text-gray-600">Get your Irish domain with 85% off first year pricing. Perfect for Irish businesses.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">SSD Hosting</h3>
              <p className="text-gray-600">Lightning-fast SSD servers with 99.9% uptime guarantee and free SSL.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Irish-based expert support team ready to help you succeed online.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Website Builder</h3>
              <p className="text-gray-600">Professional websites and e-commerce stores built for your success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}