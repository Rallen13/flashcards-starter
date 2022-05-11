const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round");
const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Round", function() {
  it("should be a function", function() {
    const round = new Round();
    expect(Round).to.be.a("function");
  });

  it("should be an instance of round", function() {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });
});

// Your Round class should meet the following requirements:
// - The `currentCard` should be the first Card in the Deck (the array of Cards) at the start of the Round

// - `returnCurrentCard`: method that returns the current card being played

// - `takeTurn`: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

//   * When a guess is made, a new `Turn` instance is created

//   * The turns count is updated, regardless of whether the guess is correct or incorrect

//   * The next card becomes current card

//   * Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of `incorrectGuesses`

//   * Feedback is returned regarding whether the guess is incorrect or correct

// - `calculatePercentCorrect`: method that calculates and returns the percentage of correct guesses

// - `endRound`: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
