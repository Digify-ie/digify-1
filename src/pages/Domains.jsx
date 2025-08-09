import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Search, CheckCircle, XCircle } from "lucide-react";

import DomainSearch from "../components/domains/DomainSearch";
import DomainPricing from "../components/domains/DomainPricing";
import DomainFAQ from "../components/domains/DomainFAQ";

export default function Domains() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect Domain
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Secure your online identity with professional domain registration. 
              Instant setup, competitive pricing, and Irish support.
            </p>
          </div>
        </div>
      </section>

      <DomainSearch />
      <DomainPricing />
      <DomainFAQ />
    </div>
  );
}