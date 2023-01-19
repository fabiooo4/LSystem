let select;
let generation = 0;
let selectedFractal = 0;
let counter = 0;

let lsystems = [];
let rulesets = [];
let renderers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER);
  select = createSelect();
  select.position(10, 10);
  select.option('Tree', 0);
  select.option('Pyramid', 1);
  select.option('Bush', 2);
  select.changed(selectEvent);

  // Tree fractal
  rulesets.push(new Array(new Rule('F', "FF+[+F-F-F]-[-F+F+F]")));
  lsystems.push(new LSystem('F', rulesets[0]));
  renderers.push(new Renderer(lsystems[0].getSentence(), 200, radians(25), width/2, height, -PI/2))

  // Pyramid fractal
  rulesets.push(new Array(new Rule('F', "F+F-F-F+F")));
  lsystems.push(new LSystem('F', rulesets[1]));
  renderers.push(new Renderer(lsystems[1].getSentence(), 200, PI/2, 0, height, 0))

  // Bush fractal
  rulesets.push(new Array(new Rule('F', "F[+FF][-FF]F[-F][+F]F")));
  lsystems.push(new LSystem('F', rulesets[2]));
  renderers.push(new Renderer(lsystems[2].getSentence(), 150, radians(35), width/2, height, -PI/2))
}

function draw() {
  background(0);  
  stroke(255);
  
  textSize(20);
  fill(255);
  text(' Generation: ' + generation, 150, 26);

  renderers[selectedFractal].render();

  noLoop();
}

function selectEvent() {
  selectedFractal = select.value();
  
  for (const system of lsystems) {
    system.resetSentence();
    system.setGeneration(0);
  }

  for (const renderer of renderers) {
    renderer.resetString();
    renderer.resetLength();
  }

  clear();
  background(0);
}

function keyPressed() {
  generateFractal(selectedFractal);
}

function generateFractal(fractal) {
  if (lsystems[fractal].getGeneration() < 5) {
    push();
    lsystems[fractal].generate();
    renderers[fractal].setString(lsystems[fractal].getSentence());
    renderers[fractal].scaleLength(0.5);
    pop();

    generation = lsystems[fractal].getGeneration();
    console.log(generation);
    redraw();
  }
}