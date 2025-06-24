
function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;
let yBoca;

function draw() {
  background('#FF5722');
  fill('#03A9F4');
  circle(200, 200, 300); //rosto
  fill('white');
  circle(150, 150, 60); // olho direito
  circle(250, 150, 60); // olho esquerdo
  fill('#3F51B5');
  triangle(172, 228, 200, 172, 228, 228); //nariz
  line(150, 270, 250, 250); //boca
  line(118, 90, 176, 107); // sobrancelha esquerda
  line(211, 122, 251, 75); // sobrancelha direita
  // circle (150,150,15); // pupila esquerda
  // circle (250,150,15); // pupila direita
  triangle(150, 270, 250, 250, 240, yBoca); //boca
    
  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);
  yBoca = map(mouseY, 0, 300, 100, 370);
  
  circle (olhoX, olhoY, 15); //nova pupila esquerda
  circle (olhoX+100, olhoY, 15); //nova pupila direita
  if(mouseIsPressed){
    console.log(mouseX, mouseY);
    
}
}


