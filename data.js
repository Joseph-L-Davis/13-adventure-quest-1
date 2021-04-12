const monsters = {
    id: 'monsters',
    title: 'The Goon Squad',
    map: {
        top: '89%',
        left: '44%'
    },
    image: '../assets/monsters.jpeg',
    description: `
        Some foos run up on you demanding you join their goon squad or face fists... What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Bargain with them',
        result: `
            Tell them you hard of hearing and your glasses just broke, and although you cant bring anything to the proverbial table you CAN point them in the direction of some foos that been talking smack. They reward you with a couple coins and one says "go get you a cheeseburger my G, you did good'. 
        `,
        hp: 0,
        gold: 35
    }, {
        id: 'fight',
        description: 'Time to throw them hands!!!',
        result: `
            You fake like you're about to succumb to whatever demands they have when all of a sudden...POW! You hit the largest foo right in the kisser like you're tyson fighting the rain and he goes down! The rest of the squad is impressed but they still stomp you out, holding back ever so slightly because you showed heart.
        `,
        hp: -30,
        gold: 50
    }, {
        id: 'run',
        description: 'Book it!',
        result: `
            You point somewhere in the distance and say 'What is that?!' They all turn while you high tail it the other direction. Unfortunately you run directly into oncoming traffic and SPLAT! You lose 50hp.
        `,
        hp: -50,
        gold: 0
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A Dragon with swag',
    map: {
        top: '17%',
        left: '37%'
    },
    image: '../assets/dragon.jpeg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You run to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 40 hp damage. 
        `,
        hp: -35,
        gold: 15
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'The bag',
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: '../assets/treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    monsters, 
    treasure,
    dragon,
];

export default quests;