let select;
let selectedFractal = 'tree';
let counter = 0;

let treeLsys;
let treeRuleset = [];
let treeRenderer;

let pyramidLsys;
let pyramidRuleset = [];
let pyramidRenderer;

let bushLsys;
let bushRuleset = [];
let bushRenderer;

function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER);
  select = createSelect();
  select.position(10, 10);
  select.option('Tree');
  select.option('Pyramid');
  select.option('Bush');
  select.changed(selectEvent);

  //TODO Create systems and renderer and rulesets arrays
  
  treeRuleset[0] = new Rule('F', "FF+[+F-F-F]-[-F+F+F]");
  treeLsys = new LSystem('F', treeRuleset);
  treeRenderer = new Renderer(treeLsys.getSentence(), height/3, radians(25), width/2, height, -PI/2);

  pyramidRuleset[0] = new Rule('F', "F+F-F-F+F");
  pyramidLsys = new LSystem('F', pyramidRuleset);
  pyramidRenderer = new Renderer(pyramidLsys.getSentence(), 100, PI/2, 0, height, 0);

  bushRuleset[0] = new Rule('F', "F[+FF][-FF]F[-F][+F]F");
  bushLsys = new LSystem('F', bushRuleset);
  bushRenderer = new Renderer(bushLsys.getSentence(), 100, radians(35), width/2, height, -PI/2);
}

function draw() {
  background(0);  
  stroke(255);
  


  // treeRenderer.render();
  // pyramidRenderer.render();
  // bushRenderer.render();
  renderFractal(selectedFractal);

  noLoop();
}

function selectEvent() {
  selectedFractal = select.value().toLowerCase();

  //TODO clear all sentences

  clear();
  background(0);
}



function mousePressed() {
  generateFractal(selectedFractal, counter);
}

function generateFractal(fractal, counter) {
  if (counter < 5) {
    switch (fractal) {
      case 'tree':
        push();
        treeLsys.generate();
        treeRenderer.setString(treeLsys.getSentence());
        treeRenderer.scaleLength(0.5);
        pop();
        break;

      case 'pyramid':
        push();
        pyramidLsys.generate();
        pyramidRenderer.setString(pyramidLsys.getSentence());
        pyramidRenderer.scaleLength(0.5);
        pop();
        break;

      case 'bush':
        push();
        bushLsys.generate();
        bushRenderer.setString(bushLsys.getSentence());
        bushRenderer.scaleLength(0.5);
        pop();
        break;
    
      default:
        break;
    }

    redraw();

    counter++;
  }
}

function renderFractal(fractal) {
  if (counter < 5) {
    switch (fractal) {
      case 'tree':
        treeRenderer.render();
        break;

      case 'pyramid':
        pyramidRenderer.render();
        break;

      case 'bush':
        bushRenderer.render();
        break;
    
      default:
        break;
    }

    redraw();

    counter++;
  }
}