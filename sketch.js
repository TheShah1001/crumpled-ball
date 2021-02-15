
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, ballObject
var world;
var dustbinImg, dustBin;

function preload() {
    dustbinImg = loadImage("trashcangreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	ballObject = new Ball(200,200,150,150)

	Engine.run(engine);

	dustBin = createSprite(100,100,100,100);
	dustBin.scale = 1;
	dustBin.addImage(dustbinImg);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  ballObject.display();

  if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:10,y:-55});
}

}

