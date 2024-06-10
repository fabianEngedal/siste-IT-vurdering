let genererteTall = [];
let nåværendeNivå = 1;
let visningstid = 3000; 

const startKnapp = document.getElementById("tallStartKnapp");
const sjekkKnapp = document.getElementById("tallSjekkKnapp");
const fortsettKnapp = document.getElementById("tallFortsettKnapp");
const prøvIgjenKnapp = document.getElementById("tallProevIgjenKnapp");
const lagreKnapp = document.getElementById("tallLagreKnapp");
const tilfeldigTallElement = document.getElementById("tallTilfeldigTall");
const progresjonsBarContainer = document.getElementById("progresjonsBarContainer");
const progresjonsBar = document.getElementById("progresjonsBar");
const svarSeksjon = document.getElementById("tallSvarSeksjon");
const brukerInput = document.getElementById("tallBrukerInput");
const brukerSvarElement = document.getElementById("tallBrukerSvar");
const riktigSvarElement = document.getElementById("tallRiktigSvar");
const resultatSeksjon = document.getElementById("tallResultatSeksjon");

startKnapp.addEventListener("click", startSpill);
sjekkKnapp.addEventListener("click", sjekkSvar);
fortsettKnapp.addEventListener("click", nesteNivå);
prøvIgjenKnapp.addEventListener("click", prøvIgjenSpill);

function startSpill() {
    resultatSeksjon.classList.add("skjult");
    fortsettKnapp.classList.add("skjult");
    prøvIgjenKnapp.classList.add("skjult");
    lagreKnapp.classList.add("skjult");
    brukerInput.value = "";
    genererteTall = [];
    nåværendeNivå = 1;
    visningstid = 3000;

    document.getElementById("tallOverskrift").classList.add("skjult");
    document.getElementById("tallTekst").classList.add("skjult");
    startKnapp.classList.add("skjult");

    visTilfeldigeTall();
}

function visTilfeldigeTall() {
    for (let i = 0; i < nåværendeNivå; i++) {
        genererteTall.push(Math.floor(Math.random() * 10));
    }
    tilfeldigTallElement.textContent = genererteTall.join(""); 
    tilfeldigTallElement.classList.remove("skjult");

    progresjonsBarContainer.classList.remove("skjult");

    progresjonsBar.style.width = "100%";
    setTimeout(() => {
        progresjonsBar.style.width = "0%";
    }, 50); 

    setTimeout(() => {
        tilfeldigTallElement.classList.add("skjult");
        progresjonsBarContainer.classList.add("skjult");
        svarSeksjon.classList.remove("skjult");
    }, visningstid);
}

function sjekkSvar() {
    const brukerInputVerdi = brukerInput.value;
    brukerSvarElement.textContent = brukerInputVerdi;
    riktigSvarElement.textContent = genererteTall.join("");

    resultatSeksjon.classList.remove("skjult");
    if (brukerInputVerdi == genererteTall.join("")) {
        fortsettKnapp.classList.remove("skjult");
    } else {
        prøvIgjenKnapp.classList.remove("skjult");
        lagreKnapp.classList.remove("skjult");
    }

    svarSeksjon.classList.add("skjult");
}

function nesteNivå() {
    nåværendeNivå++;

    resultatSeksjon.classList.add("skjult");
    fortsettKnapp.classList.add("skjult");
    prøvIgjenKnapp.classList.add("skjult");
    lagreKnapp.classList.add("skjult");
    brukerInput.value = "";
    genererteTall = [];

    visTilfeldigeTall();
}

function prøvIgjenSpill() {
   resultatSeksjon.classList.add("skjult");
    fortsettKnapp.classList.add("skjult");
    prøvIgjenKnapp.classList.add("skjult");
    lagreKnapp.classList.add("skjult");
    brukerInput.value = "";
    genererteTall = [];

    nåværendeNivå = 1;
    visningstid = 3000;

    visTilfeldigeTall();
}
