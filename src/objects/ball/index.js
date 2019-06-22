import sprites from '../../img/sprites-full.png';

export default function Ball(xx, yy, speed, app) {

  let x = xx;
  let y = yy;
  const speedy = speed;
  const speedx = speedy * 1.5;
  const img = new Image();
  img.src = sprites;
  let spi = 0;
  let spiMax = 5;
  let fireState = 0;
  let dir = 'up';

  const out = {
    subscrition: ['draw', 'keyboard'],
    draw: function (ctx) {
      console.log('ball was drawed');
    }

  }

  return out;
}