import './styles/main.scss';
import App from './app';
import Tank from './objects/tank';
import spritesPath from './img/sprites-full.png';
import getSprites from './helpers/spriteLoader';

getSprites(spritesPath)
  .then((sprites) => {
    console.log('======= get image: ', sprites);
    const canva = document.getElementById('cbox');
    const app = new App(canva, 'lightblue', sprites);
    const tank = new Tank(10, 10, app);

    app.addFigure(tank);
    app.init();
    setInterval(app.ticker, 50);

  });
