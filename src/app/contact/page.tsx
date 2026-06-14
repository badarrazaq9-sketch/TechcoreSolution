"use client";

import React from "react";
import Head from "next/head";
import AnimatedBackground from "@/components/background/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import ContactHero from "@/components/sections/ContactHero";
import ContactInfo from "@/components/sections/ContactInfo";
// import ContactForm from "@/components/sections/ContactForm";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import AboutSection from "@/components/sections/AboutSection";
const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://techcoresolution.com/contact#webpage",
      url: "https://techcoresolution.com/contact",
      name: "Contact Us | TechCore solution - UK & USA Software House",
      isPartOf: {
        "@id": "https://techcoresolution.com#website"
      },
      about: {
        "@id": "https://techcoresolution.com#organization"
      },
      description: "Get in touch with TechCore solution. Let's discuss your next project.",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://techcoresolution.com/og-contact.jpg"
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://techcoresolution.com"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact Us",
            item: "https://techcoresolution.com/contact"
          }
        ]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://techcoresolution.com#organization",
      name: "TechCore solution",
      alternateName: "TechCore solution - UK & USA Software House",
      url: "https://techcoresolution.com",
      logo: {
        "@type": "ImageObject",
        url: "https://techcoresolution.com/logo.png",
        width: 512,
        height: 512
      },
      description: "Premium UK & USA-based software house delivering enterprise-grade digital solutions.",
      foundingDate: "2014",
      address: {
        "@type": "PostalAddress",
        streetAddress: "82a James Carter Road",
        addressLocality: "Mildenhall",
        addressRegion: "Suffolk",
        postalCode: "IP28 7DE",
        addressCountry: "GB"
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+44-7828-704078",
          contactType: "customer service",
          availableLanguage: ["English"],
          areaServed: ["GB", "US"]
        }
      ],
      sameAs: [
        "https://www.linkedin.com/company/techcoresolution",
        "https://twitter.com/techcoresolution",
        "https://github.com/techcoresolution"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://techcoresolution.com#website",
      url: "https://techcoresolution.com",
      name: "TechCore solution",
      publisher: {
        "@id": "https://techcoresolution.com#organization"
      }
    }
  ]
};

export default function ContactPage() {
  return (
    <div className="min-h-screen text-white selection:bg-[#5d67f2]/30 bg-[#08080e]">
      <Head>
        <title>Contact Us | TechCore solution - UK & USA Software House</title>
        <meta name="description" content="Get in touch with TechCore solution. Offices in London and New York. Let's discuss your next project." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        />
      </Head>

      <AnimatedBackground />
      <Navbar />
      <ContactHero />
      <ContactInfo />
       <ContactCTA />
       <AboutSection />
          <ContactSection />
      <Footer />
    </div>
  );
}