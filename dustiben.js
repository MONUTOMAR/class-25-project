class Dustiben {
    constructor(x, y,width, height,angle) {
      var options = {
          
        isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2,
			
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = this.width;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };




