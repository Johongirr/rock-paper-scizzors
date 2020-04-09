 
const message = document.querySelector('#message');
const modalContainer = document.querySelector('.modal__container');
const winnerMessage = document.querySelector('.modal__container p');
const scorePlayer = document.querySelector('.modal__container .score-player');
const scoreComputer = document.querySelector('.modal__container .score-computer'); 
const playerScores = document.querySelectorAll('.player__container i');
const computerScores = document.querySelectorAll('.computer__container i');

let incrementerPlayerScore = 0;
let incrementerComputerScore = 0;
let rounds = 1;

 let scoreKeeper = {
     playerScore: 0,
     computerScore: 0
 }

 function computerPlay (){
     const computerChoices = ['rock','paper','scizzors'];
     return computerChoices[Math.floor(Math.random() * computerChoices.length)]
 }
  
 function playRound(computerSelection, playerSelection) {
    winnerRound(computerSelection, playerSelection);
    document.getElementById('round').textContent = `Round ${++rounds}`;
    
    
}
function winnerRound (computerSelection,playerSelection) {
  if((playerSelection == 'rock' && computerSelection == 'scizzors')
       || (playerSelection == 'scizzors' && computerSelection == 'paper') ||   
         (playerSelection == 'paper' && computerSelection == 'rock'))  {
          message.textContent = 'You Won!'
        scoreKeeper.playerScore++;
        
    } else if ((playerSelection == 'scizzors' && computerSelection == 'rock')
      || (playerSelection == 'paper' && computerSelection == 'scizzors') ||   
        (playerSelection == 'rock' && computerSelection == 'paper'))  {
          message.textContent = 'You Lost!'
          scoreKeeper.computerScore++;
    } else {
          message.textContent = 'It\'s a draw!'
    }
    scoreUpdate(scoreKeeper)
}

 
 function scoreUpdate(score){
   
    if(score.playerScore > score.computerScore){
       playerScores[incrementerPlayerScore].classList.add('star-white');
      incrementerPlayerScore++;
    } else if(score.playerScore < score.computerScore){
      computerScores[incrementerComputerScore].classList.add('star-white');
      incrementerComputerScore++;
    }
 
    winnerGame()
 }
 function winnerGame() {
  if(incrementerPlayerScore == 5){
    winnerMessage.textContent = "GAME IS OVER! YOU WON!";
    modalContainer.style.display = 'block';
    scorePlayer.textContent = incrementerPlayerScore;
    scoreComputer.textContent = incrementerComputerScore;
    return
  } else if (incrementerComputerScore == 5){
    winnerMessage.textContent = "GAME IS OVER! COMPUTER WON!";
    modalContainer.style.display = 'block';
    scorePlayer.textContent = incrementerPlayerScore;
    scoreComputer.textContent = incrementerComputerScore;
    return
  }
  
  scoreKeeper.playerScore = 0;
  scoreKeeper.computerScore = 0;
 }
 
  

 function game(e) {
    let computerSelection = computerPlay();
    let playerSelection = e.target.alt;
     
    const compImg = document.querySelector('.computer-img');
    compImg.src = `images/${computerSelection}.png`

    playRound(computerSelection, playerSelection)
    
    
 }

 function reStart(e){
   location.reload();
   modalContainer.style.display = 'none';
 }
  
document.querySelectorAll('.player__container .images img').forEach(img => img.addEventListener('click', game));
document.querySelector('.modal__container .replay').addEventListener('click', reStart);


 
 
 