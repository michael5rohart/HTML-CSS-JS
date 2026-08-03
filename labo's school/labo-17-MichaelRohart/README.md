# Labo 17

Zorg dat je de volgende folderstructuur volgt:

```
webtechnologie/
├─ labo-01/
│  ├─ oefening-01/
│  │  ├─ index.html
│  │  ├─ images/
│  │  │  ├─ image-1.jpg 
│  │  │  └─ image-n.jpg 
│  │  ├─ css/
│  │  │   ├─ reset.css
│  │  │   └─ style.css
│  │  └─ js/
│  │     └─ script.js
│  ├─ oefening-02/
│  └─ oefening-n/
├─ labo-02/
└─ labo-n/      
```

- Gebruik steeds JS modules om globale variabelen te vermijden (`<script type="module" src="./path/to/script.js"></script>`)
- Volg de [Coding Guidelines](https://apwt.gitbook.io/webtechnologie/coding-guidelines)
- Maak voor elke oefening een aparte map. Volg de bovenstaande folderstructuur.

## Oefeningen DOM manipulatie

### oefening 1: tekst plaatsen

#### leerdoelen

* een HTML-element selecteren o.b.v. id
* de inhoud van een HTML-element wijzigen

#### functionele analyse

Jouw programma gaat de titel op een website aanpassen naar de inhoud van een variabele.

#### technische analyse

In jouw HTML voorzie je een h1-element met als tekst "Hello world!".

Plaats in jouw code de tekst "Welkom op onze website" in een variabele. Gebruik deze om de inhoud van de `h1` op de website aan te passen.

#### voorbeeldinteractie

![voorbeeldinteractie](./voorbeeldinteractie-tekst-plaatsen.avif)

### oefening 2: attributen lezen

#### leerdoelen

* een HTML-element selecteren op basis van id
* attributen van een HTML-element lezen

#### functionele analyse

Lees de waarde van het "src"-attribuut van een afbeelding en toon deze in de console.

#### technische analyse

Voeg in jouw HTML een img-element toe met een id en een src attribuut die wijst naar een afbeelding. Je kunt gebruik maken van een placeholder.co afbeelding (bv. https://placehold.co/600x400?text=Hello+World)
In jouw JavaScript-code selecteer je dit img-element op basis van het id en lees je de waarde van het "src"-attribuut. Toon deze waarde vervolgens in de console.

#### voorbeeldinteractie

![voorbeeldinteractie](./voorbeeldinteractie-attributen-lezen.avif)

### oefening 3: attributen wijzigen

#### leerdoelen

* een HTML-element selecteren op basis van tag
* attributen van een HTML-element wijzigen

#### functionele analyse

Je moet de bron van een afbeelding wijzigen op basis van een variabele.

#### technische analyse

In jouw HTML heb je een img-element met een id en een standaardbron, bijvoorbeeld "https://placehold.co/600x400?text=Hello+World".

Maak in jouw JavaScript-code een variabele met de naam `newSource` en wijs hieraan een nieuwe afbeeldings-URL toe (bv. https://placehold.co/600x400?text=Nieuw).

Selecteer het img-element op de pagina op basis van het id en wijzig het attribuut "src" naar de waarde van de variabele `newSource`. Zo moet de afbeelding op de website veranderen afhankelijk van de nieuwe bron die je hebt opgegeven.

#### voorbeeldinteractie

![voorbeeldinteractie](./voorbeeldinteractie-attributen-wijzigen.avif)

### oefening 4: style rechtstreeks aanpassen

#### leerdoelen

* een HTML-element selecteren op basis van id
* stijlen van een HTML-element wijzigen

#### functionele analyse

Pas de tekstkleur van een alinea aan op basis van een variabele.

#### technische analyse

Voeg in jouw HTML 2 `p`-elementen toe met verschillende tekstinhoud en verschillende classes.

Selecteer de p-elementen op de pagina op basis van de classes en pas de tekstkleur aan naar een nieuwe waarde (kies voor hex of rgb notatie). Hierdoor moeten de paragrafen een nieuwe tekstkleur hebben.

#### voorbeeldinteractie

![voorbeeldinteractie](./voorbeeldinteractie-stijl-aanpassen.avif)

### oefening 5: elementen verwijderen

#### leerdoelen

* bestaande HTML-elementen verwijderen

#### functionele analyse

Verwijder een item uit een lijst.

#### technische analyse

In jouw HTML, creëer een ongeordende lijst (ul) met enkele lijstitems (li).

Selecteer een bestaand lijstitem (bv. het eerste) en verwijder dit item uit de lijst.

#### voorbeeldinteractie

![voorbeeldinteractie](./voorbeeldinteractie-element-verwijderen.avif)

### oefening 6: elementen toevoegen

#### leerdoelen

* nieuwe HTML-elementen maken
* bestaande HTML-elementen wijzigen

#### functionele analyse

Voeg een nieuw item toe aan een lijst.

#### technische analyse

In jouw HTML, creëer een ongeordende lijst (ul) met enkele lijstitems (li).

In jouw JavaScript-code, maak een nieuw li-element aan met de tekst "Nieuw Item" en voeg dit toe aan de bestaande ul. Toon het resultaat in de console.

Deze oefening laat zien hoe je dynamisch nieuwe elementen aan een pagina kunt toevoegen.

#### voorbeeldinteractie

![voorbeeldinteractie](./voorbeeldinteractie-elementen-toevoegen.avif)

### oefening 7: tekstinhoud lezen

#### leerdoelen

* een HTML-element selecteren op basis van tag
* de inhoud van een HTML-element lezen

#### functionele analyse

Lees de tekstinhoud van een paragraaf en toon deze in de console.

#### technische analyse

Voeg in jouw HTML een p-element toe met wat tekstinhoud.

In jouw JavaScript-code, selecteer dit p-element op basis van de tag en lees de tekstinhoud ervan. Toon deze tekst vervolgens in de console.

#### voorbeeldinteractie

![voorbeeldinteractie](./voorbeeldinteractie-tekstinhoud-lezen.avif)

### oefening 8: stijlen lezen

#### leerdoelen

* een HTML-element selecteren op basis van id
* stijlinformatie van een HTML-element lezen

#### functionele analyse

Lees de achtergrondkleur van een div-element met een specifieke id en toon deze in de console.

#### technische analyse

Voeg in jouw HTML een div-element toe met een id, bijvoorbeeld `bg-grey`, en pas wat stijlen toe, zoals achtergrondkleur.

In jouw JavaScript-code, selecteer dit div-element op basis van de id en lees de achtergrondkleur. Toon deze kleur vervolgens in de console.

#### voorbeeldinteractie

![voorbeeldinteractie](./voorbeeldinteractie-stijlen-lezen.avif)

## Oefeningen DOM manipulatie

- De nodige bestanden staan reeds klaar in deze repository (startbestanden-9)
- In je browser zou je het volgende moeten zien als je de pagina opent: ![startbestand](./startbestand.png)

### oefening 9: social media icons

#### functionele analyse

* Plaats de social media icons op het scherm vanuit JavaScript
* Voeg HTML toe zoals visueel weergegeven in de voorbeeldinteractie.
* Elk social media icon bestaat uit:
  * een li-element
  * een a-element met een juiste link
  * een img-element met een juist icoon

#### technische analyse

* Maak een `socials.js`-bestand aan en plaats hierin de volgende array:
```javascript
const socials = [
  { platform: "youtube", link: "https://www.youtube.com" },
  { platform: "instagram", link: "https://www.instagram.com/" },
  { platform: "facebook", link: "https://www.facebook.com/" },
  { platform: "twitter", link: "https://twitter.com/" },
];
```

* Selecteer het `ul`-element met ID `socials` en voeg hier met behulp van JavaScript per social media platform de nodige elementen aan toe, bijvoorbeeld:
```html
<li>
 <a href="https://www.youtube.com" target="_blank">
    <img src="assets/iconyoutube.png"/>
 </a>
</li>
 ```

#### voorbeeldinteractie

![voorbeeldinteractie](./socials.png)
