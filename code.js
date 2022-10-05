show();
onEvent("CIMA", "click", function( ) {
  show();
  penUp();
  move(0, -10);
});
onEvent("BAIXO", "click", function( ) {
  show();
  penUp();
  move(0, 10);
});
onEvent("DIREITA", "click", function( ) {
  show();
  penUp();
  move(10, 0);
});
onEvent("ESQUERDA", "click", function( ) {
  show();
  penUp();
  move(-10, 0);
});
onEvent("Desenhar", "click", function( ) {
  penDown();
  penRGB(randomNumber(0, 255), randomNumber(0, 255), randomNumber(1, 255));
  penWidth(3);
  getText("dropdown1")();
  penUp();
  hide();
});
onEvent("limpar", "click", function( ) {
  penColor(getProperty("screen1", "background-color"));
  dot(1000);
});
function Quadrado() {
  moveForward(getNumber("slider1"));
  turnRight(90);
  moveForward(getNumber("slider1"));
  turnRight(90);
  moveForward(getNumber("slider1"));
  turnRight(90);
  moveForward(getNumber("slider1"));
  turnRight(90);
}
function Triangulo() {
  turnRight(90);
  moveForward(getNumber("slider1"));
  turnLeft(120);
  moveForward(getNumber("slider1"));
  turnLeft(120);
  moveForward(getNumber("slider1"));
  turnLeft(120);
  turnLeft(90);
}
function Arco() {
  arcRight(90, getNumber("slider1") / 2);
}
function Circulo() {
  arcRight(360, getNumber("slider1") / 2);
}
function Espiral() {
  for (var i = 0; i < 4; i++) {
    arcRight(360, getNumber("slider1"));
    penUp();
    move(5, 0);
    penDown();
  }
}
function Girar() {
  turnRight(45);
  show();
}
