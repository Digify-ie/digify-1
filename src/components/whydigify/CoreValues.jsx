import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, MapPin, Headphones, Zap, Users } from "lucide-react";

export default function CoreValues() {
  const values = [
    { icon: Shield, title: "Rock-Solid Reliability", description: "With a 99.9% uptime guarantee, your online presence is secure and consistently available to your customers." },
    { icon: MapPin, title: "Proudly Irish", description: "Our Dublin-based team offers local, expert support. We understand the unique needs of Irish businesses." },
    { icon: Headphones, title: "Customer-Centric Support", description: "Your success is our priority. Our 24/7 support team is always ready to provide friendly, effective assistance." },
    { icon: Zap, title: "Peak Performance", description: "We use cutting-edge SSD technology and optimized servers to ensure your website loads at lightning speed." },
    { icon: Users, title: "Partners in Growth", description: "We build long-term relationships, offering scalable solutions that grow with your business from startup to enterprise." },
    { icon: Clock, title: "Transparent & Honest", description: "No hidden fees or confusing jargon. We believe in clear, straightforward pricing and communication." }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Promises to You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These are the principles that guide everything we do.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}