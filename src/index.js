import './styles/main.scss';
import App from './app';
import Character from './objects/tank/figure';

const character = new Character(10,10, 'green');
const canva = document.getElementById('cbox');

const app = new App(canva, 'lightblue');
app.addMustBeDraw(character);
app.addKeyboardListener(character);
app.init();

setInterval(app.redraw, 50);
