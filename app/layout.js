import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  metadataBase: new URL('https://ai-drama-ads.vercel.app'),
  title: { default: 'AI Drama Ads for Brands | Moon Ocean Studio', template: '%s | Moon Ocean Studio' },
  description: 'Story-driven AI video ads and branded short dramas for ecommerce, jewelry, fashion and lifestyle brands.',
  openGraph: { title: 'AI Drama Ads for Brands', description: 'Turn your product into the plot twist.', type: 'website' }
};

export default function RootLayout({children}){
  const schema = {
    '@context':'https://schema.org',
    '@type':'Organization',
    name:'Moon Ocean Studio',
    url:'https://ai-drama-ads.vercel.app',
    description:'AI drama ads and branded short drama production for brands.'
  };
  return <html lang="en"><body><Nav />{children}<Footer />
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
  </body></html>
}
