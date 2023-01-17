class Rule {
  constructor(input, output) {
    this.input = input; // Input character
    this.output = output; // What input should become
  }

  getInput() {
    return this.input;
  }

  getOutput() {
    return this.output;
  }
}