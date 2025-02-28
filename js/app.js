/*-------------------------------- Constants --------------------------------*/
let correctMatches = 0;
let totalTries = 0;
let gameOver = false;
let firstGuess = null;
let canGuess = true;
let flippedCards = 0;


/*---------------------------- Variables (state) ----------------------------*/

function fisherYatesShuffle(array) {
  // Create a copy of the original array to avoid modifying it
  const shuffled = [...array];
  
  // Start from the last element and swap with a random element before it
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at indices i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;

}let squares = [
  {value: '0', image: 'images/image0.jpg'},
  {value: '1', image: 'images/image1.jpg'},
  {value: '2', image: 'images/image0.jpg'},
  {value: '3', image: 'images/image0.jpg'},
  {value: '4', image: 'images/image0.jpg'},
  {value: '5', image: 'images/image0.jpg'},
  {value: '6', image: 'images/image0.jpg'},
  {value: '7', image: 'images/image0.jpg'},
  {value: '8', image: 'images/image0.jpg'},
  {value: '9', image: 'images/image0.jpg'},
  {value: '10', image: 'images/image0.jpg'},
  {value: '11', image: 'images/image0.jpg'},
  {value: '12', image: 'images/image0.jpg'},
  {value: '13', image: 'images/image0.jpg'},
  {value: '14', image: 'images/image0.jpg'},
  {value: '0', image: 'images/image0.jpg'},
  {value: '1', image: 'images/image1.jpg'},
  {value: '2', image: 'images/image0.jpg'},
  {value: '3', image: 'images/image0.jpg'},
  {value: '4', image: 'images/image0.jpg'},
  {value: '5', image: 'images/image0.jpg'},
  {value: '6', image: 'images/image0.jpg'},
  {value: '7', image: 'images/image0.jpg'},
  {value: '8', image: 'images/image0.jpg'},
  {value: '9', image: 'images/image0.jpg'},
  {value: '10', image: 'images/image0.jpg'},
  {value: '11', image: 'images/image0.jpg'},
  {value: '12', image: 'images/image0.jpg'},
  {value: '13', image: 'images/image0.jpg'},
  {value: '14', image: 'images/image0.jpg'},
]


//write a for loop i <= 29, grab each element by ID and assign them a src
//for (let i =0; i <=29; i++) {

//img.style.display = 'none';
//gameBoard.append(img) does this have dot notation?



//when game initializes, all cards are flipped away
//function to test matches (equal image src)
//additional logic to ensure only 2 square are flipped at any time
//game end -accuracy too low or all squares flipped
//work on shuffling images...look up shuffling Fisher Yates shuffle




/*------------------------ Cached Element References ------------------------*/
//const message = document.querySelector('#message');
const flipCard = document.querySelectorAll('.flip-card');
const gameBoard = document.getElementsByClassName('.flip-inner');
const resetButton = document.querySelector('#reset-game');
const message = document.getElementById('message');


/*-------------------------------- Functions --------------------------------*/
//clear button #reset-game
//function reset() {

//
//
// flipping an element
//if element is flipped, can't flip it again
//remove event listener for clicked squares

for (let i =0; i <30; i++) {
  const img = document.createElement('img');
  img.src ='./images/geode closed.jpg';
  square.appendChild(img);
}


//

//Does this have all the same conditions as reset?
function initializeGame () {
accuracyRate(); 
fisherYatesShuffle(squares);
squares.imagesource = "./images/geode closed.jpg";
}

function flip(cardContainer) {
  cardContainer.style.transform="rotatey(180deg)";
  cardContainer.style.transitionDuration="1.5s";
}


// if a square is clicked, set its evt Listener to -off- for now
// let the first clicked be square 1
// let the second one clicked be square 2
// flip 2 squares
// if square1.imagesource === square2.imagesource
// flippedCards+= 2;
// return "it's a match!";

// disable evt listeners on those two squares
// else 
// return "Nope"; turn evt listeners back on for the 2 clicked squares
// updateMessage();

//check accuracy
function accuracyRate () {
  if (correctMatches === 0) {
  return 0;
  }
  else {
    return (correctMatches/totalTries) *100;
  }
}

function updateMessage() {
  let accuracy = accuracyRate();
  const message = document.getElementById("message");
  if (message) {
    message.textContent ="You are at ${accuracy.toFixed(2)} percent"
  }

}

//
function endGame() {
  accuracyRate();
  if(flippedCards === cards.length || accuracyRate <= 55/100) {
    gameOver = true;
    message.textContent="Game Over";
    square.removeEventListner('click');
  }
}
  function resetGame() {
    canGuess = false;
    firstGuess = null;
    canGuess = true;
    cardEls.forEach(else, value) 
    fisherYatesShuffle(squares);
  }
 
function gamePlay() {
  initializeGame();
  updateMessage();
  endGame();

}
  //music plays, if win music 1, if lose, music 2
//


//function playWinMusic() {}

//grab all elements with class .sqr  assign them an image
//flip-toggle between visible or no
// squares.forEach((square, index) => {
// 	square.style.backgroundImage = `url('../images/image${index}.jpg')`;
// 	});
// 	


	
//assigning images to squares
const halfLength =squares.length/2;

for (let i =0; i < halfLength; i ++) {
	squares[i].style.backgroundImage = `url('../images/image'${i}'.jpg')`;
	squares[i+15].style.backgroundImage = `url('../images/image'${i}'.jpg')`;
/////////////`url('${imagePath}')`;
}

/*----------------------------- Event Listeners -----------------------------*/
squares.forEach(square => {
  square.addEventListener('click', () => {
    img.style.display = img.style.display === 'none'
      ? 'block' : 'none';
      console.log('clicked');
  });
});

resetButton.addEventListener('click', () => {
  reset();
});
