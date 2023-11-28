console.log("----------- Esercizio 1 ------------");
// Esercizio 1
let number = 100;
console.log(number);

console.log("----------- Esercizio 2 ------------");
// Esercizio 2
const PI = 3.1416;
console.log(PI);

// Esercizio 2/B
// ERRORE: PI = 3.14;
// console.log(PI);

console.log("----------- Esercizio 2/C ------------");
// Esercizio 2/C
let radius = 8;
let circle = radius * 2 * PI;
console.log(circle);

console.log("----------- Esercizio 3 ------------");
// Esercizio 3
let name = "Carlo";
name = "Marco";
console.log(name);

console.log("----------- Esercizio 4 ------------");
// Esercizio 4
let greet = "Ciao, Mondo!";
console.log(greet);

// Esercizio 4/B
// let greet = "Come stai, Mondo?";
// console.log(greet);

console.log("----------- Esercizio 4/C ------------");
// Esercizio 4/C
greet = greet + "Come stai?";
console.log(greet)

console.log("----------- Secondo blocco di esercizi ------------");
// Secondo blocco di esercizi

console.log("----------- Esercizio 1 ------------");
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

console.log("----------- Esercizio 2 ------------");
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

console.log("----------- Esercizio 3 ------------");
// Esercizio 3
let num = 5;
let comparison_3 = false;

if (num == "5") {
    comparison_3 = true;
}

console.log(comparison_3);


// Quarto blocco di esercizi

console.log("----------- Esercizio 1/A ------------");
// Esercizio 1/A
for (let i = 1; i <= 42; i++) {
    console.log(i)
    
}

console.log("----------- Esercizio 1/B ------------");
// Esercizio 1/B
for (let i = 42; i>= 1; i--) {
    console.log(i)
    
}

// Quinto blocco esercizi

console.log("----------- Esercizio 1/A ------------");
// Esercizio 1/A
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);

console.log("----------- Esercizio 1/B ------------");
// Esercizio 1/B
const fruits = ["mela", "banana", "pesca", "pera", "albicocca", "mango", "kiwi", "papaya"]
console.log(fruits);

console.log("----------- Esercizio 1/C ------------");
// Esercizio 1/C
console.log(fruits.length);

// Quarto blocco esercizi

console.log("----------- Esercizio 1/A ------------");
// Esercizio 1/A
function helloWorld() {
    alert("Hello World");
}

console.log("----------- Esercizio 1/B ------------");
// Esercizio 1/B
helloWorld();

console.log("----------- Esercizio 2/A ------------");
// Esercizio 2/A
function sumNum(num1, num2) {
    return num1 + num2;
}

console.log("----------- Esercizio 2/B ------------");
// Esercizio 2/B
sum = sumNum(20, 14);
console.log(sum);
