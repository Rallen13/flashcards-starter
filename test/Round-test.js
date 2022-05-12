const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Card = require("../src/Card");
const Turn = require("../src/Turn");
const Deck = require("../src/Deck");

describe("Round", function() {
  it("should be a function", function() {
    const round = new Round();
    expect(Round).to.be.a("function");
  });

  it("should be an instance of round", function() {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it("should be able to start with a deck of cards", function() {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.deck).to.deep.equal(deck);
  });

  it("should be the first Card in the Deck at the start of the Round", function() {
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.currentCard).to.deep.equal(card1);
  });
});

// Your Round class should meet the following requirements:

// - `returnCurrentCard`: method that returns the current card being played

// - `takeTurn`: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

//   * When a guess is made, a new `Turn` instance is created

//   * The turns count is updated, regardless of whether the guess is correct or incorrect

//   * The next card becomes current card

//   * Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of `incorrectGuesses`

//   * Feedback is returned regarding whether the guess is incorrect or correct

// - `calculatePercentCorrect`: method that calculates and returns the percentage of correct guesses

// - `endRound`: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
