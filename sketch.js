const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
   

   

    box1 = new Box(600,550,100,100);
    box2 = new Box(700,550,100,100);
    box3 = new Box(800,550,100,100);
    box4 = new Box(900,550,100,100);
    box5 = new Box(600,450,100,100);
    box6 = new Box(700,450,100,100);
    box7 = new Box(800,450,100,100);
    box8 = new Box(900,450,100,100);
    box9 = new Box(600,350,100,100);
    box10 = new Box(700,350,100,100);
    box11= new Box(800,350,100,100);
    box12= new Box(900,350,100,100);
    box13= new Box(600,250,100,100);
    box14= new Box(700,250,100,100);
    box15= new Box(800,250,100,100);
    box16= new Box(900,250,100,100);
    
    ball = new Ball(200,200);
    rope = new Rope(ball.body,{x:400,y:50});

    
}

function draw(){
    
    background("white");
    
    Engine.update(engine);

    

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    ball.display();
    rope.display();


   
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
 
}
/*function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32  && bird.body.speed<1){
        
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body,{x:200,y:50})
        slingshot.attach(bird.body);
        gameState = "onsling"
    }
}

async function getbackGroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    
    var dateTime = responseJSON.datetime;
    console.log(dateTime);
    var hour = dateTime.slice(11,13);
    console.log(hour);

    if(hour>=06 && hour<=18){
        bg = "sprites/bg.png"
    }
    else{
        bg = "sprites/bg2.jpg"
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}*/
