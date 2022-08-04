class PlayerArrow {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      density: 0.1
    };
    this.width = width;
    this.height = height;

    // this.body = Bodies.rectangle(x, y, this.width, this.height);
    // this.body = Body.rectangle(x, y, this.width, this.height, options);
    // this.body = Bodies.rectangle(x, y, options);
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
  }

  shoot(archerAngle) {
    archerAngle += 90;
    var anguloRadiano = archerAngle *(Math.PI/180);
    var velocity = p5.Vector.fromAngle(anguloRadiano);
    velocity.mult(5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { 
      x: velocity.x *(180/Math.PI), 
      y: velocity.y *(180/Math.PI) });
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
