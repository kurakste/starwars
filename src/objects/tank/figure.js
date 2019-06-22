import sprites from '../../img/sprites-full.png';
import { tankDown, tankLeft, tankRight, tankUp } from './tankMatrix';
import { fire, offsetX, offsetY } from './fireMatrix';

export default function Chrater(xx, yy, col) {

  let x = xx;
  let y = yy;
  const img = new Image();
  img.src = sprites;
  let spi = 0;
  let spiMax = 5;
  let model = tankUp;
  let fireState = 0;
  let dir = 'up';

  const out = {
    draw: function (ctx) {
      ctx.drawImage(
        img, model[spi].x, model[spi].y, model[spi].width, model[spi].height, x, y,
        model[spi].width, model[spi].height
      );
      if (fireState !== 0) {
        console.log('===>', dir);
        ctx.drawImage(
          img, fire[fireState - 1].x,
          fire[fireState - 1].y,
          fire[fireState - 1].width, fire[fireState - 1].height,
          x + offsetX[dir], y + offsetY[dir],
          fire[fireState - 1].width, fire[fireState - 1].height
        );
        fireState++
        if (fireState > 5) fireState = 0;
      }
    },
    onKeyboardEvent(key) {
      console.log('chararcter gets keyboard event', key);
      const map = {
        KeyJ: () => {
          model = tankRight;
          dir = 'right';
          x = x - 7;
        },
        KeyK: () => {
          dir = 'down'
          y = y + 5;
          model = tankDown;
        },
        KeyL: () => {
          dir = 'up'
          model = tankUp;
          y = y - 5;
        },
        Semicolon: () => {
          dir = 'left';
          x = x + 7;
          model = tankLeft;
        },
        Space: () => {
          fireState = 1;
        }
      };

      map[key] && map[key]();
      spi++
      if (spi > spiMax) spi = 1;
    },

    onFire: function () {

    },

    move: function (xx, yy) {
      this.x = xx;
      this.y = yy;
    }
  }

  return out;
}