const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1300,500);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(300,200,20);
ground = new Ground(650,470,1300,40);
 dustbin = new Dustbin(1175,350,250,200);
 sling = new SlingShot(paper.body,{x:300, y:200});

}


function draw() {
  background("silver");
  Engine.update(engine);
paper.display();
 ground.display();
 dustbin.display();
sling.display();
 keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x :2,y :-3});
	}
}

function mouseDragged(){
	Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
sling.fly();
}
