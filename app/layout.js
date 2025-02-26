import MobileNav from './_Main/MobilieNav/page'
import Header from './_shared/Header/page'
import './globals.css'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: 'Esthetic N. Del Rosario - Premium Skin Care Services || Brandon, Florida',
  description:
    'Discover premium skin care treatments designed to rejuvenate, hydrate, and enhance your natural beauty.',
  keywords:
    'skin care, mesotherapy, Meso Botox, rejuvenation, facial treatments, anti-aging, skin hydration, beauty services',
  openGraph: {
    title: 'Esthetic N. Del Rosario - Premium Skin Care Services',
    description:
      'Explore a range of expert skin care services aimed at rejuvenating and enhancing your beauty.',
    images: [
      {
        url: 'https://i.ibb.co/cK6DX7jJ/ourmission.jpg', // ✅ Correct format
        width: 1200,
        height: 630,
        alt: 'Esthetic N. Del Rosario - Premium Skin Care Services'
      }
    ],
    url: 'https://www.estheticndelrosario.com',
    siteName: 'Esthetic N. Del Rosario',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@estheticnrosario',
    title: 'Esthetic N. Del Rosario - Premium Skin Care Services',
    description:
      'Enhance your natural beauty with our rejuvenating skin care treatments. Book your appointment now!',
    images: ['https://i.ibb.co/My2ydCTV/ourmission.jpg'] // ✅ Correct format
  }
};


export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className=''>
        <Header />
        {children}

        <MobileNav />

        <GoogleTagManager gtmId="GTM-WWWNMW9W"></GoogleTagManager>
        <GoogleAnalytics gaId='G-BSDHMMB2MQ'></GoogleAnalytics>
      </body>
    </html>
  )
}
