
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof;

function preload()
{
	bob1=new Bob(400,600,40);
	bob2=new Bob(450,600,40);
	bob3=new Bob(500,600,40);
	bob4=new Bob(550,600,40);
	bob5=new Bob(600,600,40);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	Engine.update(engine);
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



