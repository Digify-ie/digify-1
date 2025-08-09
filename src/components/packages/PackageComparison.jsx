import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { WebsitePackage } from "@/api/entities";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function PackageComparison() {
  const [packages, setPackages] = useState([]);
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    async function fetchPackages() {
      const websitePackages = await WebsitePackage.list();
      setPackages(websitePackages);
    }
    fetchPackages();
  }, []);

  const allFeatures = [
    { name: 'Pages', key: 'max_pages', type: 'value' },
    { name: 'E-commerce Products', key: 'max_products', type: 'value' },
    { name: 'Free Domain & SSL', key: 'features', value: 'Free domain & SSL certificate', type: 'check' },
    { name: 'Email Accounts', key: 'email_accounts', type: 'value' },
    { name: 'Basic SEO', key: 'features', value: 'Basic SEO & Google Analytics', type: 'check' },
    { name: 'Inventory Tracking', key: 'features', value: 'Inventory tracking system', type: 'check' },
    { name: 'Enhanced E-commerce', key: 'features', value: 'Advanced e-commerce functions', type: 'check' },
    { name: 'CRM/API Integration', key: 'features', value: 'CRM/ERP/API integrations', type: 'check' },
    { name: 'Dedicated Support', key: 'support_level', value: 'Dedicated', type: 'check' }
  ];

  const getFeatureValue = (pkg, feature) => {
    if (feature.type === 'value') {
      const value = pkg[feature.key];
      if (value === 0) return 'Unlimited';
      if (value) return value;
      return <X className="text-red-500 mx-auto" />;
    }
    if (feature.type === 'check') {
      if (feature.key === 'support_level') {
        return pkg[feature.key] === feature.value ? <Check className="text-green-500 mx-auto" /> : <X className="text-red-500 mx-auto" />;
      }
      return pkg.features.includes(feature.value) ? <Check className="text-green-500 mx-auto" /> : <X className="text-red-500 mx-auto" />;
    }
    return '-';
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compare Our Website Packages
          </h2>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <Label htmlFor="price-toggle">Monthly</Label>
            <Switch id="price-toggle" checked={isYearly} onCheckedChange={setIsYearly} />
            <Label htmlFor="price-toggle">Yearly (Save up to 20%)</Label>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="p-4 text-left font-bold text-lg">Features</th>
                {packages.map((pkg) => (
                  <th key={pkg.package_name} className="p-4">
                    <h3 className="text-xl font-bold">{pkg.package_name}</h3>
                    <p className="text-2xl font-bold my-2">
                      {pkg.package_name === "Enterprise Package" 
                        ? "Custom" 
                        : `€${isYearly ? pkg.yearly_price : pkg.monthly_price}`}
                    </p>
                    <p className="text-sm text-gray-500">
                      {pkg.package_name === "Enterprise Package" ? "" : isYearly ? "/year" : "/month"}
                    </p>
                    <Link to={createPageUrl("Contact")}>
                      <Button size="sm" className="mt-4 w-full">
                        {pkg.package_name === "Enterprise Package" ? "Get Quote" : "Choose Plan"}
                      </Button>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature) => (
                <tr key={feature.name} className="border-t">
                  <td className="p-4 text-left font-medium">{feature.name}</td>
                  {packages.map((pkg) => (
                    <td key={pkg.package_name} className="p-4 text-lg">
                      {getFeatureValue(pkg, feature)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}