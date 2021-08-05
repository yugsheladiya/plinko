 var particles = [];
 var Engine = Matter.Engine, 
 World = Matter.World, 
 Events = Matter.Events, 
 Bodies = Matter.Bodies;



function setup() {
  createCanvas(480,800);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create(); 
  world = engine.world;
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  if(frameCount%60===0){ 
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   } for (var j = 0; 
    j < particles.length; j++) { particles[j].display(); 
  }

}