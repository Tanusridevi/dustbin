
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   var ball_Options={
	   isStatic:false,
	   restitution:0.3,
	   friction:0,
	   density:1.2
   }

    ball = Bodies.circle(200,600,40,ball_Options);
	World.add(world,ball);

	ellipseMode(RADIUS);
	ground = new Ground(400,690,800,20);
   leftGround = new Ground(450,620,10,140);
   rightGround = new Ground(600,620,10,140);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,40,40);
  
  ground.show();
  leftGround.show();
  rightGround.show();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:80,y:-60})
	}
}

