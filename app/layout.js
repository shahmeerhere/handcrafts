import "./globals.css";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import { CartProvider } from "./context/CartContext";
import PerformanceMonitor from "./components/PerformanceMonitor";
import GoogleAnalytics from "./components/GoogleAnalytics";

// ===== Metadata =====
export const metadata = {
  title: {
    default: "Handcrafts | Premium Handmade Products Store",
    template: "Handcrafts - %s | Premium Handicrafted Store",
  },
  description: "Discover premium products at Handcrafts - Pakistan's leading luxury store.",
  authors: [{ name: "Handcrafts" }],
  creator: "Handcrafts",
  publisher: "Handcrafts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://handcrafts.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Handcrafts - Premium Store",
    description: "Discover premium products at Handcrafts - Pakistan's leading luxury store.",
    url: 'https://morva.com',
    siteName: 'Handcrafts',
    images: [
      {
        url: '/comps/logo.png',
        width: 1200,
        height: 630,
        alt: 'Premium Store Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Handcrafts - Premium Store",
    description: "Discover premium products at Handcrafts - Pakistan's leading luxury store.",
    images: ['/comps/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

// ===== Root Layout =====
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://placehold.co" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Handcrafts" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className="antialiased bg-white text-black"
      >
        <CartProvider>
          <PerformanceMonitor />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
