let lsys;
let ruleset = [];
let renderer;

function setup() {
  createCanvas(600, 600);
  
  ruleset[0] = new Rule('F', "FF+[+F-F-F]-[-F+F+F]");
  // ruleset[0] = new Rule('F', "F+F-F-F+F");
  lsys = new LSystem('F', ruleset);
  renderer = new Renderer(lsys.getSentence(), height/3, radians(25));
}

function draw() {
  background(0);  

  translate(width/2, height);
  rotate(-PI/2);
  stroke(255);
  renderer.render();
  noLoop();
}

let counter = 0;

function mousePressed() {
  if (counter < 5) {
    push();
    lsys.generate();
    renderer.setString(lsys.getSentence());
    renderer.scaleLength(0.5);
    console.log(lsys.getSentence());
    pop();
    redraw();
    counter++;
  }
}
