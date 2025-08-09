import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Server, Laptop, ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      icon: Globe,
      title: "Domain Registration",
      description: "Find and register the perfect domain for your business. Choose from .ie, .com, .co.uk and many more extensions.",
      features: ["Instant registration", "Free WHOIS privacy", "Easy management", "Competitive pricing"],
      link: createPageUrl("Domains"),
      color: "blue"
    },
    {
      icon: Server,
      title: "SSD Web Hosting",
      description: "Lightning-fast SSD hosting with 99.9% uptime guarantee. Perfect for businesses of all sizes.",
      features: ["SSD storage", "Free SSL certificates", "Daily backups", "cPanel control"],
      link: createPageUrl("Hosting"),
      color: "green"
    },
    {
      icon: Laptop,
      title: "Website Packages",
      description: "Professional websites and e-commerce stores designed to help your business grow online.",
      features: ["Mobile responsive", "SEO optimized", "E-commerce ready", "Custom design"],
      link: createPageUrl("Packages"),
      color: "purple"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      button: "bg-blue-600 hover:bg-blue-700"
    },
    green: {
      bg: "bg-green-100", 
      text: "text-green-600",
      button: "bg-green-600 hover:bg-green-700"
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600", 
      button: "bg-purple-600 hover:bg-purple-700"
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From domain registration to professional websites, we provide everything 
            you need to establish and grow your online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-gray-200">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${colorClasses[service.color].bg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${colorClasses[service.color].text}`} />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${colorClasses[service.color].text.replace('text-', 'bg-')}`}></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={service.link}>
                  <Button className={`w-full ${colorClasses[service.color].button} group-hover:scale-105 transition-transform duration-300`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}