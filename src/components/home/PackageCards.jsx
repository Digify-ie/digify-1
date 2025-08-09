import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

export default function PackageCards() {
  const packages = [
    {
      name: "Presence Package",
      monthlyPrice: 11.99,
      yearlyPrice: 99,
      popular: false,
      description: "Perfect for small businesses getting started online",
      features: [
        "5-page professional website",
        "Free domain & SSL certificate", 
        "Up to 5 email accounts",
        "Basic SEO & Google Analytics",
        "Online store (10 products)",
        "Priority support"
      ]
    },
    {
      name: "E-Commerce Package", 
      monthlyPrice: 19.99,
      yearlyPrice: 119,
      popular: true,
      description: "Ideal for businesses selling products online",
      features: [
        "All Presence features included",
        "Unlimited products",
        "Inventory tracking system",
        "Advanced e-commerce functions",
        "Payment gateway integration",
        "Enhanced SEO tools"
      ]
    },
    {
      name: "Enterprise Package",
      monthlyPrice: "Custom",
      yearlyPrice: "Quote",
      popular: false,
      description: "Tailored solutions for large businesses",
      features: [
        "Unlimited pages & products",
        "CRM/ERP/API integrations",
        "Custom SEO & analytics",
        "Dedicated account manager",
        "Priority support & training",
        "Custom development"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Website Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional website solutions designed to grow with your business. 
            All packages include hosting, security, and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? 'border-blue-500 border-2 shadow-xl scale-105' : 'border-gray-200'} transition-all duration-300 hover:shadow-lg`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1 text-sm">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {typeof pkg.monthlyPrice === 'number' ? `€${pkg.monthlyPrice}` : pkg.monthlyPrice}
                    </span>
                    {typeof pkg.monthlyPrice === 'number' && (
                      <span className="text-gray-500">/month</span>
                    )}
                  </div>
                  {typeof pkg.yearlyPrice === 'number' && (
                    <p className="text-sm text-gray-500 mt-1">
                      or €{pkg.yearlyPrice}/year (save €{(pkg.monthlyPrice * 12 - pkg.yearlyPrice).toFixed(0)})
                    </p>
                  )}
                </div>
                <p className="text-gray-600 mt-4">{pkg.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={createPageUrl("Contact")}>
                  <Button className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}>
                    {pkg.name === "Enterprise Package" ? "Get Custom Quote" : "Get Started"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need help choosing the right package? Our experts are here to help.
          </p>
          <Link to={createPageUrl("Contact")}>
            <Button variant="outline" size="lg">
              Talk to an Expert
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}