import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Drama Ads Studio | AI Short Drama Ads";
const siteDescription =
  "Premium AI short drama ads for jewelry brands, AI startups, DTC products, creator-led brands, agencies, and MCNs.";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    images: ["/og-card.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-card.svg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
