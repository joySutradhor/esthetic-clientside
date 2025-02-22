import serviceList from '@/public/FakeDb/services.json'
export const revalidate = 60

export default function sitemap () {
  const serviceData = serviceList?.services

  const data = serviceData.map((d, i) => ({
    url:   `https://estheticsbynoemi.com/service/${d?.slug}`,
    lastModified:  new Date(),
    changeFrequency: 'weekly',
    priority: .8
  }))

  return [
    {
      url: 'https://estheticsbynoemi.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'https://estheticsbynoemi.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: 'https://estheticsbynoemi.com/service',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: 'https://estheticsbynoemi.com/gallery',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    },

    ...data
  ]
}
