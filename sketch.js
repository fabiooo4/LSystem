let select;
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
  select.option(0);
  select.option(1);
  select.option(2);
  select.changed(selectEvent);

  // Tree fractal
  rulesets.push(new Array(new Rule('F', "FF+[+F-F-F]-[-F+F+F]")));
  lsystems.push(new LSystem('F', rulesets[0]));
  renderers.push(new Renderer(lsystems[0].getSentence(), height/3, radians(25), width/2, height, -PI/2))

  // Pyramid fractal
  rulesets.push(new Array(new Rule('F', "F+F-F-F+F")));
  lsystems.push(new LSystem('F', rulesets[1]));
  renderers.push(new Renderer(lsystems[1].getSentence(), 100, PI/2, 0, height, 0))

  // Bush fractal
  rulesets.push(new Array(new Rule('F', "F[+FF][-FF]F[-F][+F]F")));
  lsystems.push(new LSystem('F', rulesets[2]));
  renderers.push(new Renderer(lsystems[2].getSentence(), 100, radians(35), width/2, height, -PI/2))

  console.log(selectedFractal);
  console.log(rulesets);
  console.log(lsystems);
  console.log(renderers);

}

function draw() {
  background(0);  
  stroke(255);
  
  renderers[selectedFractal].render();

  noLoop();
}

function selectEvent() {
  selectedFractal = select.value();
  
  
  for (const system of lsystems) {
    system.resetSentence();
  }

  for (const renderer of renderers) {
    renderer.resetString();
    renderer.resetLength();
  }

  clear();
  background(0);
}

function mousePressed() {
  generateFractal(selectedFractal, counter);
}

function generateFractal(fractal, counter) {
  console.log(fractal);
  if (counter < 5) {
    push();
    lsystems[fractal].generate();
    renderers[fractal].setString(lsystems[fractal].getSentence());
    renderers[fractal].scaleLength(0.5);
    pop();

    redraw();

    counter++;
  }
}