const skrivefelt = document.getElementById("skrivefelt");
const resultat = document.getElementById("skriveTestResultat");
const paragraf = document.getElementById("paragraf")
const paragrafArray = [
    "HTML består av kodeord, kalt tagger (engelsk tags), som benyttes for å angi betydningen og strukturen til teksten som de omslutter. En tagg kan typisk fortelle at teksten skal tolkes som en overskrift, være del av en nummerert liste eller være en lenke til en annen nettside. Tagger kan også referere til eksterne ressurser, slik som et bilde.", 
    "HTML har kun til hensikt å fortelle nettleseren hva slags innhold de forskjellige elementene på siden er. At overskrifter får større skriftstørrelse eller at lenker blir blå og understreket er en tilleggseffekt nettleseren gir teksten for å synliggjøre denne rollen.",
    "Det finnes to hovedtyper tagger av i HTML. Den ene typen er de som markerer et område med tekst og gir denne teksten en betydning. Slike tagger starter og avslutter henholdsvis før og etter den aktuelle teksten. Den avsluttende taggen inneholder en / for å markere avslutningen.",
    "Tagger kan også ha attributter som forteller noe mer om hvordan taggen skal oppføre seg. Et eksempel er img-taggen som setter inn et bilde. Denne taggen har blant annet de to attributtene src (bildefilas lokasjon) og alt (alternativ tekstrepresentasjon).",
    "I 2014 kom HTML5. HTML5 la vekt på å skille innhold og design, og fjernet en rekke design-tagger som fantes i tidligere versjoner. Alle funksjoner som ble fjernet, skal i dag gjøres via CSS. HTML5 har også lagt vekt på å fjerne behovet for eksterne avspillere eller plug-ins, og en av de store nyvinningene var en tagg for videoavspilling.",
    "CSS, format for stilsett for html-dokumenter på internett, standardisert av W3C. Stilsett er en enkel måte å definere stiler på, det vil si layoutegenskaper som skrifttyper, farger og linjeavstander, slik at alle dokumenter fra et gitt nettsted får samme design.",
    "Nordmannen Håkon Wium Lie spilte en sentral rolle i arbeidet som i 1994 munnet ut i den første definisjonen av CSS-formatet. Hovedprinsippet er at ulike elementer i web-dokumenter – som overskrifter, tabeller, hypertekst – omkranses av egne tagger («merkelapper»), og at definisjonen på elementets utseende hentes fra stilsettet.",
    "Server-side-programmering gjennom programmeringsspråk slik som PHP, Python og C# er imidlertid fortsatt svært viktig. Spesielt alt som har med sikkerhet å gjøre må utføres på serveren, ettersom JavaScript-kode i nettleseren lett kan påvirkes av brukeren. JavaScript sin store styrke er på interaktivitet og brukeropplevelse.",
    "JavaScript er et svakt typet språk, som gjør at variabler kan peke til alle typer verdier. Mange ulike programmeringsparadigmer støttes, slik som objektorientering og funksjonell programmering. JavaScript er også hendelsesorientert.",
    "Selv om JavaScript og programmeringsspråket Java har svært like navn, har de ikke like mye felles. JavaScript deler noe av syntaksen til Java, men ut over det var navnevalget et ønske om å trekke på populariteten som Java hadde."
]

paragraf.innerHTML = paragrafArray[(Math.floor(Math.random() * paragrafArray.length))];
const avsnitt = document.getElementById("avsnitt").innerText;

let startTid;
let intervall;

skrivefelt.addEventListener("input", () => {
    if (!startTid) {
        startTid = new Date().getTime();
        intervall = setInterval(oppdaterWPM, 800);
    }
    
    if (skrivefelt.value === avsnitt) {
        clearInterval(intervall);
        skrivefelt.disabled = true;
        visSluttWPM();
    }
});

function oppdaterWPM() {
    const tekstSkrevet = skrivefelt.value;
    const naaTid = new Date().getTime();
    const tidBrukt = (naaTid - startTid) / 1000;
    const antallOrd = tekstSkrevet.split(" ").filter(ord => ord.length > 0).length;
    const wpm = (antallOrd / tidBrukt) * 60;

    resultat.innerText = `WPM: ${Math.round(wpm)}`;
}

function visSluttWPM() {
    const naaTid = new Date().getTime();
    const tidBrukt = (naaTid - startTid) / 1000;
    const antallOrd = avsnitt.split(" ").length;
    const wpm = (antallOrd / tidBrukt) * 60;

    document.getElementById("spillSeksjon").classList.add("skjult");
    document.getElementById("resultatSeksjon").classList.remove("skjult");
    resultat.innerText = `Endelige WPM: ${Math.round(wpm)}`;
}

document.getElementById("skriveProevIgjen").addEventListener("click", () => {
    startTid = null;
    clearInterval(intervall);
    skrivefelt.value = "";
    skrivefelt.disabled = false;
    resultat.innerText = "WPM: 0";
    paragraf.innerHTML = paragrafArray[(Math.floor(Math.random() * paragrafArray.length))];
    document.getElementById("spillSeksjon").classList.remove("skjult")
    document.getElementById("resultatSeksjon").classList.add("skjult")
})