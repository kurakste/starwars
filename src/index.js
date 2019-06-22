import './styles/main.scss';
import App from './app';
import Character from './objects/tank/figure';
import Ball from './objects/ball';

const canva = document.getElementById('cbox');

const app = new App(canva, 'lightblue');
const tank = new Character(10,10, app);
const ball = new Ball(100, 100, 10, app);

app.addFigure(tank);
app.addFigure(ball);

app.init();

setInterval(app.redraw, 50);
