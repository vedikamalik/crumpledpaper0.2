
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var ball;

function setup() {
createCanvas(1000,1000);
engine = Engine.create();
world = engine.world;

  ground = new Ground(800,650,2000,10);
  box = new Box(800,550,200,200);
  ball = new Ball(300,610,40);
}


function draw() {
 
  Engine.run(engine);
  background("white");
  ball.display();
  ground.display();
  box.display();

 
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
  Matter.Body.applyForce(ball.body, ball.body.position,{x:95,y:-85})
}
}