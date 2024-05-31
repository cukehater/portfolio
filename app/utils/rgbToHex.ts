export function rgbaToHex(r: number, g: number, b: number, a: number): string {
  return `#${[r, g, b, a * 255]
    .map(num => Math.round(num).toString(16).padStart(2, '0'))
    .join('')}`
}
