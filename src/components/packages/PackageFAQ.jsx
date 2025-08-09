import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PackageFAQ() {
    const faqs = [
    { q: "How long does it take to build a website?", a: "A standard 5-page 'Presence' website typically takes 2-4 weeks. E-commerce and Enterprise projects vary based on complexity, but we always provide a clear timeline upfront." },
    { q: "Is hosting included in the website packages?", a: "Yes, all our website packages include one year of our Business Hosting plan, free of charge. After the first year, standard hosting renewal rates apply." },
    { q: "Will my website be mobile-friendly?", a: "Absolutely. All websites we build are fully responsive, meaning they will look great and function perfectly on all devices, including desktops, tablets, and smartphones." },
    { q: "Can I update the website myself?", a: "Yes. We build our websites on user-friendly platforms that allow you to easily update content, add blog posts, and manage products without any technical knowledge." },
    { q: "Do you provide SEO services?", a: "Basic on-page SEO is included in all our packages to ensure your site is search-engine-ready. We also offer advanced SEO and digital marketing services for clients looking to boost their online visibility." }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Website Package FAQ
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