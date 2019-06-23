export default function App(cont, bg) {
  const container = cont;
  const ctx = container.getContext('2d');
  const backgroud = bg;
  let that = null;
  
  const observers = {
    draw: [],
    ticker: [],
    keyboard:[]
  };
  
  const out = {
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
    },
    
    removeFigure(figure) {
      console.log('remove figure fierd');
      figure['subscrition'] && figure['subscrition']
      .map(el => {
        const _arr = observers[el].filter(e => e.name!==figure.name);
        observers[el] = _arr;
      })
    },
    
    clear() {
      ctx.fillStyle = backgroud; //backgroud;
      ctx.fillRect(0, 0, this.width, this.height);
    },
    
    redraw: function() {
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
    }
    
  }
  
  return out;
}
