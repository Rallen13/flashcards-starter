const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const Round = require("../src/Round");
const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");

class Game {
  constructor() {
    this.currentRound = {};
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }

  createCards = () => {
    const cardCollection = [];
    prototypeQuestions.forEach(question => {
      const newCard = new Card(
        question.id,
        question.question,
        question.answers,
        question.correctAnswer
      );
      cardCollection.push(newCard);
    });
    return cardCollection;
  };

  createDeck = cards => {
    return new Deck(cards);
  };

  createRound = deck => {
    return new Round(deck);
  };

  start = () => {
    const cards = this.createCards();
    const deck = this.createDeck(cards);
    const round = this.createRound(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  };
}

module.exports = Game;
