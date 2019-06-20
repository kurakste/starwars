export default function App(cont, bg) {
  const container = cont;
  const ctx = container.getContext('2d');
  const width = cont.width;
  const height = cont.height;
  const backgroud = bg;

  const objects = []; 

  const out = {
    init: function () {
      console.log('init');
      this.clear();
    },

    clear: function () {
      ctx.fillStyle = backgroud; //backgroud;
      ctx.fillRect(0, 0, width, height);
    },
 
    drowObjects: function() {
      console.log('I drow object!');
      objects.map(el => el.droow(ctx));
    },

    addObject: function(obj) {
      objects.push(obj);
    },

  }

  return out;
}
