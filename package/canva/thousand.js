var th = {
canvas: null, 
p: null,
init(Idcanvaid) {
canvas = document.getElementById(Idcanvaid);
 if (!canvas) {
console.error("Object input element cannot find canvas");
return;
 }

},
 ctx(typecan) {
    if (typecan.toLowerCase() === "3d" || typecan === "3D") {typecan === "webgl"}
    this.p = canvas.getContext(typecan);
},
 boxcolid(x,y,x1,y1) {

},


rect(x, y, w, h, c) {
    if (this.p) {
        this.p.fillStyle = c;
        this.p.fillRect(x, y, w, h);
    } else {
        console.error("ctx its not define");
    }
},
    text(txt, x, y, c, tmh) {
        if (this.p) {
            this.p.fillStyle = c;
            this.p.font = tmh + "px sans-serif";
            this.p.fillText(txt, x, y);
        } else if (this.x === 0 || this.y === 0 || this.tmh === 0) {
            console.error("this text not will never be found");
        }
        
    },
    cube(x,y,z,c1,c2,c3) {
        t = z
  this.p.fillStyle = c1;
  this.p.beginPath();
  this.p.moveTo(x, y);
  this.p.lineTo(x + t, y - t / 2);
  this.p.lineTo(x + 2 * t, y);
  this.p.lineTo(x + t, y + t / 2);
  this.p.closePath();
  this.p.fill();

  this.p.fillStyle = c2;
  this.p.beginPath();
  this.p.moveTo(x, y);
  this.p.lineTo(x + t, y + t / 2);
  this.p.lineTo(x + t, y + t + t / 2);
  this.p.lineTo(x, y + t);
  this.p.closePath();
  this.p.fill();

  
  this.p.fillStyle = c3;
  this.p.beginPath();
  this.p.moveTo(x + 2 * t, y);
  this.p.lineTo(x + t, y + t / 2);
  this.p.lineTo(x + t, y + t + t / 2);
  this.p.lineTo(x + 2 * t, y + t);
  this.p.closePath();
  this.p.fill();
    },
    ellipse(x,y,w,h) {
    if (this.p) {
        this.p.beginPath();
        this.p.ellipse(x, y, w / 2, h / 2, 0, 0, Math.PI * 2);
        this.p.fill();
    } else {
        console.error("ctx cannot define");
    }
    }
}
// def function the bibliotec public
window.th = th;

