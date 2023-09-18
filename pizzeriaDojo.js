function sandwichFactory(pan, proteína, queso, salsas) {
    var sandwich = {};
    sandwich.pan = pan;
    sandwich.proteína = proteína;
    sandwich.queso = queso;
    sandwich.salsas = salsas;
    return sandwich;
}
    
var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
console.log(s1);

/*
    -----------------Aclaracion------------------

    Decidí cambiarle el nombre a la variable "salsas del ejercicio,
    será renombrada como "agregados"

*/

function pizzaOven(tipoCorteza,tipoSalsa,quesos,agregados){
    var pizza={};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.agregados = agregados;
    console.log("Tu pizza contiene: ")
    return pizza;
}

let pizza1 = pizzaOven("estilo Chicago", "tradicional", "mozzarella",["pepperoni","salchicha"]);
console.log(pizza1);
let pizza2 = pizzaOven("lanzada a mano","marinara",["mozzarella","feta"],["champiñones","aceitunas","cebollas"]);
console.log(pizza2);
let pizza3 = pizzaOven("Con bordes de queso","tradicional","Parmesano",["salsa Barbecue","pepperoni","tocino"]);
console.log(pizza3);
let pizza4 = pizzaOven("lanzada a mano","tradicional","mozzarella",["pollo", "carne","pimenton"]);
console.log(pizza4);