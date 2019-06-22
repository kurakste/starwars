
export default function App(cont, bg) {
  const container = cont;
  const ctx = container.getContext('2d');
  const width = cont.width;
  const height = cont.height;
  const backgroud = bg;
  let that = null;

  const observers = {
    draw: [],
    tic: [],
    keyboard:[]
  };

  const out = {
    init: function () {
      that = this;
      console.log('init');
      this.clear();
      this.redraw();
      document.addEventListener('keypress', evnt => this.keyboardEventFired(evnt.code));
    },

    addFigure: function(figure) {
      figure['subscrition'] && figure['subscrition']
        .map(el => observers[el].push(figure)); 
    },

    clear: function () {
      ctx.fillStyle = backgroud; //backgroud;
      ctx.fillRect(0, 0, width, height);
    },
 
    redraw: function() {
      that.clear();
      observers['draw'].map(el => el.draw(ctx));
    },

    keyboardEventFired(key) {
      console.log('in app keyboard event fierd', key);
      observers['keyboard'].map(el => el.onKeyboardEvent(key));
    },

  }

  return out;
}
