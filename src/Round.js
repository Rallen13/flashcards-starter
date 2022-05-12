const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck ? deck.cards[0] : "";
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard = () => {
    return this.currentCard;
  };

  takeTurn = userGuess => {
    const currentTurn = new Turn(userGuess, this.currentCard);
    this.turns += 1;
    return currentTurn.giveFeedback();
  };
}

module.exports = Round;
