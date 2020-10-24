var wall1, wall2, wall3
var paperObject
var ball, ground, groundSprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(width/2, 650, width, 20);

	paperObject = new Paper(10, 0);
	
	wall1 = new dustbin(430, 590, 10, 70);
	wall2 = new dustbin(570,590, 10, 70);
	wall3 = new dustbin(500, 630, 150, 10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  paperObject.display();
  wall1.display();
  wall2.display();
  wall3.display();
  keyPressed();
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:0.0025, y:-0.0045})
	}
}