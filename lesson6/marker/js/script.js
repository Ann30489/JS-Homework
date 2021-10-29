class Marker {
  constructor(c, p) {
    this.c = c;
    this.p = p;
  }
  get markerProps() {
    return [this.c, this.p];
  }

  set markerProps(newProps) {
    [this.c, this.p] = [...newProps];
  }

  print(line) {
    let t = document.getElementById("info-block");
    for (let i = 0; i < line.length; i++) {
      if (this.p != 0) {
        if (line[i] == " ") {
          this.p += 0.5;
        }
        t.innerHTML += line[i];
        t.style.color = this.c;
        this.p -= 0.5;
      } else {
        document.write("Ink in the marker is over :(");
        break;
      }
    }
  }
}

class FilledMarker extends Marker {
  fill(p) {
    if (p > 100) {
      p = 100;
    } else {
      this.p += p;
    }
  }
}

let marker = new FilledMarker("#00CED1", 5);

marker.fill(50);

const l = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

marker.print(l);
document.body.setAttribute("style", "font-size: 40px; text-align: center;");