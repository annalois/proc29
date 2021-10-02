const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

stones=[]

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
ground=new Base(0,height-10,width*2,20);
leftwall=new Base(100,height/2+50,300,100);
rightwall=new Base(width-100,height/2+50,300,100);
bridge=new Bridge(30,{x:width/2-800,y:height/2})
jointPoint=new Base(width-100,height/2+10,40,20);
Matter.Composite.add(bridge.body,jointPoint);
jointLLink=new Link(bridge,jointPoint)

for (var i = 0; i <= 8; i++) {
   var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140); 
    var stone = new Stone(x, y, 80, 80);
     stones.push(stone);
     }
}


function draw() {
  background(51);
  Engine.update(engine);
ground.show();
leftwall.show();
rightwall.show();
 bridge.show () ;

 for (var stone of stones) {
    stone.show();
   }
}
