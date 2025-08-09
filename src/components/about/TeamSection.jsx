import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function TeamSection() {
  const team = [
    { name: "Aoife Murphy", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" },
    { name: "Liam O'Connell", role: "Head of Technology", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop" },
    { name: "Siobhan Kelly", role: "Head of Customer Success", image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop" },
    { name: "Cian Byrne", role: "Lead Web Developer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate experts dedicated to your success.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-none text-center">
              <CardContent className="p-0">
                <img src={member.image} alt={member.name} className="w-full h-48 md:h-64 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}