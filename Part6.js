  //part 5 
 
  
  class Character {
    constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
      return result;
    }
  
    static MAX_HEALTH = 100;
  }
  
  
  
    class Adventurer extends Character {
      constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    
        if (!Adventurer.ROLES.includes(role)) {
          throw new Error(`${role} is not a valid role`);
        }
      }
    
      static ROLES = ["Fighter", "Healer", "Wizard"];
    
      // Adventurers have the ability to scout ahead of them.
      scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
      }
    
      setupTent() {
        console.log(`${this.name} is setting up tent...`);
        super.roll();
      }
    
      explore() {
        console.log(`${this.name} explores new things around...`);
        super.roll();
      }

      duel(name1){



        while (this.health > 50 && name1.health > 50) {

            const adventurer1Roll = name1.roll();
            const adventurer2Roll = this.roll();
            
        if(adventurer1Roll > adventurer2Roll)
        {
            name1.health --;
            console.log(`${name1.name} wins this round.. ${this.name} looses a point` )

        }
        else if(adventurer2Roll > adventurer1Roll)
        {
            this.health --;
            console.log(`${this.name} wins this round.. ${name1.name} looses a point` )

        }
        else{
        console.log(`Its a tie for health points`)
        }
    }
        if (this.health > 50) {
            console.log(`${this.name} wins the duel with ${this.health} health remaining!`);
          } else {
            console.log(`${name1.name} wins the duel with ${name1.health} health remaining!`);
          }

      }

      
    }
  
    class AdventurerFactory {  
      constructor(role) {
        this.role = role;
        this.adventurers = [];
      }
    
      generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer;  
      }
    
      findByIndex(index) {
        return this.adventurers[index];
      }
    
      findByName(name) {
        return this.adventurers.find((a) => a.name === name);
      }
    
      listAllAdventurers() {
        return this.adventurers;  
      }
    }
    
    const healer1 = new AdventurerFactory("Healer");
    const robin = healer1.generate("Robin");

    const fighter1 = new AdventurerFactory("Fighter")
    const john = fighter1.generate("John")

    robin.duel(john)