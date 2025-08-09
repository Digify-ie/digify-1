import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

import { ContactInquiry } from "@/api/entities";

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    service_type: "",
    message: "",
    budget_range: "",
    timeline: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await ContactInquiry.create(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
    }
    
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="p-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              We've received your inquiry and will get back to you within 24 hours.
            </p>
            <Button onClick={() => {
              setIsSubmitted(false);
              setFormData({
                full_name: "",
                email: "",
                phone: "",
                company: "",
                service_type: "",
                message: "",
                budget_range: "",
                timeline: ""
              });
            }}>
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to take your business online? Our Irish team is here to help. 
            Get a free consultation and quote for your project.
          </p>
        </div>
      </section>

      <section className="py-16 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="full_name">Full Name *</Label>
                        <Input
                          id="full_name"
                          value={formData.full_name}
                          onChange={(e) => handleInputChange("full_name", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <Label>Service Type *</Label>
                      <Select value={formData.service_type} onValueChange={(value) => handleInputChange("service_type", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="What service are you interested in?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="domain">Domain Registration</SelectItem>
                          <SelectItem value="hosting">Web Hosting</SelectItem>
                          <SelectItem value="website">Website Development</SelectItem>
                          <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                          <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Budget Range</Label>
                        <Select value={formData.budget_range} onValueChange={(value) => handleInputChange("budget_range", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select your budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-500">Under €500</SelectItem>
                            <SelectItem value="500-1000">€500 - €1,000</SelectItem>
                            <SelectItem value="1000-2500">€1,000 - €2,500</SelectItem>
                            <SelectItem value="2500-5000">€2,500 - €5,000</SelectItem>
                            <SelectItem value="over-5000">Over €5,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="When do you need this?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                            <SelectItem value="1-3-months">1-3 months</SelectItem>
                            <SelectItem value="3-6-months">3-6 months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        rows={4}
                        placeholder="Tell us about your project requirements..."
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">hello@digify.ie</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+353 1 234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">Dublin, Ireland</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-600">Mon-Fri 9AM-6PM GMT</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Options */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Support Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Technical Support</h4>
                    <p className="text-gray-600 text-sm mb-2">24/7 support for hosting and technical issues</p>
                    <p className="text-blue-600">support@digify.ie</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Sales Inquiries</h4>
                    <p className="text-gray-600 text-sm mb-2">Get quotes and project consultations</p>
                    <p className="text-blue-600">sales@digify.ie</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Emergency Support</h4>
                    <p className="text-gray-600 text-sm mb-2">Critical website issues</p>
                    <p className="text-blue-600">emergency@digify.ie</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}