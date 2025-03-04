export const getDestinationIcon = (destinationType: string) => {
  // const BASE_URL = 'https://d15jtxgb40qetw.cloudfront.net/'
  const BASE_URL = 'https://odigos-destinations.s3.us-east-2.amazonaws.com/'

  return `${BASE_URL}${destinationType}.svg`
}
