let select;
let button;
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
  select.style('border-radius:7px')
  select.option('Bush 1', 0);
  select.option('Bush 2', 1);
  select.option('Bush 3', 2);
  select.option('Bush 4', 3);
  select.option('Pyramid', 4);
  select.option('Leaf', 5);
  select.option('Stick', 6);
  select.option('Algae 1', 7);
  select.option('Algae 2', 8);
  select.option('Weed', 9);
  select.changed(selectEvent);

  button = createButton('Reset');
  button.position(10, 33);
  button.style('border-radius:7px');
  button.mousePressed(buttonEvent);


  //! Fractal tamplate
  // rulesets.push(new Array(
  //   new Rule('aaa', "aaa"),
  // ));
  // lsystems.push(new LSystem('X', rulesets[6]));
  // renderers.push(new Renderer(lsystems[6].getSentence(), 300, radians(20), width/2, height, -PI/2));

  //! Bush 1
  rulesets.push(new Array(new Rule('F', "FF+[+F-F-F]-[-F+F+F]")));
  lsystems.push(new LSystem('F', rulesets[0]));
  renderers.push(new Renderer(lsystems[0].getSentence(), 200, radians(25), width/2, height, -PI/2));

  //! Bush 2
  rulesets.push(new Array(new Rule('F', "F[+FF][-FF]F[-F][+F]F")));
  lsystems.push(new LSystem('F', rulesets[1]));
  renderers.push(new Renderer(lsystems[1].getSentence(), 150, radians(35), width/2, height, -PI/2));
  
  //! Bush 3
  rulesets.push(new Array(
    new Rule('X', "X[-FFF][+FFF]FX"),
    new Rule('Y', "YFX[+Y][-Y]")
  ));
  lsystems.push(new LSystem('Y', rulesets[2]));
  renderers.push(new Renderer(lsystems[2].getSentence(), 400, radians(25.7), width/2, height, -PI/2));

  //! Bush 4
  rulesets.push(new Array(
    new Rule('V', "[+++W][---W]YV"),
    new Rule('W', "+X[-W]Z"),
    new Rule('X', "-W[+X]Z"),
    new Rule('Y', "YZ"),
    new Rule('Z', "[-FFF][+FFF]F")
  ));
  lsystems.push(new LSystem('VZFFF', rulesets[3]));
  renderers.push(new Renderer(lsystems[3].getSentence(), 130, radians(20), width/2, height-100, -PI/2, 0.8));

  //! Pyramid
  rulesets.push(new Array(new Rule('F', "F+F-F-F+F")));
  lsystems.push(new LSystem('F', rulesets[4]));
  renderers.push(new Renderer(lsystems[4].getSentence(), 200, PI/2, 0, height, 0));

  //! Leaf
  rulesets.push(new Array(
    new Rule('F', ">F<"),
    new Rule('a', "F[+x]Fb"),
    new Rule('b', "F[-y]Fa"),
    new Rule('x', "a"),
    new Rule('y', "b")
  ));
  lsystems.push(new LSystem('a', rulesets[5]));
  renderers.push(new Renderer(lsystems[5].getSentence(), 4, PI/4, width/2, height, -PI/2, 1, 1.36));

  //! Stick
  rulesets.push(new Array(
    new Rule('F', "FF"),
    new Rule('X', "F[+X]F[-X]+X")
  ));
  lsystems.push(new LSystem('X', rulesets[6]));
  renderers.push(new Renderer(lsystems[6].getSentence(), 400  , radians(20), width/2, height, -PI/2));

  //! Algae 1
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
  renderers.push(new Renderer(lsystems[7].getSentence(), 4, radians(12), width/2, height, -PI/2, 1));

  //! Algae 2
  rulesets.push(new Array(
    new Rule('a', "FFFFFy[++++n][----t]fb"),
    new Rule('b', "+FFFFFy[++++n][----t]fc"),
    new Rule('c', "FFFFFy[++++n][----t]fd"),
    new Rule('d', "-FFFFFy[++++n][----t]fe"),
    new Rule('e', "FFFFFy[++++n][----t]fg"),
    new Rule('g', "FFFFFy[+++fa]fh"),
    new Rule('h', "FFFFFy[++++n][----t]fi"),
    new Rule('i', "+FFFFFy[++++n][----t]fj"),
    new Rule('j', "FFFFFy[++++n][----t]fk"),
    new Rule('k', "-FFFFFy[++++n][----t]fl"),
    new Rule('l', "FFFFFy[++++n][----t]fm"),
    new Rule('m', "FFFFFy[---fa]fa"),
    new Rule('n', "ofFFF"),
    new Rule('o', "fFFFp"),
    new Rule('p', "fFFF[-s]q"),
    new Rule('q', "fFFF[-s]r"),
    new Rule('r', "fFFF[-s]"),
    new Rule('s', "fFfF"),
    new Rule('t', "ufFFF"),
    new Rule('u', "fFFFv"),
    new Rule('v', "fFFF[+s]w"),
    new Rule('w', "fFFF[+s]x"),
    new Rule('x', "fFFF[+s]"),
    new Rule('y', "Fy")
  ));
  lsystems.push(new LSystem('aF', rulesets[8]));
  renderers.push(new Renderer(lsystems[8].getSentence(), 1, radians(12), width/2, height, -PI/2, 1));

  //! Weed
  rulesets.push(new Array(
    new Rule('F', "FF-[XY]+[XY]"),
    new Rule('X', "+FY"),
    new Rule('Y', "-FX")
  ));
  lsystems.push(new LSystem('F', rulesets[9]));
  renderers.push(new Renderer(lsystems[9].getSentence(), 5, radians(22.5), width/2, height, -PI/2, 1));

}

function draw() {
  background(0);  
  stroke(255);

  textSize(20);
  fill(255);
  text('Generation: ' + generation, width - 80, 26);

  renderers[selectedFractal].render();

  noLoop();
}

function resetFractal() {
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

function selectEvent() {
  selectedFractal = select.value();
  resetFractal();
}

function buttonEvent() {
  resetFractal();
}

function keyPressed() {
  generateFractal(selectedFractal);
}

function generateFractal(fractal) {
  if (lsystems[fractal].getGeneration() < 100) {
    // Loops through every array to generate the fractal
    push();
    lsystems[fractal].generate();
    renderers[fractal].setString(lsystems[fractal].getSentence());
    renderers[fractal].scaleLength();
    pop();

    generation = lsystems[fractal].getGeneration();
    redraw();
  }
}