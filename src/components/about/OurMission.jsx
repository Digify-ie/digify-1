import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

export default function OurMission() {
  const missions = [
    { icon: Target, title: "Our Mission", description: "To empower Irish businesses to thrive in the digital world by providing simple, reliable, and powerful online solutions, backed by expert, local support." },
    { icon: Eye, title: "Our Vision", description: "To be Ireland's most trusted and customer-centric digital services provider, known for our commitment to innovation, quality, and the success of our clients." },
    { icon: Heart, title: "Our Values", description: "Customer Success, Integrity, Simplicity, Innovation, and Community. These values guide our decisions and define our culture." }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <Card key={index} className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <mission.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{mission.title}</h3>
                <p className="text-gray-600">{mission.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}