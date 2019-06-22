import sprites from '../../img/sprites-full.png';
import { tankDown, tankLeft, tankRight, tankUp } from './tankMatrix';
import { fire, offsetX, offsetY } from './fireMatrix';

export default function Chrater(xx, yy, app) {

  let x = xx;
  let y = yy;
  const img = new Image();
  img.src = sprites;
  let spi = 0;
  let spiMax = 5;
  let model = tankUp;
  let fireState = 0;
  let dir = 'up';
  const speedy = 5;
  const speedx = speedy * 1.5;

  const out = {
    subscrition: ['draw', 'keyboard'],
    draw: function (ctx) {
      ctx.drawImage(
        img, model[spi].x, model[spi].y, model[spi].width, model[spi].height, x, y,
        model[spi].width, model[spi].height
      );
      if (fireState !== 0) {
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
          x = x - speedx;
        },
        KeyK: () => {
          dir = 'down'
          y = y + speedy;
          model = tankDown;
        },
        KeyL: () => {
          dir = 'up'
          model = tankUp;
          y = y - speedy;
        },
        Semicolon: () => {
          dir = 'left';
          x = x + speedx;
          model = tankLeft;
        },
        Space: () => {
          this.fire();
          console.log(app);
        }
      };

      map[key] && map[key]();
      spi++
      if (spi > spiMax) spi = 1;
    },

    fire: function () {
      fireState = 1;
    },

    move: function (xx, yy) {
      this.x = xx;
      this.y = yy;
    }
  }

  return out;
}