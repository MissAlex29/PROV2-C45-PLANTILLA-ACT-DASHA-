//Ancho y alto del tablero 
width = 9;
height = 9;

//Si tiro bien o no 
var hasWon = false;

let currentPlayerTurn = 0;

//Matriz para el tablero
board = [];
let position = 0;
let darkBox = false;

//Posición de serpientes y escaleras 

//Crear cuadros para tablero 
for (var y = height; y >= 0; y--) {
  //Matriz para cuadros 
  let row = [];

  board.push(row);
  for (var x = 0; x < width; x++) {
    row.push({x,y,occupied: null,position,color: darkBox ? "#D889FE " : "#A6F4F7"});
    //Intercala colores
    darkBox = !darkBox; //next one is not dark box
    position++;
  }
}

boardSize = 55;
//Dibuja el tablero
drawBoard = () => {
  let boardOnScreen = ``;
  board.forEach(row => {
    row.forEach(square => {
      boardOnScreen += `<div class=square style="top:${square.y *
        boardSize}px; left:${square.x *
        boardSize}px; background-color:${square.color}"></div>`;
    });
  });

  //Función para dibujar serpientes y escaleras 
 
  
  //Obtiene datos de la pagina 
  document.getElementById("board").innerHTML = boardOnScreen;
};


//Asigna color a serpientes y escaleras 

drawBoard();
