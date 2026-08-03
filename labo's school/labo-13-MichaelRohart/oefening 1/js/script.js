let firstname= prompt("je naam");
let lastname= prompt("je achternaam:")
let age = prompt("je leeftijd")


if (!firstname || !lastname)
    {
        console.log("vul zowel voornaam als achternaam in")
    }
else if (age <= 12 || age >= 62)
    {
        console.log("U behoort niet tot de geochte leeftijdsklasse!")
    }
else{ console.log("Je naam is " + firstname + " je achternaam is "+lastname + " je leeftijd is " + age)}

