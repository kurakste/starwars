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
    const veg1 = new Vegetation(130, 250, 'first', app);
    const veg2 = new Vegetation(30, 350, 'first', app);
    const veg3 = new Vegetation(230, 50, 'first', app);

    app.addFigure(tank);
    app.addFigure(veg);
    app.addFigure(veg1);
    app.addFigure(veg2);
    app.addFigure(veg3);
    app.init();
    setInterval(app.ticker, 50);

  });
