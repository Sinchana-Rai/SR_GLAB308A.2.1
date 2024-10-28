//  Part 3: Class Features

//What else should an adventurer be able to do? What other properties should they have?

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  
    roll (mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`)
  }
  
  }

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }

    setupTent()
    {
        console.log(`${this.name} is setting up tent...`)
        super.roll();
    }

    explore()
    {
        console.log(`${this.name} explores new things around...`)
        super.roll();
    }
  }

  // create a Companion class with properties and methods specific to the companions.


  class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
      this.loyalty = 100;
    }
  
    doPlayOutside() {
      const doPlayOutsideRoll = this.roll();
      console.log(`${this.name} play outside`);
      return doPlayOutsideRoll;
    }

  }

  const robin = new Adventurer("Robin", "explorer");
robin.inventory.push("sword", "potion", "artifact");

robin.companion = new Companion("Leo", "Cat");

robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory.push("small hat", "sunglasses");


robin.scout();

robin.setupTent();

robin.explore(); 

robin.companion.doPlayOutside();

robin.companion.companion.doPlayOutside();
