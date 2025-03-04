export const getDestinationIcon = (destinationType: string) => {
  const BASE_URL = 'https://d15jtxgb40qetw.cloudfront.net/'

  return `${BASE_URL}${destinationType}.svg`
}
