let friends = [];
let adds = prompt("aantel vrienden dat je wil toevoegen")

for (let i=0;i<adds;i++)
    {
      friends.push(prompt("voeg nieuwe vriend toe"))  
    }

for (let index =0; index<friends.length;index++)
    console.log(friends[index])