class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = currentCard;
  }

  returnGuess = () => {
    return userGuess;
  };

  returnCard = () => {
    return currentCard;
  };

  evaluateGuess = () => {
    const guessMatch = this.currentCard.correctAnswer.find(answer => {
      return answer === this.userGuess;
    });
    return guessMatch;
  };

  giveFeedback = () => {
    if (this.evaluateGuess()) {
      return "correct!";
    } else if (!this.evaluateGuess()) {
      return "incorrect!";
    }
  };
}

module.exports = Turn;
