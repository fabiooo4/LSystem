let axiom = 'A';
let lsys;
let ruleset = [];

function setup() {
  // createCanvas(400, 400);
  noCanvas();

  // ruleset[0] = new Rule('A', "ABA");
  // ruleset[1] = new Rule('B', "BBB");
  ruleset[0] = new Rule('A', "ABA");
  ruleset[1] = new Rule('B', "BBB");

  lsys = new LSystem(axiom, ruleset);

  createP(axiom);
}

function draw() {
}

function mousePressed() {
  lsys.generate();
  createP(lsys.getSentence());
}
