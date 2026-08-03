let firstint = prompt("eerste getal:");
let operator = prompt("operator:")
let secondint = prompt("tweede getal")
let som = 0
let minus = 0
let multip = 0

if (firstint != 0 || secondint !=0 && operator === "/")
    {
        if (operator === "*")
            {
                multip = firstint * secondint;
                console.log(multip)
            }
        else if (operator === "+")
            {
                som = parseInt(firstint) + parseInt(secondint);
                console.log(som)
            }
        else if (operator === "-")
            {
                minus = firstint - secondint;
                console.log(minus)
            }
        else {console.log(firstint / secondint)}
    }
else {"je mag niet delen door 0"}