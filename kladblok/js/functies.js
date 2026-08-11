// even oefenen met functies maken en daarna alles dat je maakt in een functie steken. 
function loopsOefenen(naam){
    console.log("ik heb deze functie geschreven voor " + naam +" en het toont iets op het scherm")
}

loopsOefenen("svekke");

let svekke = {
    naam: "svekke",
    woonplaats: "westmalle",
    leeftijd: 25,
    beroep: "iet me planken"
};

function loopDoorGegevens(){
    for(let [key,value] of Object.entries(svekke)){
        console.log(`${key}: ${value} `)
    }
};

loopDoorGegevens()

let namenKamp = [["sven", "wout", "michael", "eline", "lode", "kevin"], [12000, 10000, 500, 2500, 4000]
]

function namenMetPunten(){
for(let i=0; i< namenKamp.length; i++){
    console.log(`${i+1}`);
    for(let j=0; j< namenKamp[i].length; j++){
        console.log(namenKamp[i][j])
    }
}
}

namenMetPunten()
