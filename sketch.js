
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	paper = new Paper(40,20,30);
	box1 = new Dustiben(1000,220,4,4,90);
	box2 = new Dustiben(1040,220,4,4,183);
	box3 = new Dustiben(1050,220,4,4,90);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25});

	}
}


