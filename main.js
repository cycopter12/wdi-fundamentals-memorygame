console.log("JS file is connected to HTML! Woo!")
var cards = ["queen","queen","king","king"]; 
var cardsInPlay =[];
//var cardOne = "queen";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "king";
/*
if (cardTwo === cardFour){
	alert("You found a match");
}
else{
	alert("Not a match")
};
*/

var game = document.getElementById('game-board');

var createBoard = function (){

for (var i =0; i < cards.length; i++){
var cardsList = document.createElement('div');
	cardsList.className ='card';
	cardsList.setAttribute('data-card',cards[i]);
	cardsList.addEventListener('click', isTwoCards)
	game.appendChild(cardsList)
	game.appendChild(cardsList);
	}	

}


var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='images/kingofspades.png' height = '200px' width = '150px' alt = 'King of Spades'>"; // king
	} else {
		this.innerHTML = "<img src='images/queenofhearts.png' height = '200px' width = '150px' alt ='Queen of Hearts' >"; //queen
	}
	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}

}

var isMatch =function(cards){
	if (cards[0] === cards[1]){
		alert("You have a match!");
	}
	else {
		alert("No Match, Try again.");
	}
}

createBoard();