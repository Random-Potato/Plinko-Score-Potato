var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particle;
var turn = 0;
var gamestate = "start";
var count = 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  if (count >= 5){
    score = 0;
    count = 0;
  }
 //text("Score : "+score,20,30);
  Engine.update(engine);

  if(particle !== null){
    particle.display();
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   text("score: " + score, 20,20);
   text("???", 340, 600);
   text("-100", 420, 600);
   text("-50", 40, 600);
   text("40", 120, 600);
   text("-30", 200, 600);
   text("20", 280, 600);
   text("-20", 500, 600);
   text("30", 580, 600);
   text("-40", 660, 600);
   text("50", 740, 600);
}

function mousePressed(){
  if(gamestate !== "end"){
    count ++;
    particle = new Particle(mouseX, 10, 10, 10);
    console.log("pow");
  }
}