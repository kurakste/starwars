import veg from './vegMatrix';
import randomStr from 'crypto-random-string';

export default function Vegetation(xx, yy, _type, app) {
  let x = xx;
  let y = yy;
  const id = randomStr({length: 20});
  const img = app.sprites;
  const type = _type;
  const size = 32;

  const out = {
    name: id,
    subscrition: ['draw'],

    draw: function (ctx) {
      ctx.drawImage(
        img, veg[type].x, veg[type].y, veg[type].width, veg[type].height, x, y,
        veg[type].width, veg[type].height);
    },
    getOccupation() {
      return [ x, y, size ]
    },

  }

  return out;
}