import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Drama Ads Studio | Cinematic AI Microdramas";
const siteDescription =
  "Story-led AI microdramas and vertical brand films for jewellery, beauty, romance apps and AI products.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-drama-landing-no-supabase.vercel.app"),
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
