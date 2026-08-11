// verander dit in een async await
fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((grap) => {
        console.log(grap.setup);
        console.log(grap.punchline);
    })
    .catch((fout) => {
        console.log("Er ging iets mis: " + fout);
    });

async function haalData() {
    try{
        let response = await fetch("https://official-joke-api.appspot.com/random_joke");
        let grap = await response.json();
        console.log(grap.setup);
        console.log(grap.punchline);
    }
    catch(fout){
        console.log("er ging iets mis: " + fout)

    }
    
}
    
