var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rectangle1 , rectangle2 , rectangle3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody =  Bodies.circle(width/2 , 200 , 5 , {restitution : 0, isStatic :true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	rectangle1 = new Rectangle(500,600 , 10 ,150);
	rectangle2 = new Rectangle(400,600 , 200,20);
	rectangle3 = new Rectangle(290,100 , 10 , 150);

//	rectangle2 = Bodies.rectangle()

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  Engine.update(engine);
 background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 rectangle1.display();
 rectangle2.display();
 rectangle3.display();
 drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
   // packageBody =  Bodies.circle(width/2 , 200 , 5 , {restitution : 0.6, isStatic : false});
   Matter.Body.setStatic(packageBody,false);
  }
}