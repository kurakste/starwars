import { bro } from './bro';
import './styles/main.scss';
import ship_src from './img/ship.svg';

let canv = document.getElementById('cbox');
let ctx = canv.getContext('2d');
//ctx.scale(2, 2)

let ship = new Image();
ship.src = ship_src;
ship.style.width = '40px';
ship.onload = () => {
  ctx.drawImage(ship, 2, 2, 30, 20);;
}
document.body.appendChild(ship);


ctx.fillStyle = 'rgb(200, 0, 0)';
ctx.fillRect(10, 200);

ctx.fillStyle = 'rgba(0, 0, 200, 0.7)';

console.log(canv);