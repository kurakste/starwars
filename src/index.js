import './styles/main.scss';
import App from './app';
import Character from './objects/tank/figure';

const canva = document.getElementById('cbox');

const app = new App(canva, 'lightblue');
const character = new Character(10,10, app);
app.addMustBeDraw(character);
app.addKeyboardListener(character);
app.init();

setInterval(app.redraw, 50);
