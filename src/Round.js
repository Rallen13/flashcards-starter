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
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.currentCard = this.deck.cards.find(
      (card, index) => index === this.turns
    );
    return currentTurn.giveFeedback();
  };

  calculatePercentCorrect = () => {
    return Math.round(
      100 - (this.incorrectGuesses.length / this.deck.cards.length) * 100
    );
  };

  endRound = () => {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  };
}

module.exports = Round;
