
function calculateChaiIngredients() {
    // umber of cups
    const numberOfCups = parseFloat(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
    
    // Calc ingredients
    const water = 200 * numberOfCups;
    const milk = 50 * numberOfCups;
    const teaLeaves = 1 * numberOfCups;
    const sugar = 2 * numberOfCups;
    
    //results
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons\n`);
    console.log("Enjoy your Chai Bora!");
}

calculateChaiIngredients();