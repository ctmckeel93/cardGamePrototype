

class Card {
    constructor(name, cost, rarity)
    {
        this.name = name
        //  Cost is an object declaring how much of each color the card costs to cast 
        this.cost = cost
        this.rarity = rarity

    }
}

module.exports = { Card }

