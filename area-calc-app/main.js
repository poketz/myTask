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
