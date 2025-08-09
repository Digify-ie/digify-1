import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Database, Lock, Wind, Cpu, Mail } from "lucide-react";

export default function HostingFeatures() {
  const features = [
    { icon: Shield, title: "99.9% Uptime Guarantee", description: "Our reliable servers ensure your site is always available." },
    { icon: Database, title: "SSD Storage", description: "Experience lightning-fast speeds with solid-state drive storage." },
    { icon: Lock, title: "Free SSL Certificate", description: "Secure your website and build visitor trust with a free SSL." },
    { icon: Wind, title: "cPanel Control Panel", description: "Easily manage your hosting with the industry-leading cPanel." },
    { icon: Cpu, title: "Daily Backups", description: "Peace of mind with automated daily backups of your entire site." },
    { icon: Mail, title: "Professional Email", description: "Create professional email addresses with your domain name." }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features Included in All Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We pack our hosting plans with premium features to ensure you have everything you need to succeed.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}