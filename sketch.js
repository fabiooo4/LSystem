p5.disableFriendlyErrors = true;

let select;
let button;
let paragraph;

let selectedFractal = 0;
let counter = 0;

let lsystems = [];
let rulesets = [];
let renderers = [];

function loadDomElements() {
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
  select.option('Triangle', 10);
  select.option('Quadratic Gosper', 11);
  select.option('Hexagonal Gosper', 12);
  select.option('Square Sierpinski', 13);
  select.option('Sierpinski Arrowhead', 14);
  select.option('Classic Sierpinski Curve', 15);
  select.option('Crystal', 16);
  select.option('Peano Curve', 17);
  select.option('Koch Curve', 18);
  select.option('Quadratic Snowflake', 19);
  select.option('Quadratic Kock Island 1', 20);
  select.option('Quadratic Kock Island 2', 21);
  select.option('Quadratic Kock Island 3', 22);
  select.option('Board', 23);
  select.option('Hilbert', 24);
  select.option('Von Koch Snowflake', 25);
  select.option('Cross 1', 26);
  select.option('Cross 2', 27);
  select.option('Pentaplexity', 28);
  select.option('Tiles', 29);
  select.option('Rings', 30);
  select.option('Dragon Curve', 31);
  select.option('Lévy Curve', 32);
  select.option('Krishna Anklets', 33);
  select.option('Mango Leaf', 34);
  select.option('Kolam', 35);
  select.option('Snake Kolam', 36);
  select.changed(selectEvent);


  button = createButton('Reset');
  button.position(10, 33);
  button.style('border-radius:7px');
  button.mousePressed(buttonEvent);

  paragraph = createP('Generation: ' + 0);
  paragraph.position(width - 150, 10);
  paragraph.style('font-size: 20px; color: white; font-family: Arial; text-align: center;');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadDomElements();

  //! Bush 1
  rulesets.push(new Array(
    new Rule('F', "FF+[+F-F-F]-[-F+F+F]")
  ));
  lsystems.push(new LSystem('F', rulesets[0]));
  renderers.push(new Renderer(lsystems[0].getSentence(), 200, radians(25), width/2, height, -PI/2, 0.5));

  //! Bush 2
  rulesets.push(new Array(
    new Rule('F', "F[+FF][-FF]F[-F][+F]F")
  ));
  lsystems.push(new LSystem('F', rulesets[1]));
  renderers.push(new Renderer(lsystems[1].getSentence(), 150, radians(35), width/2, height, -PI/2, 0.5));
  
  //! Bush 3
  rulesets.push(new Array(
    new Rule('X', "X[-FFF][+FFF]FX"),
    new Rule('Y', "YFX[+Y][-Y]")
  ));
  lsystems.push(new LSystem('Y', rulesets[2]));
  renderers.push(new Renderer(lsystems[2].getSentence(), 400, radians(25.7), width/2, height, -PI/2, 0.5));

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
  rulesets.push(new Array(
    new Rule('F', "F+F-F-F+F")
  ));
  lsystems.push(new LSystem('F', rulesets[4]));
  renderers.push(new Renderer(lsystems[4].getSentence(), 200, PI/2, 0, height, 0, 0.5));

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
  renderers.push(new Renderer(lsystems[6].getSentence(), 400  , radians(20), width/2, height, -PI/2, 0.5));

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
  renderers.push(new Renderer(lsystems[7].getSentence(), 4, radians(12), width/2, height, -PI/2));

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
  renderers.push(new Renderer(lsystems[8].getSentence(), 1, radians(12), width/2, height, -PI/2));

  //! Weed
  rulesets.push(new Array(
    new Rule('F', "FF-[XY]+[XY]"),
    new Rule('X', "+FY"),
    new Rule('Y', "-FX")
  ));
  lsystems.push(new LSystem('F', rulesets[9]));
  renderers.push(new Renderer(lsystems[9].getSentence(), 5, radians(22.5), width/2, height, -PI/2));

  //! Triangle
  rulesets.push(new Array(
    new Rule('F', "F-F+F")
  ));
  lsystems.push(new LSystem('F+F+F', rulesets[10]));
  renderers.push(new Renderer(lsystems[10].getSentence(), 100, radians(120), width/2, height/2 - 150, -PI/2, 0.7));

  //! Quadratic Gosper
  rulesets.push(new Array(
    new Rule('X', "XFX-YF-YF+FX+FX-YF-YFFX+YF+FXFXYF-FX+YF+FXFX+YF-FXYF-YF-FX+FX+YFYF-"),
    new Rule('Y', "+FXFX-YF-YF+FX+FXYF+FX-YFYF-FX-YF+FXYFYF-FX-YFFX+FX+YF-YF-FX+FX+YFY")

  ));
  lsystems.push(new LSystem('-YF', rulesets[11]));
  renderers.push(new Renderer(lsystems[11].getSentence(), 100, PI/2, 0, height, -PI/2, 0.53));

  //! Hexagonal Gosper
  rulesets.push(new Array(
    new Rule('X', "X+YF++YF-FX--FXFX-YF+"),
    new Rule('Y', "-FX+YFYF++YF+FX--FX-Y")
  ));
  lsystems.push(new LSystem('XF', rulesets[12]));
  renderers.push(new Renderer(lsystems[12].getSentence(), 200, radians(60), width/2 + 200, height/2 - 200, -PI/2, 0.5));

  //! Square Sierpinski
  rulesets.push(new Array(
    new Rule('X', "XF-F+F-XF+F+XF-F+F-X")
  ));
  lsystems.push(new LSystem('F+XF+F+XF', rulesets[13]));
  renderers.push(new Renderer(lsystems[13].getSentence(), 200, PI/2, width/2 + 250, height/2, -PI/2, 0.5));

  //! Sierpinski Arrowhead
  rulesets.push(new Array(
    new Rule('X', "YF+XF+Y"),
    new Rule('Y', "XF-YF-X")
  ));
  lsystems.push(new LSystem('YF', rulesets[14]));
  renderers.push(new Renderer(lsystems[14].getSentence(), 900, radians(60), width/2, height, -PI/2, 0.5));

  //! Classic Sierpinski Curve
  rulesets.push(new Array(
    new Rule('X', "XF+F+XF--F--XF+F+X")
  ));
  lsystems.push(new LSystem('F--XF--F--XF', rulesets[15]));
  renderers.push(new Renderer(lsystems[15].getSentence(), 330, PI/4, width/2 - 450, height/2, -PI/2, 0.48));

  //! Crystal
  rulesets.push(new Array(
    new Rule('F', "FF+F++F+F")
  ));
  lsystems.push(new LSystem('F+F+F+F', rulesets[16]));
  renderers.push(new Renderer(lsystems[16].getSentence(), 900, PI/2, width - 450, height, -PI/2, 1/3));

  //! Peano Curve
  rulesets.push(new Array(
    new Rule('X', "XFYFX+F+YFXFY-F-XFYFX"),
    new Rule('Y', "YFXFY-F-XFYFX+F+YFXFY")
  ));
  lsystems.push(new LSystem('X', rulesets[17]));
  renderers.push(new Renderer(lsystems[17].getSentence(), 970, PI/2, width - 450, height, -PI/2, 1/3));

  //! Koch Curve
  rulesets.push(new Array(
    new Rule('F', "F+F-F-FF+F+F-F")
  ));
  lsystems.push(new LSystem('F+F+F+F', rulesets[18]));
  renderers.push(new Renderer(lsystems[18].getSentence(), 550, PI/2, width/2 + 250, height - 200, -PI/2, 1/4));

  //! Quadratic Snowflake
  rulesets.push(new Array(
    new Rule('F', "F+F-F-F+F")
  ));
  lsystems.push(new LSystem('FF+FF+FF+FF', rulesets[19]));
  renderers.push(new Renderer(lsystems[19].getSentence(), 450, -PI/2, width/2 - 450, height - 30, -PI/2, 1/3));

  //! Quadratic Kock Island 1
  rulesets.push(new Array(
    new Rule('F', "F+F-F-FFF+F+F-F")
  ));
  lsystems.push(new LSystem('F+F+F+F', rulesets[20]));
  renderers.push(new Renderer(lsystems[20].getSentence(), 450, PI/2, width/2 + 150, height - 150, -PI/2, 1/4));

  //! Quadratic Kock Island 2
  rulesets.push(new Array(
    new Rule('F', "F-FF+FF+F+F-F-FF+F+F-F-FF-FF+F"),
  ));
  lsystems.push(new LSystem('F+F+F+F', rulesets[21]));
  renderers.push(new Renderer(lsystems[21].getSentence(), 500, PI/2, width/2 + 280, height - 230, -PI/2, 1/6));

  //! Quadratic Kock Island 3
  rulesets.push(new Array(
    new Rule('X', "X+YF++YF-FX--FXFX-YF+X"),
    new Rule('Y', "-FX+YFYF++YF+FX--FX-YF")
  ));
  lsystems.push(new LSystem('X+X+X+X+X+X+X+X', rulesets[22]));
  renderers.push(new Renderer(lsystems[22].getSentence(), 600, PI/4, width/2 + 300, height/2 - 180, -PI/2, 0.15));

  //! Board
  rulesets.push(new Array(
    new Rule('F', "FF+F+F+F+FF"),
  ));
  lsystems.push(new LSystem('F+F+F+F', rulesets[23]));
  renderers.push(new Renderer(lsystems[23].getSentence(), 900, PI/2, width - 500, height - 40, -PI/2, 1/3));

  //! Hilbert
  rulesets.push(new Array(
    new Rule('X', "-YF+XFX+FY-"),
    new Rule('Y', "+XF-YFY-FX+")
  ));
  lsystems.push(new LSystem('X', rulesets[24]));
  renderers.push(new Renderer(lsystems[24].getSentence(), 900, PI/2, width/2 - 400, height - 40, -PI/2, 1/2));

  //! Von Koch Snowflake
  rulesets.push(new Array(
    new Rule('F', "F-F++F-F")
  ));
  lsystems.push(new LSystem('F++F++F', rulesets[25]));
  renderers.push(new Renderer(lsystems[25].getSentence(), 900, radians(60), width/2 + 300, height - 40, -PI/2, 1/3));

  //! Cross 1
  rulesets.push(new Array(
    new Rule('F', "F+FF++F+F")
  ));
  lsystems.push(new LSystem('F+F+F+F', rulesets[26]));
  renderers.push(new Renderer(lsystems[26].getSentence(), 300, PI/2, width/2, height/2 - 180, -PI/2, 1/2));

  //! Cross 2
  rulesets.push(new Array(
    new Rule('F', "F+F-F+F+F")
  ));
  lsystems.push(new LSystem('F+F+F+F', rulesets[27]));
  renderers.push(new Renderer(lsystems[27].getSentence(), 300, PI/2, width/2 + 100, height - 150, -PI/2, 1/2));

  //! Pentaplexity
  rulesets.push(new Array(
    new Rule('F', "F++F++F|F-F++F")
  ));
  lsystems.push(new LSystem('F++F++F++F++F', rulesets[28]));
  renderers.push(new Renderer(lsystems[28].getSentence(), 550, radians(36), width/2 + 250, height - 80, -radians(72), 0.382));

  //! Tiles
  rulesets.push(new Array(
    new Rule('F', "FF+F-F+F+FF")
  ));
  lsystems.push(new LSystem('F+F+F+F', rulesets[29]));
  renderers.push(new Renderer(lsystems[29].getSentence(), 10, PI/2, width/2, height/2 + 10, -PI/2, 1));

  //! Rings
  rulesets.push(new Array(
    new Rule('F', "FF+F+F+F+F+F-F")
  ));
  lsystems.push(new LSystem('F+F+F+F', rulesets[30]));
  renderers.push(new Renderer(lsystems[30].getSentence(), 500, PI/2, width/2 + 250, height/2, -PI/2, 1/3));

  //! Dragon Curve
  rulesets.push(new Array(
    new Rule('X', "X+YF+"),
    new Rule('Y', "-FX-Y")
  ));
  lsystems.push(new LSystem('FX', rulesets[31]));
  renderers.push(new Renderer(lsystems[31].getSentence(), 8, PI/2, width/2, height/2, -PI/2));

  //! Lévy Curve
  rulesets.push(new Array(
    new Rule('F', "-F++F-")
  ));
  lsystems.push(new LSystem('F', rulesets[32]));
  renderers.push(new Renderer(lsystems[32].getSentence(), 750, PI/4, width/2 - 375, height/2 - 280, 0, 0.7073));

  //! Krishna Anklets
  rulesets.push(new Array(
    new Rule('X', "XFX--XFX")
  ));
  lsystems.push(new LSystem('-X--X', rulesets[33]));
  renderers.push(new Renderer(lsystems[33].getSentence(), 750, PI/4, width/2 - 450, height/2, -PI/2, 0.49));

  //! Mango Leaf
  rulesets.push(new Array(
    new Rule('X', "F-FF-F--[--X]F-FF-F--F-FF-F--"),
    new Rule('Y', "af-F+X+F-fYaa")
  ));
  lsystems.push(new LSystem('Y---Y', rulesets[34]));
  renderers.push(new Renderer(lsystems[34].getSentence(), 10, radians(60), width/2, height, -PI/2));

  //! Kolam
  rulesets.push(new Array(
    new Rule('A', "F++FFFF--F--FFFF++F++FFFF--F"),
    new Rule('B', "F--FFFF++F++FFFF--F--FFFF++F"),
    new Rule('C', "BFA--BFA"),
    new Rule('D', "CFC--CFC")
  ));
  lsystems.push(new LSystem('-D--D', rulesets[35]));
  renderers.push(new Renderer(lsystems[35].getSentence(), 30, PI/4, width/2 - 370, height/2, -PI/2));

  //! Snake Kolam
  rulesets.push(new Array(
    new Rule('X', "XF-F-F+XF+F+XF-F-F+X")
  ));
  lsystems.push(new LSystem('F+XF+F+XF', rulesets[36]));
  renderers.push(new Renderer(lsystems[36].getSentence(), 10, PI/2, width/2 + 935, height, -PI/2));
}

function draw() {
  background(0);  
  stroke(255);

  renderers[selectedFractal].render();
  
  paragraph.html(`Generation: ${lsystems[selectedFractal].getGeneration()}`);
}

function resetFractal() {
  for (const system of lsystems) {
    system.resetSentence();
    system.setGeneration(0);
  }

  for (const renderer of renderers) {
    renderer.resetString();
    renderer.resetLength();
    renderer.resetCamera();
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
  }
}

function mouseDragged() {
  renderers[selectedFractal].moveCamera();
}

function mouseWheel(event) {
  renderers[selectedFractal].zoomCamera(event);
}