export function formatDollars(cents) {
  return '$' + Math.floor(cents / 100) + '.' + Math.floor(Math.floor(cents / 10) % 10) + Math.floor(cents % 10)
}