import boxCollides from './helpers/boxCollides';
export default function App(cont, bg, sprt) {
  const container = cont;
  const ctx = container.getContext('2d');
  const backgroud = bg;
  let that = null;

  const observers = {
    draw: [],
    ticker: [],
    keyboard: []
  };

  const out = {
    sprites: sprt,
    width: cont.width,
    height: cont.height,
    init: function () {
      that = this;
      console.log('init');
      this.clear();
      this.redraw();
      document.addEventListener('keypress', evnt => this.keyboardEventFired(evnt.code));
    },

    addFigure(figure) {
      figure['subscrition'] && figure['subscrition']
        .map(el => observers[el].push(figure));
      console.log('oservers:', this.observers);
    },

    removeFigure(figure) {
      console.log('remove figure fierd');
      figure['subscrition'] && figure['subscrition']
        .map(el => {
          const _arr = observers[el].filter(e => e.name !== figure.name);
          observers[el] = _arr;
        })
    },

    clear() {
      ctx.fillStyle = backgroud; //backgroud;
      ctx.fillRect(0, 0, this.width, this.height);
    },

    redraw: function () {
      that.clear();
      observers['draw'].map(el => el.draw(ctx));
    },

    keyboardEventFired(key) {
      console.log('in app keyboard event fierd', key);
      observers['keyboard'].map(el => el.onKeyboardEvent(key));
    },
    ticker() {
      that.redraw();
      observers['ticker'].map(el => el.ticker());
    },
    isRoadFree(x, y, size, id) {
      let res = true
      const pos = [x, y];
      const _observers = observers.draw.filter(el => el.name != id);

      _observers.map(ent => {
        if (!ent.getOccupation) return;
        console.log(ent);
        const [ x1, y1, size1 ] = ent.getOccupation();
        const pos1 = [x1, y1];
        const tmp = !boxCollides(pos, size, pos1, size1);
        res = res && tmp;
        console.log('i check, res is: ', tmp);
      });
      return res;
    }

  }

  return out;
}
