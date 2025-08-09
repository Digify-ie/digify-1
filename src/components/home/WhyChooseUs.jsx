import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, MapPin, Headphones, Zap, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "99.9% Uptime Guarantee",
      description: "Your website stays online when it matters most. Our reliable infrastructure ensures maximum availability."
    },
    {
      icon: MapPin,
      title: "Irish-Based Support",
      description: "Local expertise you can trust. Our Dublin-based team understands Irish business needs."
    },
    {
      icon: Clock,
      title: "24/7 Support Available",
      description: "Round-the-clock assistance when you need it. Technical support that actually helps."
    },
    {
      icon: Zap,
      title: "Lightning-Fast SSD Hosting",
      description: "Blazing-fast performance with SSD storage. Your visitors will thank you for the speed."
    },
    {
      icon: CheckCircle,
      title: "Free SSL & Security",
      description: "Industry-standard security included. Keep your website and customer data protected."
    },
    {
      icon: Headphones,
      title: "Personal Account Manager",
      description: "Dedicated support for Enterprise clients. Get the personalized attention you deserve."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Digify.ie?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a hosting provider. We're your digital partner, 
            committed to your online success with Irish values and world-class service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Websites Hosted</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}