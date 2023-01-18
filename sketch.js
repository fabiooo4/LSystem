let treeLsys;
let treeRuleset = [];
let treeRenderer;

let squareLsys;
let squareRuleset = [];
let squareRenderer;

function setup() {
  createCanvas(600, 600);
  
  treeRuleset[0] = new Rule('F', "FF+[+F-F-F]-[-F+F+F]");
  treeLsys = new LSystem('F', treeRuleset);
  treeRenderer = new Renderer(treeLsys.getSentence(), height/3, radians(25), width/2, height, -PI/2);

  squareRuleset[0] = new Rule('F', "F+F-F-F+F");
  squareLsys = new LSystem('F', squareRuleset);
  squareRenderer = new Renderer(squareLsys.getSentence(), 100, PI/2, 0, height, 0);

}

function draw() {
  background(0);  
  stroke(255);
  
  // treeRenderer.render();
  squareRenderer.render();
  noLoop();
}

let counter = 0;

function mousePressed() {
  if (counter < 5) {
    push();
    // treeLsys.generate();
    // treeRenderer.setString(treeLsys.getSentence());
    // treeRenderer.scaleLength(0.5);

    squareLsys.generate();
    squareRenderer.setString(squareLsys.getSentence());
    squareRenderer.scaleLength(0.5);
    pop();

    redraw();

    counter++;
  }
}
