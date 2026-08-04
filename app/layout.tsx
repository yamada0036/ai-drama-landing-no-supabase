import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "AI Drama Club | Early Access Episodes";
const siteDescription =
  "Get early access to addictive AI short drama episodes, vote for the next twist, and join the Drama Club.";

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
