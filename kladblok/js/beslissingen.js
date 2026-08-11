// if functie maken

let pokemon = "bidoof";

if (pokemon === "Bidoof"){
    console.log("you are right!");
}
else if (pokemon === "snorlax"){
    console.log("good guess");
}
else {
    console.log("are you kidding?");
}

// switch


switch (pokemon) {
    case "bidoof":
        console.log("dit iss correct");
        break;
    case "charizard":
        console.log("deze is ook wel cool")
        break; 
    default:
        console.log("ben je mal? deze is helemaal niet cool");
        break;
}

// codditional opperator ? 

let coolstePokemon = "Bidoof"
let pokomongeuss = (pokemon === "Bidoof") ? "juist dit is het!" : (pokemon === "charizard") ? "deze is ook wel cool": "deze is niet cool";



// oefeningen 

// oefening 1 Hello ...!
let leeftijd = 45;
let voornaam = "bebe";
let achternaam = "best";

if (voornaam === "" && achternaam === ""){
    console.log("vul zowel voornaam als achternaam in");
}
else if (leeftijd >! 12 && leeftijd <! 60){
    console.log("U behoort niet tot de gezochte leeftijdscategorie");
}
else{
    console.log(`hallo ${voornaam} ${achternaam}, jij bent ${leeftijd} en dat is binnen de toegelaten leeftijd`);
}


// oefening 2 schrikkeljaar
let jaartal = Math.floor(Math.random() * (2025-1950 +1)) +1950;
console.log(jaartal);
if (jaartal%4 == 0){
    if(jaartal%100==0){
       if(jaartal%400==0){
        console.log("Dit jaar is een schrikkeljaar")
       }
       else{console.log("Dit is geen schrikkeljaar")}
    }
    else{console.log("dit jaar is een schrikkeljaar")}

}else {console.log("Dit is geen schrikkeljaar")}

// proberen korter te schrijven
let jaartal2 = Math.floor(Math.random() * (2025-1950 +1)) +1950;
console.log(jaartal2);
let correctjaartal = ((jaartal2 % 4 === 0 && jaartal2 % 100 !==0)|| ( jaartal2 %400 === 0)) ? "Dit is een schrikkeljaar" : "Dit is geen schrikkeljaar";
console.log(correctjaartal);


// oefening 3 

let eerstegetal = Math.floor(Math.random()*10000) +1;
let tweedegetal = Math.floor(Math.random()*10000) +1;
let operators = ["+", "-", "*", "/"];
let op = operators[Math.floor(Math.random() *operators.length)];
let resultaat;

if (op === "+"){
    resultaat = eerstegetal + tweedegetal;
}
else if (op === "-"){
    resultaat = eerstegetal - tweedegetal;
}
else if (op === "*"){
    resultaat = eerstegetal * tweedegetal;
}
else if(op === "/" || eerstegetal !== 0 || tweedegetal !==0){
    resultaat = eerstegetal / tweedegetal;
}
else{console.log("de gevraagde input is niet mogelijk, geef iets anders in");}
console.log(`${eerstegetal} ${op} ${tweedegetal} = ${resultaat}`);

// oefening 4

switch (op) {
    case "+":
         resultaat = eerstegetal + tweedegetal;
        break;
    case "-":
         resultaat = eerstegetal - tweedegetal;
        break;
    case "*":
     resultaat = eerstegetal * tweedegetal;
        break;
    case "/":
        if (tweedegetal !== 0){ 
            resultaat = eerstegetal / tweedegetal; } 
        else{console.log("niet mogelijk")}
        break;
    default: console.log("niet mogelijk")
        break;
}
console.log(`${eerstegetal} ${op} ${tweedegetal} = ${resultaat}`);


// oefening 5

