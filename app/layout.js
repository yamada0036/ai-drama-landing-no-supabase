import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://ai-drama-landing-no-supabase.vercel.app'),
  title: {
    default: 'Moon Ocean Studio | AI Video Ads for Brands',
    template: '%s | Moon Ocean Studio'
  },
  description: 'Story-driven AI video ads and branded short-form creative for ecommerce, jewelry, fashion and lifestyle brands.',
  openGraph: {
    title: 'Moon Ocean Studio — AI Video Ads for Brands',
    description: 'Story-driven AI video advertising built for TikTok, Instagram Reels and YouTube Shorts.',
    type: 'website',
    url: 'https://ai-drama-landing-no-supabase.vercel.app'
  }
};

export default function RootLayout({children}){
  const schema = {
    '@context':'https://schema.org',
    '@type':'Organization',
    name:'Moon Ocean Studio',
    url:'https://ai-drama-landing-no-supabase.vercel.app',
    description:'Story-driven AI video advertising and branded short-form creative for brands.'
  };
  return <html lang="en"><body><Nav />{children}<Footer />
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
  </body></html>
}
