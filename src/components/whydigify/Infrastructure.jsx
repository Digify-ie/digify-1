import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Server, ShieldCheck, Wifi, Globe } from "lucide-react";

export default function Infrastructure() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our World-Class Infrastructure
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We've invested in state-of-the-art technology to provide you with secure, reliable, and fast hosting services. Our infrastructure is built for performance and peace of mind.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Server className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Tier III+ Data Centers</h4>
                  <p className="text-gray-600">Our servers are housed in secure data centers with redundant power, cooling, and network connectivity.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ShieldCheck className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Advanced Security</h4>
                  <p className="text-gray-600">We employ enterprise-grade firewalls, DDoS mitigation, and regular security audits to protect your data.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Wifi className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">High-Speed Network</h4>
                  <p className="text-gray-600">Multiple Tier 1 network providers ensure low latency and fast content delivery across the globe.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="https://images.unsplash.com/photo-1581094708023-3c2429681646?q=80&w=2070&auto=format&fit=crop" alt="Server room" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}