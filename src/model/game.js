const { User } = require("./User");

class Game {
  constructor(user, rounds, currentRound) {
    this.user = new User(user.name, parseInt(user.score), user.level);
    this.rounds = rounds;
    this.isGameOver = false;
    this.currentRound = rounds.find((round) => round.level === currentRound);
  }

  nextRound(question) {
    if (question.isCorrect) {
      this.user.addAward(this.currentRound.award);
      this.currentRound = this.rounds.find(
        (r) => r.level === this.currentRound.level + 1
      );
      if (!this.currentRound) {
        this.isGameOver = true;
      } else {
        this.user.level = this.currentRound.level;
      }
    } else {
      this.isGameOver = true;
    }
  }
}

module.exports = {
  Game,
};
