import React from "react";

export default function OurStory() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in Dublin in 2018, Digify.ie was born from a simple idea: to make professional digital services accessible and affordable for Irish businesses. We saw that many small businesses were struggling to get online, facing either complex, overpriced solutions or unreliable, unsupported services.
            </p>
            <p className="text-gray-600 mb-6">
              We set out to change that. Starting with domain registration and hosting, we built a reputation for reliable service and exceptional, friendly support. As our clients grew, so did we, expanding our services to include professional website design and e-commerce solutions.
            </p>
            <p className="text-gray-600">
              Today, we're proud to be a trusted partner for thousands of businesses across Ireland, from local startups to established enterprises. Our commitment to Irish business and our passion for technology remains at the heart of everything we do.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Team working together" className="rounded-lg shadow-xl"/>
          </div>
        </div>
      </div>
    </section>
  );
}