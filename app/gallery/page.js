import GalleryImages from '../_components/Gallery/page'

export const metadata = {
  title:
    'Gallery | estheticsbynoemi | Premium Skin Care Services in Brandon, Florida',
  description:
    'Explore the gallery of estheticsbynoemi, showcasing the results of our premium skin care treatments like mesotherapy, Meso Botox, and rejuvenating facial services.',
  keywords:
    'estheticsbynoemi, gallery, skin care gallery, mesotherapy results, Meso Botox before and after, facial treatments, beauty services, skin rejuvenation, Brandon Florida, anti-aging, skin care transformation',
  openGraph: {
    title: 'Gallery | estheticsbynoemi | Premium Skin Care in Brandon, Florida',
    description:
      'View stunning before and after photos showcasing the transformative effects of estheticsbynoemi’s premium skin care treatments in Brandon, FL.',
    images: [
      {
        url: 'https://i.ibb.co/cK6DX7jJ/ourmission.jpg', // Image for social sharing
        width: 1200,
        height: 630,
        alt: 'Gallery of estheticsbynoemi Skin Care Treatments'
      }
    ],
    url: 'https://www.estheticndelrosario.com/gallery',
    siteName: 'estheticsbynoemi',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@estheticnrosario',
    title: 'Gallery | estheticsbynoemi | Premium Skin Care in Brandon, Florida',
    description:
      'Browse through the gallery to see the outstanding results of our premium skin care treatments.',
    images: ['https://i.ibb.co/My2ydCTV/ourmission.jpg'] // Image for Twitter sharing
  }
}

function Gallery () {
  return (
    <section className='pt-16 pb-20 md:pt-12 md:pb-12'>
      <GalleryImages />
    </section>
  )
}

export default Gallery
