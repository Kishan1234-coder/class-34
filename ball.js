class Ball{
    constructor(x, y) {
        var options = {
            'frictionAir':0.005,
            'density': 1.0
        }
        this.body = Bodies.circle(x, y,80, options);
        this.diameter = 80;
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("black");
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.diameter);
        pop();
      }
}