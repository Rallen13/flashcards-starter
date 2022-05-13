const chai = require("chai");
const expect = chai.expect;

const Game = require("../src/Game");
const Round = require("../src/Round");
const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");

describe("Game", function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let game;

  beforeEach(function() {
    card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    card3 = new Card(
      12,
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);

    game = new Game(round);
  });

  it("should be a function", function() {
    expect(Game).to.be.a("function");
  });

  it("should be an instance of game", function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  it("should be able to keep track of the current round", function() {
    expect(game.currentRound).to.deep.equal({});
  });

  it("should be able to create cards", function() {
    const cards = game.createCards();
    expect(cards[0]).to.be.an.instanceOf(Card);
  });

  it("should be able to put Cards in a Deck", function() {
    const newDeck = game.createDeck([card1, card2, card3]);
    expect(newDeck).to.be.an.instanceOf(Deck);
    expect(newDeck.cards[0]).to.be.an.instanceOf(Card);
  });

  it("should be able to create a new Round using the Deck", function() {
    const newRound = game.createRound(deck);
    expect(newRound).to.be.an.instanceOf(Round);
    expect(newRound.deck).to.be.an.instanceOf(Deck);
  });
});
