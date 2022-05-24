export function formatMoney(cents) {
  if (cents < 99.5) {
    return Math.floor(cents) + '¢'
  } else if (cents % 100 === 0) {
    return '$' + Math.floor(cents / 100)
  } else {
    return '$' + Math.floor(cents / 100) + '.' + Math.floor(Math.floor(cents / 10) % 10) + Math.floor(cents % 10)
  }
}