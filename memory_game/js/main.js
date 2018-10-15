console.log("Up and running!");

var cards = [
{
	rank: 'queen',
	suit: 'hearts', 
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'dimaonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

var cardsInPlay = [];
var score = 0;

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		// Displays message in HTML
		document.getElementById("scorekeeper").innerHTML=("You found a match!")
		// Increments the score by 1 
		score++;
	} else {
		// Displays message in HTML	
		document.getElementById("scorekeeper").innerHTML=("Sorry, try again.");
	}
};

var flipCard = function()
{
	// Pulls card information from data set
	var cardId = this.getAttribute('data-id');
	// Sends value of card 
	console.log("User flipped " + cards[cardId].rank);
	// Pushes card to cards in play variable 
	cardsInPlay.push(cards[cardId].rank);
	// Logs image of card
	console.log(cards[cardId].cardImage);
	// Logs type of card
	console.log(cards[cardId].suit);
	// Sets front image to card
	this.setAttribute('src', cards[cardId].cardImage);
	// Logs current card in play variable information
	console.log(cardsInPlay);
	// Ff card length is two runs function to check if the card values are the same
	if (cardsInPlay.length === 2) 
	{
	// Calls array
		checkForMatch();
	}
};

var createBoard = function()
{
	// Add each card to game board 
	for (var i = 0; i < cards.length; i++) 
	{
		// Creates an image element and stores it in cardElement variable
		var cardElement = document.createElement('img');
		// Sets the image for each card
		cardElement.setAttribute('src', 'images/back.png');
		// Sets value and type of card to each card in gameboard 
		cardElement.setAttribute('data-id', i);
		// Calls flipCard function when cards are clicked
		cardElement.addEventListener('click', flipCard);
		// Appends (adds) cardElement (card type, value, and photo) to end of game-board 
		document.getElementById("game-board").appendChild(cardElement);
	}
	// Displays score
	document.getElementById("scorekeeper").innerHTML="Score: " + score;
    // Creates onclick reset function trigger
    document.getElementById("resetButton").onclick = reset;
};


var reset = function()
{
	// Access the cards in the game-board by naming the children.
	var child = document.getElementById("game-board").children
	// Empty the cardsInPlay array
	cardsInPlay = [];
	// Iterate through the game-board children to reset image.
	for (var i = 0; i < cards.length; i++) 
	{
		child[i].setAttribute('src', 'images/back.png');
	}
	// Show score.
	document.getElementById("scorekeeper").innerHTML="Score: " + score;
};

createBoard();

