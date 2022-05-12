const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");

describe("Round", function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

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
  });
  it("should be a function", function() {
    const round = new Round();
    expect(Round).to.be.a("function");
  });

  it("should be an instance of round", function() {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it("should be able to start with a deck of cards", function() {
    expect(round.deck).to.deep.equal(deck);
  });

  it("should be the first Card in the Deck at the start of the Round", function() {
    expect(round.currentCard).to.deep.equal(card1);
  });

  it("should be able to return the current card being played", function() {
    var returnedCurrentCard = round.returnCurrentCard();
    expect(returnedCurrentCard).to.equal(card1);
  });

  it("should be able to start with zero turns", function() {
    expect(round.turns).to.equal(0);
  });

  it("should be able to start with zero incorrect guesses", function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it("should be able to update turns count", function() {
    round.takeTurn();
    expect(round.turns).to.equal(1);
  });

  it("should be able to evaluate if guess is correct and receive feedback", function() {
    const feedback = round.takeTurn("sea otter");
    expect(feedback).to.equal("correct!");
  });

  it("should be able to evaluate if guess is incorrect and receive feedback", function() {
    round.takeTurn("sea otter");
    const feedback = round.takeTurn("spleen");
    expect(feedback).to.equal("incorrect!");
    expect(round.turns).to.equal(2);
  });

  it("should be able to store incorrect guess id", function() {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it("should be able to switch next card to current card", function() {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    const currentCard = round.returnCurrentCard();
    expect(currentCard).to.deep.equal(card3);
  });

  it("should be able to calculate and return the percentage of correct guesses", function() {
    round.takeTurn("sea otter");
    round.takeTurn("spleen");
    const percentCorrect = round.calculatePercentCorrect();
    expect(percentCorrect).to.equal(33);
  });
});

// Your Round class should meet the following requirements:

// - `endRound`: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
