let isrunning;
let options = ['','','','','','','','',''];
let player ='X';
const cells = document.querySelectorAll('.js-cell');
const statusText = document.querySelector('.js-status');
const resetButton = document.querySelector('.js-reset');

let winCondition = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

intializeGame();

function intializeGame(){
  isrunning = true;

  cells.forEach((cell) => {
    cell.addEventListener('click',() => {
      clickedCell(cell)
    });
  });

  statusText.textContent = `${player}'s turn`;

  resetButton.addEventListener('click',reset);
}

function clickedCell(cell){
  const id=cell.getAttribute('id');
  
  if(options[id] === '' && isrunning){
    options[id] = player;
    cell.textContent = player;
    checkWin();
  }
}

function checkWin(){
  winCondition.forEach((condition) => {
    let a=condition[0];
    let b=condition[1];
    let c=condition[2];

    if(options[a]!=='' && options[a]===options[b] && options[a] ===options[c]){
      statusText.textContent=`${player} won`;
      isrunning = false;
      return;
    }
  });

  if(isrunning){
    if(!options.includes('')){
      statusText.textContent = 'Draw';
      isrunning = false;
    }else{
      changePlayer();
    }
  }
}

function changePlayer(){
  player = (player === 'X')?'O':'X';
  intializeGame();
}

function reset(){
  options = ['','','','','','','','',''];
  cells.forEach(cell => cell.textContent='');
  player = 'X';
  intializeGame();
}