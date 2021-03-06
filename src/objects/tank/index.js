import { tankDown, tankLeft, tankRight, tankUp } from './tankMatrix';
import { fire, offsetX, offsetY } from './fireMatrix';
import Ball from '../ball';
import randomStr from 'crypto-random-string';

export default function Chrater(xx, yy, app) {
  let x = xx;
  let y = yy;
  let size = 32;
  let spi = 0;
  let spiMax = 5;
  let model = tankUp;
  let fireState = 0;
  let dir = 'up';
  const speedy = 5;
  const speedx = speedy * 1.5;
  const id = randomStr({ length: 20 });
  const img = app.sprites;

  const out = {
    name: id,
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
          if (!app.isRoadFree(x - speedx, y, size, this.name)) return;
          x = x - speedx;

        },
        KeyK: () => {
          dir = 'down'
          model = tankDown;
          if (!app.isRoadFree(x, y + speedy, size, this.name)) return;
          y = y + speedy;
        },
        KeyL: () => {
          dir = 'up'
          model = tankUp;
          if (!app.isRoadFree(x, y - speedy, size, this.name)) return;
          y = y - speedy;
        },
        Semicolon: () => {
          dir = 'left';
          model = tankLeft;
          if (!app.isRoadFree(x + speedx, y, size, this.name)) return;
          x = x + speedx;
        },
        KeyZ: () => {
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
      const ball = new Ball(x, y, speedx + 10, dir, app);
      app.addFigure(ball);
    },

    getOccupation() {
      return [x, y, size]
    },

    move: function (xx, yy) {
      this.x = xx;
      this.y = yy;
    }
  }

  return out;
}