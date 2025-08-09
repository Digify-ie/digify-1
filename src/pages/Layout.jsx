
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { User } from "@/api/entities";
import { 
  Globe, 
  Server, 
  Laptop, 
  Phone, 
  Mail, 
  Menu, 
  X,
  Shield,
  Clock,
  MapPin,
  LogIn
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    await User.login();
  };

  const navigationItems = [
    { title: "Home", url: createPageUrl("Home"), icon: Globe },
    { title: "Domains", url: createPageUrl("Domains"), icon: Globe },
    { title: "Hosting", url: createPageUrl("Hosting"), icon: Server },
    { title: "Website Packages", url: createPageUrl("Packages"), icon: Laptop },
    { title: "Why Digify?", url: createPageUrl("WhyDigify"), icon: Shield },
    { title: "Contact", url: createPageUrl("Contact"), icon: Phone }
  ];

  const isActive = (url) => location.pathname === url;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/212af16db_DigifyLogoColourFinal100x50px1.png" alt="Digify.ie Logo" className="h-10" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.url)
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:flex" onClick={handleLogin}>
                <LogIn className="w-4 h-4 mr-2" />
                Client Login
              </Button>
              <Link to={createPageUrl("Contact")}>
                <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </Link>
              
              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <div className="flex items-center space-x-2 mb-6">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/212af16db_DigifyLogoColourFinal100x50px1.png" alt="Digify.ie Logo" className="h-8" />
                  </div>
                  <nav className="space-y-2">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.url}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive(item.url)
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <Button variant="outline" className="w-full" onClick={handleLogin}>
                      <LogIn className="w-4 h-4 mr-2" />
                      Client Login
                    </Button>
                    <Link to={createPageUrl("Contact")} className="block" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                 <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/212af16db_DigifyLogoColourFinal100x50px1.png" alt="Digify.ie Logo" className="h-10 bg-white p-1 rounded" />
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted Irish digital service provider offering domain registration, 
                web hosting, and website development services.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Based in Ireland</span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to={createPageUrl("Domains")} className="hover:text-white transition-colors">Domain Registration</Link></li>
                <li><Link to={createPageUrl("Hosting")} className="hover:text-white transition-colors">SSD Web Hosting</Link></li>
                <li><Link to={createPageUrl("Packages")} className="hover:text-white transition-colors">Website Development</Link></li>
                <li><Link to={createPageUrl("Packages")} className="hover:text-white transition-colors">E-commerce Solutions</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" onClick={handleLogin} className="hover:text-white transition-colors cursor-pointer">Client Portal</a></li>
                <li><Link to={createPageUrl("Contact")} className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to={createPageUrl("WhyDigify")} className="hover:text-white transition-colors">99.9% Uptime Guarantee</Link></li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>24/7 Support</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>support@digify.ie</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Client Area */}
            <div>
              <h3 className="font-semibold mb-4">Client Area</h3>
              <p className="text-gray-400 mb-4">
                Manage your domains, hosting, and services.
              </p>
              <div className="space-y-3">
                  <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white" onClick={handleLogin}>
                      <LogIn className="w-4 h-4 mr-2" />
                      Client Login
                  </Button>
                  <Link to={createPageUrl("Contact")} className="block">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          Start a New Project
                      </Button>
                  </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Digify.ie. All rights reserved. | Made in Ireland 🇮🇪</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
