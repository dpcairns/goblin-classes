class Goblin {
    constructor(name, attack, defense, items, gold, hp) {
        this.name = name,
        this.attack = attack;
        this.defense = defense;
        this.items = items;
        this.gold = gold;
        this.hp = hp;
    }

    // any function that lives on an object is called . . . a METHOD!
    steal(someGold) {
        console.log(`Before stealing, ${this.name} has ${this.gold} gold`);
        this.gold += someGold;
        console.log(`After stealing, ${this.name} has ${this.gold} gold`);
    }

    takeDamage(someDamage) {
        console.log(`Before taking damage, ${this.name} has ${this.hp} hp`);
        this.hp -= someDamage;
        console.log(`After taking damage, ${this.name} has ${this.hp} hp`);

    }

    eatGrossThing(grossRating) {
        console.log(`${this.name} eats something with a gross rating of ${grossRating}`);

        this.takeDamage(grossRating);
    }

    attackSomebody(targetGoblin, extraDamage) {
        console.log(`${this.name} attacks ${targetGoblin.name} for ${this.attack}`);
        
        let damageToDeal = this.attack;

        for (let weapon of this.items) {
            damageToDeal += weapon.attackRating;
        }

        if (extraDamage) {
            damageToDeal += extraDamage;
        }

        targetGoblin.takeDamage(damageToDeal);
    }
}

// OOP
class Item {
    constructor(name, attackRating) {
        this.name = name;
        this.attackRating = attackRating;
    }
}

// what's the difference between a goblin and a fire goblin.
// that difference goes here in the subclass
class FireGoblin extends Goblin {
    constructor(name, attack, defense, items, gold, hp, fireColor) {
        // super is the SUPER class, which is the root goblin.
        // it needs all of the params to make a goblin for us
        super(name, attack, defense, items, gold, hp);

        this.fireColor = fireColor;
    }

    breatheFire(someTarget) {
        console.log(`${this.name} does extra fire damage! It is ${this.fireColor}`);
        this.attackSomebody(someTarget, 6);
    }
}

// instantiate our new goblin
// make a new INSTANCE of our goblin class
const squinty = new Goblin('squinty', 5, 3, [new Item('knife', 3), new Item('spoon', 1)], 6, 9);

const ace = new Goblin('ace', 5, 3, [
    new Item('knife', 7)
], 1, 9);

const scorcher = new FireGoblin('scorcher', 5, 3, [new Item('knife', 7)], 1, 9, 'blue');


squinty.steal(10);
squinty.eatGrossThing(3);
squinty.attackSomebody(ace);

// Normal Goblins cannot breathe fire
// squinty.breatheFire();
// ace.breatheFire();

// Fire goblins CAN breathe fire
scorcher.breatheFire(squinty);

// if you want to make a banana in OOP, you must make a gorilla and the whole jungle too.

// if you change the banana, you accientally change every that is SUBCLASSED off of banana.