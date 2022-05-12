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

  it("should be able to update turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses", function() {
    var returnedCurrentCard = round.returnCurrentCard();
    expect(returnedCurrentCard).to.equal(card1);
  });
});

// Your Round class should meet the following requirements:

// - `takeTurn`: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

//   * When a guess is made, a new `Turn` instance is created

//   * The turns count is updated, regardless of whether the guess is correct or incorrect

//   * The next card becomes current card

//   * Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of `incorrectGuesses`

//   * Feedback is returned regarding whether the guess is incorrect or correct

// - `calculatePercentCorrect`: method that calculates and returns the percentage of correct guesses

// - `endRound`: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
