const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload() {
  polyImg = loadImage("polygon.png");
}


function setup() {
 createCanvas(1000, 600);

 engine = Engine.create();
 world = engine.world;
 Engine.run(engine);

    ground = new Ground();
    stand = new Ground(540,200,240,20);
    stand1 = new Ground(740,500,240,20);
    
    //stand
    block = new Box(460,100,40,50);
    block1 = new Box(500,100,40,50);
    block2 = new Box(540,100,40,50);
    block3 = new Box(580,100,40,50);
    block4 = new Box(620,100,40,50);

    block5 = new Box(500,50,40,50);
    block6 = new Box(540,50,40,50);
    block7 = new Box(580,50,40,50);

    block8 = new Box(540,0,40,50);

   //stand1
    block9 = new Box(660,400,40,50);
    block10 = new Box(700,400,40,50);
    block11 = new Box(740,400,40,50);
    block12 = new Box(780,400,40,50);
    block13 = new Box(820,400,40,50);

    block14 = new Box(700,350,40,50);
    block15 = new Box(740,350,40,50);
    block16 = new Box(780,350,40,50);

    block17 = new Box(740,300,40,50);


    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
 
 
   slingShot = new SlingShot(this.ball,{x:100,y:200})
}
 

function draw() {
  background("black");
  stand.display();
  stand1.display();
  fill('crimson');
  block.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  fill("cadetblue");
  block5.display();
  block6.display();
  block7.display();
  fill("wheat");
  block8.display();

  fill('crimson');
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  fill("cadetblue");
  block14.display();
  block15.display();
  block16.display();
  fill("wheat");
  block17.display();

imageMode(CENTER);
  image (polyImg, ball.position.x, ball.position.y, 40, 40);
  slingShot.display();
}
  
function mouseDragged(){
   Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
   } 

function mouseReleased(){
   slingShot.fly(); 
    }
  
