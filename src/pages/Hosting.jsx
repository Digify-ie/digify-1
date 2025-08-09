import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Server, Shield, Clock, Zap } from "lucide-react";

import HostingPlans from "../components/hosting/HostingPlans";
import HostingFeatures from "../components/hosting/HostingFeatures";
import HostingFAQ from "../components/hosting/HostingFAQ";

export default function Hosting() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Server className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lightning-Fast SSD Web Hosting
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Reliable, secure, and high-performance hosting for your website. 
              Backed by our 99.9% uptime guarantee and 24/7 Irish support.
            </p>
            <Link to="#hosting-plans">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Hosting Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <HostingPlans />
      <HostingFeatures />
      <HostingFAQ />
    </div>
  );
}