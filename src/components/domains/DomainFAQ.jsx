import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function DomainFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How quickly can I register a domain?",
      answer: "Domain registration is instant! Once you complete your purchase, your domain is immediately registered and active. You'll receive confirmation within minutes."
    },
    {
      question: "Do you provide WHOIS privacy protection?",
      answer: "Yes, we include free WHOIS privacy protection with all domain registrations. This keeps your personal information private and protected from spam."
    },
    {
      question: "Can I transfer my existing domain to Digify.ie?",
      answer: "Absolutely! We offer free domain transfers and will help you through the entire process. Domain transfers typically take 5-7 days to complete."
    },
    {
      question: "What happens if my domain expires?",
      answer: "We'll send you renewal reminders before your domain expires. If it does expire, you have a 30-day grace period to renew at standard rates, followed by a redemption period."
    },
    {
      question: "Do you support .ie domains?",
      answer: "Yes! As an Irish company, we're proud to support .ie domains. We'll help you meet the eligibility requirements and handle the registration process."
    },
    {
      question: "Can I register multiple domains at once?",
      answer: "Yes, you can register as many domains as you need. We offer bulk registration discounts for customers registering 10 or more domains."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Domain Registration FAQ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions about domain registration? Here are the most common 
            questions our customers ask.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="mb-4">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}