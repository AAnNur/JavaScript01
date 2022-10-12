// Ini adalah Contoh Callback Function yang kurang benar
const orderCoffee = () => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
    }, 3000);
    return coffee;
}
 
const coffee = orderCoffee();
console.log(coffee);

// Ini adalah Contoh Callback function yang benar
const orderCoffee1 = callback => {
    let coffee1 = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee1 = "Kopi sudah jadi!";
        callback(coffee1);
    }, 3000);
}
 
 
orderCoffee1(coffee1 => {
    console.log(coffee1);
});

// Callback Hell
// synchronus
function makeACake(...rawIngredients) {
    const ingredients = collectIngredients(rawIngredients);
    dough = makeTheDough(ingredients);
    pouredDough = pourDough(dough);
    cake = bakeACake(pouredDough);
    console.log(cake);
}

console.log(makeACake({ayam,melon}))


// asynchronus
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function(ingredients) {
        makeTheDough(ingredients, function(dough) {
            pourDough(dough, function(pouredDough) {
                bakeACake(pouredDough, function(cake) {
                    console.log(cake);
                })
            })
        })
    });
}

// Menggunakan Promise
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}
