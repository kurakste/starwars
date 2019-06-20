import './styles/main.scss';
import mt from 'mousetrap';
import App from './app';

mt.bind('4', () => console.log('!!!!'));
const canva = document.getElementById('cbox', 'lightgray');

const app = new App(canva, 'lightgrey');

console.log(app);

app.init();