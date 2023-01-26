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
  select.option('Bush 0', 0);
  select.option('Bush 1', 1);
  select.option('Bush 2', 2);
  select.option('Bush 3', 3);
  select.option('Pyramid', 4);
  select.option('Leaf', 5);
  select.option('Stick', 6);
  select.option('Algae 1', 7);
  select.changed(selectEvent);

  // Bush 0 fractal
  rulesets.push(new Array(new Rule('F', "FF+[+F-F-F]-[-F+F+F]")));
  lsystems.push(new LSystem('F', rulesets[0]));
  renderers.push(new Renderer(lsystems[0].getSentence(), 200, radians(25), width/2, height, -PI/2));

  // Bush 1 fractal
  rulesets.push(new Array(new Rule('F', "F[+FF][-FF]F[-F][+F]F")));
  lsystems.push(new LSystem('F', rulesets[1]));
  renderers.push(new Renderer(lsystems[1].getSentence(), 150, radians(35), width/2, height, -PI/2));
  
  // Bush 2 fractal
  rulesets.push(new Array(
    new Rule('X', "X[-FFF][+FFF]FX"),
    new Rule('Y', "YFX[+Y][-Y]")
  ));
  lsystems.push(new LSystem('Y', rulesets[2]));
  renderers.push(new Renderer(lsystems[2].getSentence(), 400, radians(25.7), width/2, height, -PI/2));

  // Bush 3 fractal
  rulesets.push(new Array(
    new Rule('V', "[+++W][---W]YV"),
    new Rule('W', "+X[-W]Z"),
    new Rule('X', "-W[+X]Z"),
    new Rule('Y', "YZ"),
    new Rule('Z', "[-FFF][+FFF]F")
  ));
  lsystems.push(new LSystem('VZFFF', rulesets[3]));
  renderers.push(new Renderer(lsystems[3].getSentence(), 130, radians(20), width/2, height-100, -PI/2, 0.8));

  // Pyramid fractal
  rulesets.push(new Array(new Rule('F', "F+F-F-F+F")));
  lsystems.push(new LSystem('F', rulesets[4]));
  renderers.push(new Renderer(lsystems[4].getSentence(), 200, PI/2, 0, height, 0));

  // Leaf fractal
  rulesets.push(new Array(
    new Rule('F', ">F<"),
    new Rule('a', "F[+x]Fb"),
    new Rule('b', "F[-y]Fa"),
    new Rule('x', "a"),
    new Rule('y', "b")
  ));
  lsystems.push(new LSystem('a', rulesets[5]));
  renderers.push(new Renderer(lsystems[5].getSentence(), 4, PI/4, width/2, height, -PI/2, 1, 1.36));

  // Stick fractal
  rulesets.push(new Array(
    new Rule('F', "FF"),
    new Rule('X', "F[+X]F[-X]+X")
  ));
  lsystems.push(new LSystem('X', rulesets[6]));
  renderers.push(new Renderer(lsystems[6].getSentence(), 300, radians(20), width/2, height, -PI/2));

    // Stick fractal
    rulesets.push(new Array(
      new Rule('a', "FFFFFv[+++h][---q]fb"),
      new Rule('b', "FFFFFv[+++h][---q]fc"),
      new Rule('c', "FFFFFv[+++fa]fd"),
      new Rule('d', "FFFFFv[+++h][---q]fe"),
      new Rule('e', "FFFFFv[+++h][---q]fg"),
      new Rule('g', "FFFFFv[---fa]fa"),
      new Rule('h', "ifFF"),
      new Rule('i', "fFFF[--m]j"),
      new Rule('j', "fFFF[--n]k"),
      new Rule('k', "fFFF[--o]l"),
      new Rule('l', "fFFF[--p]"),
      new Rule('m', "fFn"),
      new Rule('n', "fFo"),
      new Rule('o', "fFp"),
      new Rule('p', "fF"),
      new Rule('q', "rfF"),
      new Rule('r', "fFFF[++m]s"),
      new Rule('s', "fFFF[++n]t"),
      new Rule('t', "fFFF[++o]u"),
      new Rule('u', "fFFF[++p]"),
      new Rule('v', "Fv"),
    ));
    lsystems.push(new LSystem('aF', rulesets[7]));
    renderers.push(new Renderer(lsystems[7].getSentence(), 5, radians(12), width/2, height, -PI/2, 1));
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
  if (lsystems[fractal].getGeneration() < 100) {
    push();
    lsystems[fractal].generate();
    renderers[fractal].setString(lsystems[fractal].getSentence());
    renderers[fractal].scaleLength();
    pop();

    generation = lsystems[fractal].getGeneration();
    redraw();
  }
}