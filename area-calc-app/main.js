class Shape {
  constructor(color, type) {
    this.color = color;
    this.type = type;
  }
  property() {
    return `これは${this.color}色の${this.type}です`;
  }
  hello() {
    return `みなさんこんにちは！`;
  }
}

let shape = new Shape("青", "五角形");
console.log(shape.property(), shape.hello());

class Circle extends Shape {
  constructor(color, radius) {
    super(color, "円");
    this.radius = radius;
  }
  area() {
    return 3.14 * this.radius * this.radius;
  }
}

let circle = new Circle("紫", "50");
console.log(circle.area());
