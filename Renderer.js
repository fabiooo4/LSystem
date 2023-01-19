class Renderer {
  constructor(string, lineLength, angle, startingX, startingY, initialRotation) {
    this.string = string;
    this.originalLength = lineLength;
    this.lineLength = lineLength;
    this.angle = angle;
    this.startingX = startingX;
    this.startingY = startingY;
    this.initialRotation = initialRotation;
  }

  render() {
    translate(this.startingX, this.startingY);
    rotate(this.initialRotation);

    for (const c of this.string) {
      switch (c) {
        case 'F':
          line(0, 0, this.lineLength, 0);
          translate(this.lineLength, 0);
          break;

        case 'f':
          translate(this.lineLength, 0);
          break;

        case '+':
          rotate(-this.angle);
          break;

        case '-':
          rotate(this.angle);
          break;

        case '[':
          push();
          break;

        case ']':
          pop();
          break;
      
        default:
          break;
      }
    }
  }

  setLength(length) {
    this.lineLength = length;
  }

  scaleLength(scale) {
    this.lineLength *= scale;
  }

  resetLength() {
    this.linelength = this.originalLength;
  }

  getLength() {
    return this.linelength;
  }

  setString(newString) {
    this.string = newString;
  }

  resetString() {
    this.string = "";
  }
}