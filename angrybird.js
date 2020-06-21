class Birds {
    constructor(x, y,colour) {
      var options = {
        'restitution':0.8,
        'friction':3,
        'density':0.1,
          
      }
      this.body = Bodies.circle(x, y,30, options);
      //this.width = 30;
      //this.height = 30;
     this.colour=colour;
    
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
      stroke("blue");
      fill(this.colour);
      ellipse(0, 0,30);
      pop();
    }
  };