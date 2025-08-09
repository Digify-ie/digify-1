import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle, XCircle, Globe, Loader2, Star } from "lucide-react";

export default function DomainSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const popularExtensions = [
    { ext: ".ie", price: "€2.99", originalPrice: "€19.99", popular: true, promo: true },
    { ext: ".com", price: "€12.99", popular: true },
    { ext: ".co.uk", price: "€14.99", popular: false },
    { ext: ".eu", price: "€9.99", popular: false },
    { ext: ".org", price: "€15.99", popular: false },
    { ext: ".net", price: "€16.99", popular: false }
  ];

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setIsSearching(true);
    
    // Simulate domain search results
    setTimeout(() => {
      const results = popularExtensions.map(ext => ({
        domain: searchTerm.toLowerCase().replace(/\s+/g, '') + ext.ext,
        extension: ext.ext,
        price: ext.price,
        originalPrice: ext.originalPrice,
        promo: ext.promo,
        available: Math.random() > 0.3, // 70% chance of availability
        premium: Math.random() > 0.8 // 20% chance of premium
      }));
      
      setSearchResults(results);
      setIsSearching(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="py-16 -mt-8 relative z-10">
      <div className="container mx-auto px-4">
        {/* .ie Domain Promotion Banner */}
        <div className="max-w-4xl mx-auto mb-8">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Special Offer: .ie Domains
                    </h3>
                    <p className="text-gray-600">
                      Get your Irish domain for just €2.99/year* - Limited time offer!
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600">€2.99</div>
                  <div className="text-sm text-gray-500 line-through">€19.99</div>
                  <Badge className="bg-red-500 hover:bg-red-500 text-white mt-1">
                    85% OFF
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Box */}
        <Card className="max-w-4xl mx-auto shadow-xl">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Enter your domain name (e.g., mybusiness)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-10 py-6 text-lg"
                    disabled={isSearching}
                  />
                </div>
              </div>
              <Button 
                onClick={handleSearch}
                disabled={!searchTerm.trim() || isSearching}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-8"
              >
                {isSearching ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Search Domains
                  </>
                )}
              </Button>
            </div>

            {/* Popular Extensions */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-3">Popular extensions:</p>
              <div className="flex flex-wrap gap-2">
                {popularExtensions.map((ext) => (
                  <Badge
                    key={ext.ext}
                    variant="outline"
                    className={`cursor-pointer hover:bg-blue-50 relative ${
                      ext.popular ? 'border-blue-500 text-blue-700' : ''
                    } ${ext.promo ? 'border-green-500 text-green-700 bg-green-50' : ''}`}
                    onClick={() => setSearchTerm(searchTerm + ext.ext)}
                  >
                    {ext.promo && (
                      <Star className="w-3 h-3 mr-1 text-green-600" />
                    )}
                    {ext.ext} - {ext.price}/year
                    {ext.originalPrice && (
                      <span className="ml-1 line-through text-xs text-gray-400">
                        {ext.originalPrice}
                      </span>
                    )}
                    {ext.promo && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
                        SALE
                      </span>
                    )}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Promotional Note */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                * .ie domain promotional price valid for first year only. Standard renewal rates apply.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="max-w-4xl mx-auto mt-8">
            <h3 className="text-2xl font-bold mb-6">Domain Search Results</h3>
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <Card key={index} className={`${
                  result.available 
                    ? result.promo 
                      ? 'border-green-200 bg-gradient-to-r from-green-50 to-blue-50' 
                      : 'border-green-200 bg-green-50' 
                    : 'border-red-200 bg-red-50'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {result.available ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-500" />
                        )}
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="text-lg font-semibold">{result.domain}</h4>
                            {result.promo && (
                              <Badge className="bg-green-100 text-green-800 text-xs">
                                <Star className="w-3 h-3 mr-1" />
                                Special Offer
                              </Badge>
                            )}
                          </div>
                          {result.premium && (
                            <Badge className="bg-yellow-100 text-yellow-800 text-xs mt-1">Premium Domain</Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        {result.available ? (
                          <div className="flex items-center space-x-4">
                            <div>
                              {result.originalPrice && (
                                <div className="text-sm text-gray-500 line-through">
                                  {result.originalPrice}/year
                                </div>
                              )}
                              <span className={`text-2xl font-bold ${result.promo ? 'text-green-600' : ''}`}>
                                {result.price}
                              </span>
                              <span className="text-gray-500">/year</span>
                              {result.promo && (
                                <div className="text-xs text-green-600 font-medium">
                                  Save 85% first year!
                                </div>
                              )}
                            </div>
                            <Button className={`${result.promo ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'}`}>
                              Register Now
                            </Button>
                          </div>
                        ) : (
                          <div className="text-red-600 font-medium">
                            Not Available
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}