class Renderer {
  constructor(string, lineLength, angle) {
    this.string = string;
    this.lineLength = lineLength;
    this.angle = angle;
  }

  render() {
    for (const c of this.string) {
      switch (c) {
        case 'F':
          line(0, 0, this.lineLength, 0);
          translate(this.lineLength, 0);
          break;

        case 'G':
          translate(this.lineLength, 0);
          break;

        case '+':
          rotate(this.angle);
          break;

        case '-':
          rotate(-this.angle);
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

  setString(newString) {
    this.string = newString;
  }
}