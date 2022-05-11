const chai = require("chai");
const expect = chai.expect;

const Deck = require("../src/Deck");
const Card = require("../src/Card");

describe("Deck", function() {
  it("should be a function", function() {
    const deck = new Deck();
    expect(Deck).to.be.a("function");
  });

  it("should be an instance of deck", function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it("should be able to start with no cards", function() {
    const deck = new Deck();
    expect(deck.cards).to.deep.equal([]);
  });

  it("should be able to store multiple cards", function() {
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
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );

    const deck = new Deck([card1, card2, card3]);

    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it("should be able to count the number of cards in the deck", function() {
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
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );

    const deck = new Deck([card1, card2, card3]);

    var countedCards = deck.countCards();
    expect(countedCards).to.equal(3);
  });
});
