export default function Chrater(xx, yy, col) {
  let x = xx;
  let y = yy;
  const color = col;


  const out = {
    draw: function (ctx) {
      console.log('character draw himself');
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 20, 20);
    },
    onKeyboardEvent(key) {
      console.log('chararcter gets event', key);
      switch (key) {
        case 'KeyJ':
          x = x - 20;
          break
        case 'KeyK':
          y = y + 4;
          break;
        case 'KeyL':
          y = y - 4;
          break;
        case 'Semicolon':
          x = x + 20;
          break
      }
      console.log('character:', this);
    },
    move: function (xx, yy) {
      this.x = xx;
      this.y = yy;
    }
  }

  return out;
}