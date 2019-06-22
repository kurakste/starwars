const tankUp = [
  { x: 0 + 14 * 32, y: 0, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 0, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 0, width: 32, height: 32, },
  { x: 0 + 17 * 32, y: 0, width: 32, height: 32, },
  { x: 0 + 18 * 32, y: 0, width: 32, height: 32, },
  { x: 0 + 19 * 32, y: 0, width: 32, height: 32, },
]
const tankDown = [
  { x: 0 + 14 * 32, y: 32, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 32, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 32, width: 32, height: 32, },
  { x: 0 + 17 * 32, y: 32, width: 32, height: 32, },
  { x: 0 + 18 * 32, y: 32, width: 32, height: 32, },
  { x: 0 + 19 * 32, y: 32, width: 32, height: 32, },
]

const tankLeft = [
  { x: 0 + 15 * 32, y: 0 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 0 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 1 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 2 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 3 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 4 * 32 + 64, width: 32, height: 32, },
]

const tankRight = [
  { x: 0 + 16 * 32, y: 0 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 0 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 1 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 2 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 3 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 4 * 32 + 64, width: 32, height: 32, },
]

export {
  tankDown, tankLeft, tankRight, tankUp
}