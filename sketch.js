
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var img;
function preload()
{
img	=loadImage("dustbin.png")
}

function setup() {
createCanvas(1600, 700);
rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	paper=new Paper(200,450,70)
	ground=new Ground(200,680,2500,20)

  dustbinObj=new DustBin(1200,650)
  //bottomSide=new DustBin(1200,660,200,213,PI)
  //rightSide=new DustBin(670,620,20,100)
 
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  paper.display();
  ground.display();
 // leftSide.display();
 //rightSide.display();
 // bottomSide.display();
 dustbinObj.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145})
	}
}


