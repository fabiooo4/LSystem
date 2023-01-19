class LSystem {
  constructor(axiom, ruleset) {
    this.axiom = axiom; // First character or sentence
    this.sentence = axiom; // Stores the generations
    this.ruleset = ruleset; // Array of rules
    this.generation = 0; // Keeps track of the generation
  }

  generate() {
    // Empty string which will contain the next generation
    let nextGen = "";
    
    // Loops every character of the sentence
    for (const character of this.sentence) {
      // Set the replace string to the character if nothing matches with the rules
      let replace = character;

      // Loop for every rule
      for (const rule of this.ruleset) {
        // Check if character matches the rule
        if (character == rule.getInput()) {
          // Set the replace string to the output of the rule
          replace = rule.getOutput();
        }
      }
      // Concatenate the result to next generation
      nextGen += replace;
    }
    // Set the sentence attribute to the next generation string
    this.sentence = nextGen;

    // Increment the generation count
    this.generation++;
  }

  getSentence() {
    return this.sentence;
  }

  resetSentence() {
    this.sentence = this.axiom;
  }

  getGeneration() {
    return this.generation;
  }

  setGeneration(value) {
    this.generation = value;
  }
}