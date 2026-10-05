import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: "Digital Marketing Agency in Sri Lanka | RV INNOVATE",
  description:
    "RV INNOVATE is a strategy-led digital marketing agency in Sri Lanka helping businesses grow through websites, ads, social media, SEO and branding.",
  keywords:
    "digital marketing agency Sri Lanka, web design Sri Lanka, SEO Sri Lanka, social media marketing, PPC advertising, brand strategy, RV INNOVATE",
  metadataBase: new URL("https://rvdigital.lk"),
  openGraph: {
    title: "Digital Marketing Agency in Sri Lanka | RV INNOVATE",
    description:
      "RV INNOVATE is a strategy-led digital marketing agency in Sri Lanka helping businesses grow through websites, ads, social media, SEO and branding.",
    url: "https://rvdigital.lk/",
    siteName: "RV INNOVATE",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/rv-hero-final-q96.webp",
        width: 1448,
        height: 1086,
        alt: "RV INNOVATE Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Sri Lanka | RV INNOVATE",
    description:
      "RV INNOVATE is a strategy-led digital marketing agency in Sri Lanka helping businesses grow through websites, ads, social media, SEO and branding.",
    images: ["/images/rv-hero-final-q96.webp"],
  },
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700;800;900&family=Roboto+Slab:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="site-shell">
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
