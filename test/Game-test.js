const chai = require("chai");
const expect = chai.expect;

const Game = require("../src/Round");
// const Round = require("../src/Round");
// const Card = require("../src/Card");
// const Turn = require("../src/Turn");
// const Deck = require("../src/Deck");

describe("Game", function() {
  it("should be a function", function() {
    const game = new Game();
    expect(Game).to.be.a("function");
  });

  it("should be an instance of game", function() {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });
});
