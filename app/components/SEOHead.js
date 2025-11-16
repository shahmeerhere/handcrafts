"use client";
import Head from "next/head";

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  structuredData,
  noindex = false,
  nofollow = false,
}) {
  const brandName = "Handcrafts";
  const defaultUrl = "https://handcrafts.com";
  const defaultDescription =
    "Premium handcrafted products for home, lifestyle, and gifting. Explore unique artisan-made items.";
  const defaultOgImage = "https://handcrafts.com/comps/logo.png";

  const fullTitle = title ? `${title} | ${brandName}` : `${brandName} - Handcrafted Excellence`;
  const fullDescription = description || defaultDescription;
  const fullCanonical = canonical || defaultUrl;
  const fullOgImage = ogImage || defaultOgImage;

  return (
    <Head>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={brandName} />
      <meta
        name="robots"
        content={`${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`}
      />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={brandName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@handcrafts" />
      <meta name="twitter:creator" content="@handcrafts" />

      {/* Additional Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={brandName} />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Preconnect & DNS Prefetch */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://placehold.co" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/comps/logo.png" />
    </Head>
  );
}
