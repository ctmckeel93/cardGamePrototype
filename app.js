const {Creature, Battlefield, Spell} = require('./models')



creature1 = new Creature("Blue-eyes", 5, "rare", 500, 1000)
spell1 = new Spell("Drop", 2, "rare")
spell2 = new Spell("Drop2", 2, "rare")
spell3 = new Spell("Drop3", 2, "rare")
spell4 = new Spell("Drop4", 2, "rare")
spell5 = new Spell("Drop5", 2, "rare")
spell6 = new Spell("Drop6", 2, "rare")
field1 = new Battlefield()
field1.addToField(creature1)
field1.addToField(spell1)
field1.addToField(spell1)
field1.addToField(spell2)
field1.addToField(spell3)
field1.addToField(spell4)
field1.addToField(spell5)
field1.addToField(spell6)
console.log(field1.main)
console.log(field1.spells)



