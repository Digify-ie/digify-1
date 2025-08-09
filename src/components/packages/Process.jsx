import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, PenTool, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    { icon: MessageSquare, title: "1. Consultation", description: "We start with a free consultation to understand your business goals and requirements." },
    { icon: PenTool, title: "2. Design & Development", description: "Our expert team designs and builds a stunning, responsive website tailored to your brand." },
    { icon: Rocket, title: "3. Launch & Support", description: "We launch your new website and provide ongoing support to ensure your online success." }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Simple 3-Step Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting your professional website is easy and hassle-free with our streamlined process.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}