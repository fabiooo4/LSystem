let axiom = 'A';
let ruleset = [];

function setup() {
  // createCanvas(400, 400);
  noCanvas();

  ruleset[0] = new Rule('A', "ABA");
  ruleset[1] = new Rule('B', "BBB");
}

function draw() {
}

function mousePressed() {
  generate(axiom);
}

function generate(input) {
  for (const c of axiom) {
    for (let i = 0; i < input.length; i++) {
      createP(c);
    }
  }
}
