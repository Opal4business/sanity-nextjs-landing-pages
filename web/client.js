import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'l5f5ceeu',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-01-31',
})

export default client
