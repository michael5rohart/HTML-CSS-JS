let firstname = ["Michael", "Sven", "wout", "Eline", "Senne"]
let lastname = ["Rohart", "Catthoor", "Oris", "Van nieuwburg", "Noten"]

if(firstname.length != lastname.length){
    console.log("voor en achternamen komt niet overeen")
}
else
    {
        for (let i =0; i<firstname.length; i++ )
            {
                console.log(firstname[i]+" "+lastname[i]);
            }
    }