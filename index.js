const message = document.querySelector('#message');
const modalContainer = document.querySelector('.modal__container');
const winnerMessage = document.querySelector('.modal__container p');
const scorePlayer = document.querySelector('.modal__container .score-player');
const scoreComputer = document.querySelector('.modal__container .score-computer'); 
const playerScores = document.querySelectorAll('.player__container i');
const computerScores = document.querySelectorAll('.computer__container i');
const images = document.querySelectorAll('.player__container .images img');
const replyBnt = document.querySelector(".replay");

let incrementerPlayerScore = 0;
let incrementerComputerScore = 0;
let rounds = 1;

 let gameScoreKeeper = {
     playerScore: 0,
     computerScore: 0
 }
 

 function displayModal(){
  modalContainer.style.visibility = "visible"
  const modal = modalContainer.querySelector(".modal");
  modal.classList.add("active");
  
 }
 function hideModal(){
  modalContainer.style.display = 'none';
 }
 function updateRoundCount(){
    document.getElementById('round').textContent = `Round ${++rounds}`;
 }
 function resetGameScores(){
    gameScoreKeeper.playerScore = 0;
    gameScoreKeeper.computerScore = 0;
 }

 function getComputerChoise (){
     const computerChoices = ['rock','paper','scizzors'];
     return computerChoices[Math.floor(Math.random() * computerChoices.length)]
 }
  
 function playRound(computerSelection, playerSelection) {
    displayRoundWinenr(computerSelection, playerSelection);
    updateRoundCount(); 
}
function displayRoundWinenr (computerSelection,playerSelection) {
  if((playerSelection == 'rock' && computerSelection == 'scizzors')
       || (playerSelection == 'scizzors' && computerSelection == 'paper') ||   
         (playerSelection == 'paper' && computerSelection == 'rock'))  {
          message.textContent = 'You Won!'
        gameScoreKeeper.playerScore++;
        
  } else if ((playerSelection == 'scizzors' && computerSelection == 'rock')
      || (playerSelection == 'paper' && computerSelection == 'scizzors') ||   
        (playerSelection == 'rock' && computerSelection == 'paper'))  {
          message.textContent = 'You Lost!'
          gameScoreKeeper.computerScore++;
  } else {
          message.textContent = 'It\'s a draw!'
  }
  updateGameScore(gameScoreKeeper)
}

 
 function updateGameScore(score){
    if(score.playerScore > score.computerScore){
       playerScores[incrementerPlayerScore].classList.add('star-white');
      incrementerPlayerScore++;
    } else if(score.playerScore < score.computerScore){
      computerScores[incrementerComputerScore].classList.add('star-white');
      incrementerComputerScore++;
    }
    checkGameWinner()
 }
 function displayPlayerEndResult(){
    scorePlayer.textContent = incrementerPlayerScore;
 }
 function displayComputerEndResult(){
    scoreComputer.textContent = incrementerComputerScore;
 }

 function checkGameWinner() {
  if(incrementerPlayerScore == 5){
    winnerMessage.textContent = "GAME IS OVER! YOU WON!";
    displayModal();
    displayPlayerEndResult();
    displayComputerEndResult();
  } else if (incrementerComputerScore == 5){
    winnerMessage.textContent = "GAME IS OVER! COMPUTER WON!";
    displayModal();
    displayPlayerEndResult();
    displayComputerEndResult();
  }
  resetGameScores();
 }
 
 
  function toggleCurrentImageActiveClass(img){
    img.classList.add("active");
    setTimeout(() => {
      img.classList.remove("active");
    }, 1500);
  }
  function toggleCurrentComputerImage(compImg){
    compImg.style = "block";
    setTimeout(() => {
      compImg.style.display = "none";
    }, 1500);
  }
 function startGame(e) {
    let computerSelection = getComputerChoise();
    let playerSelection = e.target.alt;  
    const compImg = document.querySelector('.computer-img');
    compImg.src = `images/${computerSelection}.png`;
    toggleCurrentImageActiveClass(e.target);
    toggleCurrentComputerImage(compImg);
    playRound(computerSelection, playerSelection)
 }

 function reStartGame(e){
   location.reload();
   hideModal();
 }
  
images.forEach(img => img.addEventListener('click', startGame));
replyBnt.addEventListener('click', reStartGame);


 
 
 