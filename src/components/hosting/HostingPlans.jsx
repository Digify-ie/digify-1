import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { HostingPlan } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap } from "lucide-react";

export default function HostingPlans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function fetchPlans() {
      const hostingPlans = await HostingPlan.list();
      setPlans(hostingPlans);
    }
    fetchPlans();
  }, []);
  
  const planFeatures = {
    "Starter Hosting": [
      "1 Website", "10 GB SSD Storage", "100 GB Bandwidth", "5 Email Accounts", "Free SSL Certificate"
    ],
    "Business Hosting": [
      "10 Websites", "50 GB SSD Storage", "500 GB Bandwidth", "20 Email Accounts", "Daily Backups", "Staging Environment"
    ],
    "Professional Hosting": [
      "Unlimited Websites", "100 GB SSD Storage", "Unmetered Bandwidth", "50 Email Accounts", "Priority Support", "Advanced Security"
    ]
  };
  
  const popularPlan = "Business Hosting";

  return (
    <section id="hosting-plans" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Hosting Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans are scalable and can be upgraded anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.plan_name} className={`flex flex-col ${plan.plan_name === popularPlan ? 'border-blue-500 border-2 shadow-xl scale-105' : 'border-gray-200'} transition-all duration-300`}>
              {plan.plan_name === popularPlan && (
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 text-sm">
                  <Zap className="w-4 h-4 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.plan_name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">€{plan.monthly_price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  or €{plan.yearly_price}/year
                </p>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <ul className="space-y-3 mb-8">
                  {planFeatures[plan.plan_name]?.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Link to={createPageUrl("Contact")} className="w-full">
                  <Button className={`w-full ${plan.plan_name === popularPlan ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}>
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}