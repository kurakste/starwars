import sprites from '../../img/sprites-full.png';
import ball from './ballMatrix';
import spriteLoader from '../../helpers/spriteLoader';
import randomStr from 'crypto-random-string';

export default function Ball(xx, yy, speed, directions, app) {
  let x = xx;
  let y = yy;
  const speedy = speed;
  const speedx = speedy * 1.5;
  const img = new Image();
  img.src = sprites;
  let dir = directions || 'right';
  const id = randomStr({length: 20});

  const out = {
    name: id,
    subscrition: ['draw', 'ticker'],

    draw: function (ctx) {
      ctx.drawImage(
        img, ball[dir].x, ball[dir].y, ball[dir].width, ball[dir].height, x, y,
        ball[dir].width, ball[dir].height);
    },

    go() {
      const movement = {
        right() { x = x - speedx},
        left() { x = x + speedx },
        up() { y = y - speedy },
        down() { y = y + speedy },
      }
      movement[dir]();
      this.outOfFieldCheck()
    },

    outOfFieldCheck() {
      if (x <= 0 || x>= app.width || y<=0 || y>=app.height) app.removeFigure(this);
    },

    ticker() {
      this.go();
    }
  }

  return out;
}