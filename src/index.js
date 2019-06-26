import './styles/main.scss';
import App from './app';
import Tank from './objects/tank';
import spritesPath from './img/sprites-full.png';
import getSprites from './helpers/spriteLoader';
import Vegetation from './objects/vegetation';

getSprites(spritesPath)
  .then((sprites) => {
    console.log('======= get image: ', sprites);
    const canva = document.getElementById('cbox');
    const app = new App(canva, 'lightblue', sprites);
    const tank = new Tank(10, 10, app);
    const veg = new Vegetation(230, 150, 'first', app);

    app.addFigure(tank);
    app.addFigure(veg);
    app.init();
    setInterval(app.ticker, 50);

  });
