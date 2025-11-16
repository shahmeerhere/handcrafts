"use client";
import React from "react";

export default function StructuredData({ type, data }) {
  const storeName = "Handcrafts";
  const storeUrl = "https://handcrafts.com";
  const storeLogo = "https://handcrafts.com/comps/logo.png";
  const contactNumber = "+92-300-1234567";

  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: storeName,
          alternateName: `${storeName} Artisan Market`,
          description: "Premium handcrafted products for home, lifestyle, and gifting.",
          url: storeUrl,
          logo: { "@type": "ImageObject", url: storeLogo, width: 200, height: 200 },
          foundingDate: "2023",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: contactNumber,
              contactType: "customer service",
              availableLanguage: ["English", "Urdu"],
              areaServed: "PK",
              hoursAvailable: "Mo-Su 09:00-22:00"
            },
            {
              "@type": "ContactPoint",
              email: "info@handcrafts.com",
              contactType: "customer service",
              availableLanguage: ["English", "Urdu"]
            }
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Artisan Street, Gulshan-e-Iqbal",
            addressLocality: "Karachi",
            addressRegion: "Sindh",
            postalCode: "75300",
            addressCountry: "PK"
          },
          sameAs: [
            "https://facebook.com/handcrafts",
            "https://instagram.com/handcrafts",
            "https://twitter.com/handcrafts",
            "https://youtube.com/handcrafts"
          ]
        };

      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: `${storeName} - Handcrafted Excellence`,
          url: storeUrl,
          description: "Handcrafted products marketplace offering unique, artisan-made items.",
          inLanguage: "en",
          publisher: { "@type": "Organization", name: storeName, url: storeUrl },
          potentialAction: {
            "@type": "SearchAction",
            target: { "@type": "EntryPoint", urlTemplate: `${storeUrl}/search?q={search_term_string}` },
            "query-input": "required name=search_term_string"
          }
        };

      case "store":
        return {
          "@context": "https://schema.org",
          "@type": "Store",
          name: `${storeName} Store`,
          description: "Handcrafted products marketplace for home, lifestyle, and gifting.",
          url: storeUrl,
          image: [storeLogo, "https://handcrafts.com/comps/heropic.jpeg"],
          telephone: contactNumber,
          email: "info@handcrafts.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Artisan Street, Gulshan-e-Iqbal",
            addressLocality: "Karachi",
            addressRegion: "Sindh",
            postalCode: "75300",
            addressCountry: "PK"
          },
          geo: { "@type": "GeoCoordinates", latitude: "24.8607", longitude: "67.0011" },
          openingHours: "Mo-Su 09:00-22:00",
          priceRange: "$$",
          paymentAccepted: ["Cash", "Credit Card", "Debit Card", "JazzCash", "EasyPaisa", "Bank Transfer"],
          currenciesAccepted: "PKR",
          hasMap: "https://maps.google.com/?q=24.8607,67.0011",
          sameAs: [
            "https://facebook.com/handcrafts",
            "https://instagram.com/handcrafts",
            "https://twitter.com/handcrafts"
          ]
        };

      case "product":
        if (!data) return null;
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          name: data.name,
          description: data.description,
          image: data.images || [],
          brand: { "@type": "Brand", name: storeName, logo: storeLogo },
          category: data.category,
          sku: `HAND-${data.id}`,
          offers: {
            "@type": "Offer",
            price: data.discountedPrice,
            priceCurrency: "PKR",
            availability: data.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            itemCondition: "https://schema.org/NewCondition",
            seller: { "@type": "Organization", name: storeName, url: storeUrl }
          },
          aggregateRating: data.rating ? {
            "@type": "AggregateRating",
            ratingValue: data.rating,
            reviewCount: data.reviews || 0,
            bestRating: 5,
            worstRating: 1
          } : undefined,
          additionalProperty: data.specifications
            ? Object.entries(data.specifications).map(([key, value]) => ({
                "@type": "PropertyValue",
                name: key,
                value
              }))
            : []
        };

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data?.map((item, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: item.name,
            item: item.url
          })) || []
        };

      case "faq":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data?.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer }
          })) || []
        };

      case "collection":
        return {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: data?.name,
          description: data?.description,
          url: data?.url,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: data?.products?.length || 0,
            itemListElement: data?.products?.map((product, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              item: {
                "@type": "Product",
                name: product.name,
                url: `${storeUrl}/products/${product.id}`,
                image: product.images?.[0],
                offers: { "@type": "Offer", price: product.discountedPrice, priceCurrency: "PKR" }
              }
            })) || []
          }
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
