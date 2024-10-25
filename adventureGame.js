//Part 1: Humble Beginnings

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat"
//     }
//     }
    
    // console.log(adventurer.inventory[0])  //we could find a sword at adventurer.inventory[0].

    //create a loop that logs each item in Robin’s inventory.
    
    adventurer.inventory.forEach((adv) => {
        console.log(adv)
    })

//=======================================================================

// Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.

const adventurer = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"],
        roll (mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
      },
        companion: {
            name: "Leo",
            type: "Cat" ,
            companion: {
                name: "Frank",
                type: "Flea",
                belongings: ["small hat", "sunglasses"]

                       }
                  }

          
     }
    
    adventurer.roll();
    adventurer.roll(4);


   
