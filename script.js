var originalBoard;
const humanPlayer="O";
const aiPlayer="X";
const winCombo=[
    [0,1, 2],
    [3,4,5],
    [6,7,8],
    [0,3,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

const cells = document.querySelectorAll('.cell');
startGame();
function startGame()
{
document.querySelector(".endgame").style.display = "none";
//document.querySelector(".endgame").style.display = "none";
originalBoard = Array.from(Array(9).keys());
//console.log(originalBoard);

for (var i = 0; i < cells.length; i++) {
  cells[i].innerText = '';
  cells[i].style.removeProperty('background-color');
  cells[i].addEventListener('click',turnClick,false);
}

}  

function turnClick(square)
{
 // console.log("anything");
turn(square.target.id, humanPlayer);
} 

function turn(squareId, player) {
  originalBoard[squareId] = player;
document.getElementById(squareId).innerText=player;
let gameWon= checkWin();
if (gameWon) {
  gameOver(gameWon);
}
}
