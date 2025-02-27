/*-------------------------------- Constants --------------------------------*/
let correctMatches = 0;
let totalTries = 0;
let gameOver = false;
let firstGuess = null;


/*---------------------------- Variables (state) ----------------------------*/
//let board;


 
//write a for loop i <= 29, grab each element by ID and assign them a src
//for (let i =0; i <=29; i++) {

//img.style.display = 'none';
//gameBoard.append(img) does this have dot notation?



//when game initializes, all cards are flipped away
//function to test matches (equal image src)
//additional logic to ensure only 2 square are flipped at any time
//game end -accuracy too low or all squares flipped
//work on shuffling images...look up shuffling Fisher Yates shuffle
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
}



/*------------------------ Cached Element References ------------------------*/
//const message = document.querySelector('#message');
const gameBoard = document.getElementById('.gameBoard');
const squares = document.querySelectorAll('.sqr');
//const resetButton = document.querySelector('#reset-game')


/*-------------------------------- Functions --------------------------------*/
//clear button #reset-game
//function reset() {

//
//
// flipping an element
//if element is flipped, can't flip it again
//remove event listener for clicked squares

for (let i =0; i <30, i++) {
  const img = document.createElement('img');
  img.src ='./images/geode closed.jpg';
  square.appendChild(img);
}


//

//Does this have all the same conditions as reset?
set game initalization function
accuracyRate(); 
set all cards to geode closed image
set all evt listeners to on
shuffle array

  }
}


gamePlay() 
if a square is clicked, set its evt Listener to -off- for now
let the first clicked be square 1
let the second one clicked be square 2
flip 2 squares
if square1.imagesource === square2.imagesource
return "it's a match!";
disable evt listeners on those two squares
else 
return "Nope"; turn evt listeners back on for the 2 clicked squares


//check accuracy
function accuracyRate () {
  if (correctMatches === 0) {
  return 0;
  }
  else {
    return (correctMatches/totalTries) *100;
  }
}


//
function endGame() {
  accuracyRate();
  if(all cards are flipped || accuracyRate is <= 55/100) {
    gameOver = true;
    square.removeEventListner('click', ());
  }
  turn off all evt Listeners
 

  //music plays, if win music 1, if lose, music 2
}
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




	
	//('../assets/audio/cat.mp3');

//for (let i =15; i <=29; i++) 


/*----------------------------- Event Listeners -----------------------------*/

resetButton.addEventListener('click', () => {
  reset();
});


squares.forEach(square => {
  square.addEventListener('click', () => {
    img.style.display = img.style.display === 'none'
      ? 'block' : 'none';
  });
});

