let input = prompt("geef je geboortejaar:" )

if (input %4 === 0)
    {
        if (input %100 ==0)
            {
                if (input%400==0)
                    {
                        console.log(input + "is een schrikkeljaar")
                    }
                else {input + "is geen schrikkeljaar"}
            }
        else {console.log(input +" is een schrikkeljaar")} 
    }
else {console.log(input +" is geen schrikkeljaar")}