import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function DomainPricing() {
  const domainPricing = [
    { 
      extension: ".ie", 
      price: "€2.99", 
      originalPrice: "€19.99",
      description: "Ireland's official domain", 
      popular: true,
      promo: true,
      savings: "85% OFF"
    },
    { extension: ".com", price: "€12.99", description: "Most popular worldwide", popular: true },
    { extension: ".co.uk", price: "€14.99", description: "United Kingdom domain", popular: false },
    { extension: ".eu", price: "€9.99", description: "European Union domain", popular: false },
    { extension: ".org", price: "€15.99", description: "For organizations", popular: false },
    { extension: ".net", price: "€16.99", description: "Network & tech companies", popular: false },
    { extension: ".info", price: "€11.99", description: "Informational websites", popular: false },
    { extension: ".biz", price: "€13.99", description: "Business websites", popular: false }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Domain Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Competitive pricing on all popular domain extensions. 
            All domains include free WHOIS privacy and DNS management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domainPricing.map((domain, index) => (
            <Card key={index} className={`text-center hover:shadow-lg transition-shadow relative ${
              domain.popular ? 'border-blue-500 border-2' : ''
            } ${domain.promo ? 'border-green-500 border-2 bg-gradient-to-b from-green-50 to-white transform scale-105' : ''}`}>
              {domain.popular && !domain.promo && (
                <div className="bg-blue-600 text-white text-sm font-medium py-2">
                  Most Popular
                </div>
              )}
              {domain.promo && (
                <>
                  <div className="bg-gradient-to-r from-green-600 to-green-500 text-white text-sm font-medium py-2 relative">
                    <Star className="w-4 h-4 inline mr-1" />
                    Special Offer - Limited Time
                  </div>
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold z-10">
                    {domain.savings}
                  </div>
                </>
              )}
              <CardHeader className="pb-4">
                <CardTitle className={`text-2xl font-bold ${domain.promo ? 'text-green-600' : 'text-blue-600'}`}>
                  {domain.extension}
                </CardTitle>
                <p className="text-gray-600 text-sm">{domain.description}</p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  {domain.originalPrice && (
                    <div className="text-lg text-gray-400 line-through mb-1">
                      {domain.originalPrice}
                    </div>
                  )}
                  <span className={`text-3xl font-bold ${domain.promo ? 'text-green-600' : ''}`}>
                    {domain.price}
                  </span>
                  <span className="text-gray-500">/year</span>
                  {domain.promo && (
                    <div className="text-sm text-green-600 font-medium mt-1">
                      First year only*
                    </div>
                  )}
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>✓ Free WHOIS privacy</div>
                  <div>✓ DNS management</div>
                  <div>✓ Email forwarding</div>
                  <div>✓ 24/7 support</div>
                  {domain.promo && (
                    <div className="text-green-600 font-medium">✓ Instant registration</div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-4xl mx-auto mb-6">
            <h3 className="text-xl font-bold text-green-800 mb-2">
              🇮🇪 .ie Domain Special - Limited Time Only!
            </h3>
            <p className="text-green-700">
              Get your Irish identity online with a .ie domain for just €2.99 for the first year. 
              Perfect for Irish businesses and individuals. Normal price €19.99/year applies from year 2.
            </p>
          </div>
          
          <p className="text-gray-600 mb-4">
            Don't see the extension you need? We support 300+ domain extensions.
          </p>
          <Badge variant="outline" className="text-blue-600 border-blue-600">
            Contact us for custom domain pricing
          </Badge>
          
          <div className="mt-6 text-xs text-gray-500">
            <p>* Promotional .ie domain pricing valid for first year registration only.</p>
            <p>Standard renewal rates apply. Offer subject to availability and terms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}