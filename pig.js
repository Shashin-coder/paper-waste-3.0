class Pig {
    constructor(x, y,colour) {
      var options = {
        
      }
      this.body = Bodies.rectangle(x, y, 250,25, options);
      this.width = 30;
      this.height = 30;
     this.colour=colour; 
     this.image = loadImage("paper.png");
      World.add(world, this.body);
   
    }
    display(){
      var angle= this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };