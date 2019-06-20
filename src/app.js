export default function App(cont, bg) {
  const container = cont;
  const ctx = container.getContext('2d');
  const width = cont.width;
  const height = cont.height;
  const backgroud = bg;
  let that = null;

  const mustBeDraw = []; 
  const keyboarListener = [];

  const out = {
    init: function () {
      that = this;
      console.log('init');
      this.clear();
      this.redraw();
      document.addEventListener('keypress', evnt => this.keyboardEventFired(evnt.code));
    },

    clear: function () {
      ctx.fillStyle = backgroud; //backgroud;
      ctx.fillRect(0, 0, width, height);
    },
 
    redraw: function() {
      that.clear();
      mustBeDraw.map(el => el.draw(ctx));
    },

    keyboardEventFired(key) {
      console.log('in app keyboard event fierd', key);
      keyboarListener.map(el => el.onKeyboardEvent(key));
    },

    addMustBeDraw: function(obj) {
      mustBeDraw.push(obj);
    },

    addKeyboardListener(obj) {
      keyboarListener.push(obj);
    },


  }

  return out;
}
