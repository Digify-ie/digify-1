import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah O'Connor",
      company: "O'Connor Craft Bakery",
      location: "Dublin",
      rating: 5,
      text: "Digify.ie helped us get online quickly with a beautiful website. The e-commerce features have boosted our online sales significantly. Their support team is always helpful and responds quickly."
    },
    {
      name: "Michael Murphy", 
      company: "Murphy & Associates Law",
      location: "Cork",
      rating: 5,
      text: "Professional service from start to finish. They understood our legal practice needs and delivered exactly what we wanted. The hosting is reliable and the site loads incredibly fast."
    },
    {
      name: "Emma Kelly",
      company: "Kelly's Garden Centre", 
      location: "Galway",
      rating: 5,
      text: "The team at Digify.ie made setting up our online store so easy. We can now take orders 24/7 and our customers love the mobile-friendly design. Highly recommend their services."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Irish businesses 
            are saying about their experience with Digify.ie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Client Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">Trusted by businesses across Ireland</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-200 px-6 py-3 rounded-lg text-gray-600 font-medium">Dublin Chamber</div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg text-gray-600 font-medium">Cork Business</div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg text-gray-600 font-medium">Galway Enterprise</div>
            <div className="bg-gray-200 px-6 py-3 rounded-lg text-gray-600 font-medium">SME Ireland</div>
          </div>
        </div>
      </div>
    </section>
  );
}