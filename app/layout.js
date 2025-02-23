import MobileNav from './_Main/MobilieNav/page'
import Header from './_shared/Header/page'
import './globals.css'

export const metadata = {
  title: 'Esthetic N. Del Rosario - Premium Skin Care Services',
  description:
    'Discover premium skin care treatments designed to rejuvenate, hydrate, and enhance your natural beauty. From vitamin mesotherapy to Meso Botox, we offer non-invasive solutions for healthier, younger-looking skin.',
  keywords:
    'skin care, mesotherapy, Meso Botox, rejuvenation, facial treatments, anti-aging, skin hydration, beauty services',
  author: 'Esthetic N. Del Rosario',
  openGraph: {
    title: 'Esthetic N. Del Rosario - Premium Skin Care Services',
    description:
      'Explore a range of expert skin care services aimed at rejuvenating and enhancing your beauty. We offer advanced treatments like mesotherapy and Meso Botox for visible results.',
    image: 'https://i.ibb.co.com/My2ydCTV/ourmission.jpg', // Add a relevant image URL
    url: 'https://www.estheticndelrosario.com',
    site_name: 'Esthetic N. Del Rosario'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@estheticnrosario',
    title: 'Esthetic N. Del Rosario - Premium Skin Care Services',
    description:
      'Enhance your natural beauty with our rejuvenating skin care treatments. Book your appointment now!',
    image: 'https://i.ibb.co.com/My2ydCTV/ourmission.jpg' // Add a relevant image URL
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className=''>
        <Header />
        {children}

        <MobileNav />
      </body>
    </html>
  )
}
