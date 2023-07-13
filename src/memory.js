class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (!this.cards)
    return undefined  
    // ... write your code here
    for (let i = 0; i < this.cards.length; i++) {
      const randomIndex = Math.floor(Math.random() * this.cards.length)
      let tmp = this.cards[i]
      this.cards[i] = this.cards[randomIndex]
      this.cards[randomIndex] = tmp
    }
    return this.cards
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    console.log(card1, card2)
    console.log('ruuuun');
    this.pairsClicked++
   // const cardNames = [card1, card2]
    //onst areSame = cardNames.every((cardName) => cardName === cardName[0])
    if(card1=== card2) {
      this.pairsGuessed++
      return true 
    }
    return false
    }
  

  checkIfFinished() {
    // ... write your code here
    const numberOfPairs = Math.floor(this.cards.length / 2)
    if(this.pairsGuessed === numberOfPairs) {
      return true 
  }
  return false
  }
}
