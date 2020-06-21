const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var log1,basket;


function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
    log1=new Log(450,300,"blue",180,120,10);
    log2=new Log(420+100+30,300,"blue",180,120,10);
    log3=new Log(500,350,"blue",90,100,10);
    basket=new Replica(500,290,"blue",360,130,120);
    log1.visible=false;
    log2.visible=false;
    log3.visible=false;

   ball1=new Pig(50,150,"red") 
slingshot=new SlingShot(ball1.body,{x:150,y:75})
   
   
    
    ground1= new ground(300,370,600,30);
}

function draw(){
    background(255);
    Engine.update(engine);
  //  keyPressed();
  
  
  

  ball1.display();
 basket.display();
 ground1.display();
 slingshot.display();
   
    
    
   
}
function keyPressed(){
    if (keyCode=== UP_ARROW){
      Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0.03,y:-0.0129});
    }
  }
  function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    slingshot.fly();
  }