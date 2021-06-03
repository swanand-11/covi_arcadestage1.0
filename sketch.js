var ground,iground;
var edges
function preload(){
   doc1img = loadImage("images/doctor2.png")
   doc2img = loadImage("images/doctor1.png")
}

function setup() {
  createCanvas(1200,400);
  ground = createSprite(600,390,width,20);
  iground = createSprite(600,370,width,20);

  edges = createEdgeSprites();
  

  doc = createSprite(600,320,50,50);

  doc.addImage("doctor",doc1img)

  doc.scale = 0.5

  iground.visible = false;

}

function draw() {
  background(236,152,237);  
if (keyDown(RIGHT_ARROW)) {
  doc.x = doc.x + 5;
  doc.addImage("doctor",doc1img)
}

if (keyDown(LEFT_ARROW)) {
  doc.x = doc.x - 5;
  doc.addImage("doctor",doc2img)
}
doc.bounceOff(edges);

  drawSprites();
}