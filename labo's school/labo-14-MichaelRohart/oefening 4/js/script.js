const grades = [16,12,16,7,17,14,9,8,18,12];

let som = 0;
let buizen =0;

for(let grade of grades)
    {
        som = som + grade
        console.log(som)
    }
console.log(som / grades.length)
console.log(som / (grades.length*20) *100);
for(let index = 0; index<grades.length; index++)
    {
        if (grades[index]<10){
            buizen++
        }
    }
        
   console.log(buizen) 