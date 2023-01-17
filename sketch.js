function setup() {
  // createCanvas(400, 400);
  noCanvas();
}

function draw() {
}

function mousePressed() {
  generate(axiom);
}

function generate(input) {
  for (let i = 0; i < input.length; i++) {
    createP(i);
  }
}
