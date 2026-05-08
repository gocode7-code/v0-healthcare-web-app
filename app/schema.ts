export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Khursheed Health Hub',
  url: 'https://khursheedhealthhub.com',
  logo: 'https://khursheedhealthhub.com/logo.jpg',
  description: 'Expert homeopathic healthcare and wellness consultations in Karachi',
  medicalSpecialty: ['Homeopathy', 'Alternative Medicine', 'Wellness'],
  telephone: '+92-333-2103056',
  email: 'info@khursheedhealthhub.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PK',
    addressLocality: 'Karachi',
    addressRegion: 'Sindh',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://www.facebook.com/khursheedhealthhub',
    'https://www.instagram.com/khursheedhealthhub',
    'https://wa.me/923332103056',
  ],
  priceRange: '$$',
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Khursheed Health Hub',
  url: 'https://khursheedhealthhub.com',
  image: 'https://khursheedhealthhub.com/khursheed.jpg',
  telephone: '+92-333-2103056',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Karachi',
    addressLocality: 'Karachi',
    addressCountry: 'Pakistan',
  },
  areaServed: 'Karachi, Pakistan',
  priceRange: '$$',
}
