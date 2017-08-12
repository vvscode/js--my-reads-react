export default(str) => `${str}`
  .replace(/([A-Z])/g, ' $1')
  .trim()
  .split(' ')
  .map((i) => `${i[0].toUpperCase()}${i.slice(1)}`)
  .join(' ');