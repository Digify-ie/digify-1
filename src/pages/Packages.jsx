import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Laptop } from "lucide-react";

import PackageComparison from "../components/packages/PackageComparison";
import Process from "../components/packages/Process";
import PackageFAQ from "../components/packages/PackageFAQ";

export default function Packages() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Laptop className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Website Packages
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Stunning, responsive, and SEO-optimized websites designed to convert visitors into customers. 
              Let us build your online presence.
            </p>
             <Link to={createPageUrl("Contact")}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <PackageComparison />
      <Process />
      <PackageFAQ />
    </div>
  );
}