//create an aray of objects
let cards = [
  {value: '0', image: 'images/image0.jpg', matched: false},
  {value: '1', image: 'images/image1.jpg', matched: false},
  {value: '2', image: 'images/image2.jpg', matched: false},
  {value: '3', image: 'images/image3.jpg', matched: false},
  {value: '4', image: 'images/image4.jpg', matched: false},
  {value: '5', image: 'images/image5.jpg', matched: false},
  {value: '6', image: 'images/image6.jpg', matched: false},
  {value: '7', image: 'images/image7.jpg', matched: false},
  {value: '8', image: 'images/image8.jpg', matched: false},
  {value: '9', image: 'images/image9.jpg', matched: false},
  {value: '10', image: 'images/image10.jpg', matched: false},
  {value: '11', image: 'images/image11.jpg', matched: false},
  {value: '12', image: 'images/image12.jpg', matched: false},
  {value: '13', image: 'images/image13.jpg', matched: false},
  {value: '14', image: 'images/image14.jpg', matched: false},
  {value: '0', image: 'images/image0.jpg', matched: false},
  {value: '1', image: 'images/image1.jpg', matched: false},
  {value: '2', image: 'images/image2.jpg' ,matched: false},
  {value: '3', image: 'images/image3.jpg', matched: false},
  {value: '4', image: 'images/image4.jpg', matched: false},
  {value: '5', image: 'images/image5.jpg', matched: false},
  {value: '6', image: 'images/image6.jpg', matched: false},
  {value: '7', image: 'images/image7.jpg', matched: false},
  {value: '8', image: 'images/image8.jpg', matched: false},
  {value: '9', image: 'images/image9.jpg', matched: false},
  {value: '10', image: 'images/image10.jpg', matched: false},
  {value: '11', image: 'images/image11.jpg', matched: false},
  {value: '12', image: 'images/image12.jpg', matched: false},
  {value: '13', image: 'images/image13.jpg', matched: false},
  {value: '14', image: 'images/image14.jpg', matched: false},
]

function FyShuffle(array) {
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

let cardEls =document.querySelectorAll('.faceDownCard');
let correctMatches = 0;
let totalTries = 0;
let gameOver = false;
let firstGuess = null;
let canGuess = true;
let guessCount = 0;
let flippedCards = 0;


FyShuffle(cards);

//console.log which index clicked
cardEls.forEach(function(el, index) {
  el.addEventListener('click', function() {
    if (index === firstGuess || cards[index].matched === true || !canGuess) {
      console.log('same card clicked twice');
      return
    }
    let clickedCard = cards[index]
    el.setAttribute('src', clickedCard.image);

    if (firstGuess === null) {
        firstGuess= index;
        guessCount++
        totalTries++;
    } else {
      if (cards[firstGuess].value === cards[index].value) {
        console.log('match');
        cards[firstGuess].matched = true;
        cards[index].matched === true;
        firstGuess = null;  //match
        flippedCards+=2;
        correctMatches++
        updateMessage();
        //check for win, reset
        if(flippedCards === cards.length) {
          resetGame();
        }
      } else {
        canGuess = false;
        console.log('no match'); //no match
        updateMessage();

        setTimeout(() => {
          cardEls[firstGuess].setAttribute('src', "images/geode closed.jpg");
          cardEls[index].setAttribute('src', "images/geode closed.jpg");
          firstGuess = null;
          canGuess = true;
        } , 1500)
        }
        
      }
    });
});

function resetGame() {
  canGuess = false;
  setTimeout(() => {
  }, 2000);

  firstGuess = null;
  canGuess = true;
  flippedCards = 0;
  guessCount = 0;

  cards.forEach((card, index) => {
    card.matched = false;
  });

  FyShuffle(cards); // Shuffle the cards array

  cardEls.forEach(function(el, index) {
    el.setAttribute('src', "images/geode closed.jpg"); //reset to closed image.
  });

  updateMessage();
}


document.querySelector("#reset").addEventListener('click', function() {
  resetGame();
});

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
    message.textContent =`You are at ${accuracy.toFixed(2)} percent`;
  }

}

function checkGameOver() {
  if (guessCount >= 10 && accuracyRate() <= 50) {
    gameOver = true;
    updateMessage(); //update to game over message.
    canGuess = false; //prevent further clicks.
  }
}