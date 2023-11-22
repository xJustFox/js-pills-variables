// Esercizio 1
let number = 100;
console.log(number);

// Esercizio 2
const PI = 3.1416;
console.log(PI);

// Esercizio 2/B
// ERRORE: PI = 3.14;
// console.log(PI);

// Esercizio 2/C
let radius = 8;
let circle = radius * 2 * PI;
console.log(circle);

// Esercizio 3
let name = "Carlo";
name = "Marco";
console.log(name);

// Esercizio 4
let greet = "Ciao, Mondo!";
console.log(greet);

// Esercizio 4/B
// let greet = "Come stai, Mondo?";
// console.log(greet);

// Esercizio 4/C
greet = greet + "Come stai?";
console.log(greet)


// Secondo blocco di esercizi

// Esercizio 1
let x = 5;
let y = 10;
let comparison = "";
if (x>y) {
    comparison = x;
} 
else{
    comparison = y;
}
console.log(comparison);

// Esercizio 2 
let a = "string";
let b = "string";
let comparison_string;
if (a == b) {
    comparison_string = "Le stringhe sono uguali";
} else {
    comparison_string = "Le stringhe sono diverse";
}

console.log(comparison_string);

// Esercizio 3
let num = 5;
let comparison_3 = false;

if (num == "5") {
    comparison_3 = true;
}

console.log(comparison_3);
