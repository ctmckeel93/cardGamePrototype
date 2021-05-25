const {Creature, Battlefield, Spell, Mana, Player} = require('./models')

const main = () => {
    const main = new Battlefield()
    main.startGame(2);
    console.log(main.players)
}

main()




