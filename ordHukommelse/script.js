const overskrift = document.getElementById("ordOverskrift")
const tekst = document.getElementById("ordTekst")
const startKnapp = document.getElementById("ordStartKnapp")
const spillSeksjon = document.getElementById("ordSpillSeksjon")
const scoreContainer = document.getElementById("ordScore")
const livContainer = document.getElementById("ordLiv")
const resultatSeksjon = document.getElementById("ordResultatSeksjon")
const resultat = document.getElementById("ordResultat")

let liv = 3;
let score = 0;
let ordArray = ["ambivalens", "antropomorfisme", "antitese", "arkaisk", "askese", "autonomi", "deferens", "determinisme", "dissonans", "dystopi", "ekklesiastisk", "epikureisk", "erudit", "eskapisme", "etnografi", "heuristikk", "histrionisk", "hyperbol", "ikonoklast", "indoktrinering", "katarsis", "konvergens", "konvolutt", "metafysikk", "modulasjon", "ontologi", "paradoks", "paradigme", "pedantisk", "pluralisme", "prestidigitasjon", "prokrastinere", "refleksiv", "repetisjon", "resiprositet", "sarkasme", "simile", "sofistikert", "subversiv", "syntese", "taktil", "topologi", "trope", "ubiquitous", "utilitarisme", "vitenskapsteori", "kaotisk", "eklektisk", "elefantastisk", "forsiktig", "nøkkelferdig", "lunefull", "melankolsk", "nysgjerrig", "oppriktig", "pålitelig", "rådgivende", "skjør", "triumferende", "uforstyrret", "varmtvannsbereder", "ventende", "ydmyk", "zombie", "astronomisk", "havfrue", "integrert", "klisjé", "lun", "magisk", "nysgjerrighet", "overfladisk", "pålitelighet", "rådgivning", "skeptisk", "trassig", "uforstyrrethet", "vaghet", "ynde", "ærlighet", "årvåkenhet"]; 
let visteOrd = [];
let gjeldendeOrd = "";

startKnapp.addEventListener("click", () => {
    overskrift.classList.add("skjult");
    tekst.classList.add("skjult");
    startKnapp.classList.add("skjult");
    spillSeksjon.classList.remove("skjult");
    nyttOrd();
})

function nyttOrd() {
        let tilgjengeligeOrd = [...ordArray, ...visteOrd];

        let tilfeldidIndeks = Math.floor(Math.random() * tilgjengeligeOrd.length);
        gjeldendeOrd = tilgjengeligeOrd[tilfeldidIndeks];

        document.getElementById("ord").textContent = gjeldendeOrd;
}

document.getElementById("nyttOrd").addEventListener("click", () => {
    if (liv > 1) {
        if (!visteOrd.includes(gjeldendeOrd)) {
            score++;
            scoreContainer.textContent = "Score: " + score;
            visteOrd.push(gjeldendeOrd);
            ordArray = ordArray.filter(ord => ord !== gjeldendeOrd);
        } else {
            liv--;
           livContainer.textContent = "Liv: " + liv;
        }
        nyttOrd();
    } else {
        resultat.innerHTML = `Du klarte ${score} ord`;
        resultatSeksjon.classList.remove("skjult");
        spillSeksjon.classList.add("skjult");
    }
})

document.getElementById("settOrd").addEventListener("click", () => {
    if (liv > 1) {
        if (visteOrd.includes(gjeldendeOrd)) {
            score++;
            scoreContainer.textContent = "Score: " + score;
        } else {
            liv--;
            livContainer.textContent = "Liv: " + liv;
        }
        nyttOrd();
    } else {
        resultat.innerHTML = `Du klarte ${score} ord`;
        resultatSeksjon.classList.remove("skjult");
        spillSeksjon.classList.add("skjult");
    }
})

document.getElementById("ordProevIgjen").addEventListener("click", () => {
    liv = 3;
    score = 0;
    ordArray = ["ambivalens", "antropomorfisme", "antitese", "arkaisk", "askese", "autonomi", "deferens", "determinisme", "dissonans", "dystopi", "ekklesiastisk", "epikureisk", "erudit", "eskapisme", "etnografi", "heuristikk", "histrionisk", "hyperbol", "ikonoklast", "indoktrinering", "katarsis", "konvergens", "konvolutt", "metafysikk", "modulasjon", "ontologi", "paradoks", "paradigme", "pedantisk", "pluralisme", "prestidigitasjon", "prokrastinere", "refleksiv", "repetisjon", "resiprositet", "sarkasme", "simile", "sofistikert", "subversiv", "syntese", "taktil", "topologi", "trope", "ubiquitous", "utilitarisme", "vitenskapsteori", "kaotisk", "eklektisk", "elefantastisk", "forsiktig", "nøkkelferdig", "lunefull", "melankolsk", "nysgjerrig", "oppriktig", "pålitelig", "rådgivende", "skjør", "triumferende", "uforstyrret", "varmtvannsbereder", "ventende", "ydmyk", "zombie", "astronomisk", "havfrue", "integrert", "klisjé", "lun", "magisk", "nysgjerrighet", "overfladisk", "pålitelighet", "rådgivning", "skeptisk", "trassig", "uforstyrrethet", "vaghet", "ynde", "ærlighet", "årvåkenhet"]; 
    visteOrd = [];
    gjeldendeOrd = "";
    livContainer.textContent = "Liv: " + liv;
    scoreContainer.textContent = "Score: " + score;
    spillSeksjon.classList.remove("skjult")
    resultatSeksjon.classList.add("skjult");
    console.log(Hei)
})