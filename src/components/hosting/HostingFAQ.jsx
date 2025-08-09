import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HostingFAQ() {
  const faqs = [
    { q: "What is web hosting?", a: "Web hosting is a service that allows you to post a website or web page onto the Internet. A web host provides the technologies and services needed for the website or webpage to be viewed on the Internet." },
    { q: "Which hosting plan is right for me?", a: "Our Starter plan is great for small personal websites. The Business plan is perfect for small businesses, and the Professional plan is designed for larger sites with higher traffic." },
    { q: "Can I upgrade my hosting plan later?", a: "Yes, you can upgrade your hosting plan at any time. You'll only pay the difference, and the upgrade is processed instantly with no downtime." },
    { q: "Do you offer a money-back guarantee?", a: "Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you're not satisfied, you can request a full refund within the first 30 days." },
    { q: "Is a domain name included with hosting?", a: "A free domain name for the first year is included with our annual Business and Professional hosting plans. For monthly plans, domains can be purchased separately." }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}