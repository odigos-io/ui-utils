// Example: splitCamelString('LoremIpsumDolorSitAmet')
// > 'Lorem Ipsum Dolor Sit Amet'

export const splitCamelString = (str: string): string => {
  if (!str) return ''
  return str.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
}
