const { Creature, Spell, Battlefield } = require('./index.js')

class Player {
    constructor(name){
        this.name = name 
        this.hand = []
        this.grave = []
        this.life = 20
        this.deck = []
        this.exile = []
        this.poison = 0
        this.field = new Battlefield()
        this.mana = {
            colorless: 0,
            white: 0,
            black: 0,
            red: 0,
            green: 0,
            blue: 0
        }
    }

    draw(){
        if (this.deck.length > 0){
            let top = this.deck.pop()
            this.hand.push(top)
            console.log(top)
        }
        else {
            console.log("Your deck is empty, you lose the game by condition: Mil")
        }
    }

    discard(card) {
        if (this.hand.length > 0){

            for (let i =0; i < this.hand.length; i++){
                if (this.hand[i].name === card){
                    if (i === this.hand.length-1 ){
                        var selected = this.hand.pop()
                        this.grave.push(selected)
                    }
                    else {
                        temp = this.hand[i]
                        this.hand[i] =  this.hand[this.hand.length-1]
                        this.hand[this.hand.length-1] = temp 
                        selected = this.hand.pop()
                        this.grave.push(selected)
                    }
                }
            }
        }
        else {
            console.log("Nothing  to discard")
        }
        return this 
    }

    tap(mana){
        mana.forEach(card => {
            if (this.field.contains(card)){

                if (card instanceof Mana){
                    if (card.isPlains){
                        this.mana.white += card.value.white
                    }
                    if (card.isSwamp){
                        this.mana.black += card.value.black
                    }
                    if (card.isMountain){
                        this.mana.red += card.value.red 
                    }
                    if (card.isForest){
                        this.mana.green += card.value.green 
                    }
                    if (card.isIsland){
                        this.mana.blue += card.value.blue
                    }
                    if (card.isColorless){
                        this.mana.colorless += card.value.colorless
                    }
                }
                else {
                    console.log("This is not mana")
                }
            }
            else {
                console.log("Card is not on the field ")
                return null 
            }
        });
    }
}

module.exports = { Player }


