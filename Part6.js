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

      duel(adventurer_name){

        adventurer1Roll = adventurer_name.roll();
        adventurer2Roll = this.roll();

        

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
    
    // const healers = new AdventurerFactory("Healer");
    // const robin = healers.generate("Robin");
    
    // healers.generate("Sinchana");
    
    // console.log(healers.findByIndex(0));
    // console.log(healers.findByName("Sinchana"));
    // console.log(healers.listAllAdventurers());
    
  