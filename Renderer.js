class Renderer {
  constructor(string, lineLength, angle, startingX, startingY, initialRotation, scale = 1, lengthFactor = 1) {
    this.string = string;
    this.lineLength = lineLength;
    this.originalLength = this.lineLength;
    this.angle = angle;
    this.startingX = startingX;
    this.startingY = startingY;
    this.initialRotation = initialRotation;
    this.lengthFactor = lengthFactor;
    this.scale = scale;
  }

  render() {
    translate(this.startingX, this.startingY);
    rotate(this.initialRotation);

    for (const c of this.string) {
      switch (c) {
        case 'F':
          // Draw forward by lineLength
          line(0, 0, this.lineLength, 0);
          translate(this.lineLength, 0);
          break;

        case 'f':
          // Move forward by lineLength without drawing
          translate(this.lineLength, 0);
          break;

        case '+':
          // Rotate left by angle
          rotate(-this.angle);
          break;

        case '-':
          // Rotate right by angle
          rotate(this.angle);
          break;

        case '[':
          // Save state
          push();
          break;

        case ']':
          // Load state
          pop();
          break;

        case '>':
          // Multiply the length by lengthFactor
          this.lineLength *= this.lengthFactor
          break
          
        case '<':
          // Divide the length by lengthFactor
          this.lineLength /= this.lengthFactor
          break

        case '|':
          // Reverse direction
          rotate(PI);
          break

        default:
          break;
      }
    }
  }

  setLength(length) {
    this.lineLength = length;
  }

  scaleLength() {
    this.lineLength *= this.scale;
  }

  resetLength() {
    this.lineLength = this.originalLength;
  }

  setString(newString) {
    this.string = newString;
  }

  resetString() {
    this.string = "";
  }
}