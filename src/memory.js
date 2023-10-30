class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards) return undefined;

    for (let i = this.cards.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      this.cards.push(this.cards[randomIndex]);
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else if (card1 != card2) {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
