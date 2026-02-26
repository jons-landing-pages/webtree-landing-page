import type { Metadata } from "next";
import "@/app/globals.css";
import ClientNav from "@/components/ClientNav";
import Footer from "@/components/Footer";
import AmbientBg from "@/components/AmbientBg";
import HexGrid from "@/components/HexGrid";

export const metadata: Metadata = {
  title: {
    template: "%s | WebTree Global",
    default: "WebTree Global",
  },
  description:
    "Webtree Global Pte. Ltd. — Strategic capital allocation, technology, and venture partnerships. Singapore.",
  icons: {
    icon: "/webtree-logo.png",
    apple: "/webtree-logo.png",
  },
  openGraph: {
    title: "WebTree Global",
    description:
      "Strategic capital allocation, technology, and venture partnerships.",
    siteName: "WebTree Global",
    locale: "en_SG",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebTree Global",
    description:
      "Strategic capital allocation, technology, and venture partnerships.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-overlay">
        <AmbientBg />
        <HexGrid />
        <div className="relative z-10">
          <ClientNav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
