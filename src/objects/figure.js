import sprites from '../img/sprites-full.png';

export default function Chrater(xx, yy, col) {

  let x = xx;
  let y = yy;
  const color = col;
  const img = new Image();
  img.src = sprites;
  let spi = 0;
  let spiMax = 5;
  //sprite matrix
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
  


  let sm = tankUp;

  const out = {
    draw: function (ctx) {
      ctx.drawImage(
        img, sm[spi].x, sm[spi].y, sm[spi].width, sm[spi].height, x, y,
        sm[spi].width, sm[spi].height
      );
    },
    onKeyboardEvent(key) {
      console.log('chararcter gets keyboard event', key);
      switch (key) {
        case 'KeyJ':
          sm = tankRight;
          x = x - 7;
          break
        case 'KeyK':
          y = y + 5;
          sm = tankDown;
          break;
        case 'KeyL':
          sm = tankUp;
          y = y - 5;
          break;
        case 'Semicolon':
          x = x + 7;
          sm = tankLeft;
          break
      }
      spi++
      if (spi > spiMax) spi = 1;
      console.log('=========>', spi);
    },
    move: function (xx, yy) {
      this.x = xx;
      this.y = yy;
    }
  }

  return out;
}