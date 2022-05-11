const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", function() {
  it("should be a function", function() {
    const turn = new Turn();
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of turn", function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it("should be able to store a user guess", function() {
    const turn = new Turn("object");
    expect(turn.userGuess).to.equal("object");
  });

  it("should be able to store a current card", function() {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const turn = new Turn("object", card);
    expect(turn.currentCard).to.equal(card);
  });

  it("should be ale to return a guess", function() {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );

    const turn = new Turn("object", card);

    var returnedGuess = turn.returnGuess();

    expect(returnedGuess).to.equal("object");
  });

  it("should be ale to return a card", function() {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );

    const turn = new Turn("object", card);

    var returnedCard = turn.returnCard();

    expect(returnedCard).to.equal(card);
  });

  it("should be able to evaluate if a user guess matches the correct answer", function() {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );

    const turn = new Turn("object", card);

    var evaluatedGuess = turn.evaluateGuess();

    expect(evaluatedGuess).to.equal(true);
  });

  it("should be able to evaluate if a user guess doesn't match the correct answer", function() {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );

    const turn = new Turn("array", card);

    var evaluatedGuess = turn.evaluateGuess();

    expect(evaluatedGuess).to.equal(false);
  });

  it("should be able to give feedback for a correct answer", function() {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );

    const turn = new Turn("object", card);

    var feedbackReceived = turn.giveFeedback();

    expect(feedbackReceived).to.equal("correct!");
  });

  it("should be able to give feedback for an incorrect answer", function() {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );

    const turn = new Turn("array", card);

    var feedbackReceived = turn.giveFeedback();

    expect(feedbackReceived).to.equal("incorrect!");
  });
});
