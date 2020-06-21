class Box {
  constructor(x, y, width, height,colour) {
    var options = {
      isStatic:true
    }
    this.body = Bodies.rectangle(x, y, width, height, options,colour);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var angle= this.body.angle;
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    
    rect(0, 0, this.width, this.height,this.colour);
    pop();
  }
};
