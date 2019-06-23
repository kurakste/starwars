import './styles/main.scss';
import App from './app';
import Tank from './objects/tank';

const canva = document.getElementById('cbox');

const app = new App(canva, 'lightblue');
const tank = new Tank(10,10, app);

app.addFigure(tank);
app.init();

setInterval(app.ticker, 50);
