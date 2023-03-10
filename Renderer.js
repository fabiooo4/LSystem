let cam = new Camera(1, 950, 488);
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
    this.strokeWeight = 1;
  }

  render() {
    strokeWeight(this.strokeWeight);
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

  resetCamera() {
    cam.reset();
    this.strokeWeight = 1;
  } 

  moveCamera() {
    cam.translate(cam.pmouseX - cam.mouseX, cam.pmouseY - cam.mouseY);
  }
  
  zoomCamera(e) {
    var factor = Math.pow(1.001, -e.delta);
    cam.scale(factor, mouseX, mouseY);

    // Stroke weight maintains a constant size on the screen
    this.strokeWeight /= factor;
  }
}