class Log {
    constructor(x, y,colour,angle,height,width) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, height,width, options);
      this.width = width;
      this.height = height
     this.colour=colour;
     Matter.Body.setAngle(this.body, angle) 
      World.add(world, this.body);
    }
    display(){
      var angle= this.body.angle;
      angleMode(DEGREES)
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill(this.colour);
      rect(0, 0, this.width,this.height);
      pop();
    }
  };