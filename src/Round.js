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

  takeTurn = () => {
    this.turns += 1;
  };
}

module.exports = Round;
