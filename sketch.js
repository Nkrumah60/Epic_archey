const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var comBase;
var playerBase;
var player;
var comPlayer;
var computerArcher;
var playerArcher;
var playerArrows = [];
var playerArrow


function setup() {
  canvas = createCanvas(1200,600);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 2;
	
   //Create Player Base and Computer Base Object

  comBase = new ComputerBase(1000,400,250,250);
  playerBase = new Playerbase(200,400,250,250);
  player = new Player(200,220,100,175);
  comPlayer = new ComputerPlayer(1000,220,100,175);
  computerArcher = new ComputerArcher(950,200,120,120,angle);
  playerArcher = new PlayerArcher(255,200,120,120,angle);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  comBase.display();
  playerBase.display();
  player.display();
  comPlayer.display();
  computerArcher.display();
  playerArcher.display();
  
  

  

  for (var i = 0; i < playerArrows.length;i++){
    showArrows(playerArrows[i],i);
    

  }



}

function keyReleased() {
  if(keyCode===32){
  
    playerArrows[playerArrows.length-1].shoot();
    
  }
 
}

function keyPressed() {
  if(keyCode=== 32){

    var playerArrow = new PlayerArrow (playerArcher.body.position.x+33,playerArcher.body.position.y -10,70,25,angle);
    playerArrow.trajectory = [];
    playerArrows.push(playerArrow);
    
    


  }


}

function showArrows(playerArrow){

  playerArrow.display();


}