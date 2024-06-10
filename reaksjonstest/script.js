const reaksjonstestOverskrift = document.getElementById("reaksjonstestOverskrift");
const reaksjonstestTekst = document.getElementById("reaksjonstestTekst");
const reaksjonstestBoks = document.getElementById("reaksjonstestBoks");
const reaksjonstestKnapper = document.getElementById("reaksjonstestKnapper")

let reaksjonsTid = 0;
let aktivtSpill = false;
let fargeEndret = false;
let forsøk = [];
let startTid = new Date();
let sluttTid = new Date();
let tidRødTilGrønnID = null;

function startTest() {
    aktivtSpill = true;
    reaksjonstestOverskrift.innerHTML = "Vent på grønn...";
    reaksjonstestTekst.innerHTML = null;
    reaksjonstestBoks.style.backgroundColor = "var(--roed)";
    fjernEventListeners();
    
    tidRødTilGrønnID = setTimeout(() => {
        reaksjonstestBoks.style.backgroundColor = "var(--groenn)";
        reaksjonstestOverskrift.innerHTML = "Trykk!";
        fargeEndret = true;
        startTid = new Date();
    }, 1000 * tilfeldigTid());

    leggTilEventListener(iTesten);
}

function iTesten() {
    if (!fargeEndret) {
        clearTimeout(tidRødTilGrønnID);
        reaksjonstestOverskrift.innerHTML = "Vent til bakgrunnen skifter farge";
        reaksjonstestTekst.innerHTML = "Trykk for å prøve igjen";
        reaksjonstestBoks.style.backgroundColor = "grey";
        aktivtSpill = false;
        resetTest();
        return;
    } else {
        sluttTid = new Date();
        reaksjonsTid = sluttTid.getTime() - startTid.getTime();
        forsøk.push(reaksjonsTid);

        if (forsøk.length < 5) {
            reaksjonstestOverskrift.innerHTML = `${reaksjonsTid} ms`;
            reaksjonstestTekst.innerHTML = "Trykk for å fortsette";
            resetTest();
        } else {
            const gjennomsnitt = gjennomsnittReaksjonstider(forsøk);
            reaksjonstestOverskrift.innerHTML = `Din reaksjonsevne: ${gjennomsnitt} ms`;
            reaksjonstestTekst.innerHTML = "Lagre for å se hvordan du sammenligner med andre";

            reaksjonstestKnapper.classList.remove("skjult");
            resetTest(false);
        }
        aktivtSpill = false;
        reaksjonstestBoks.style.backgroundColor = "var(--blaa)";
    }
}

function resetTest(addStartTestListener = true) {
    fjernEventListeners();
    if (addStartTestListener) {
        leggTilEventListener(startTest);
    }
    fargeEndret = false;
    startTid = null;
    sluttTid = null;
    reaksjonsTid = 0;
}

function leggTilEventListener(handler) {
    reaksjonstestBoks.addEventListener("click", handler);
}

function fjernEventListeners() {
    reaksjonstestBoks.removeEventListener("click", startTest);
    reaksjonstestBoks.removeEventListener("click", iTesten);
}

function gjennomsnittReaksjonstider(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

function tilfeldigTid() {
    return Math.random() * 3 + 1.5;
}

document.getElementById("reaksjonstestProevIgjen").addEventListener("click", () => {
    resetTest();
    forsøk = [];
    reaksjonstestKnapper.classList.add("skjult")
})

leggTilEventListener(startTest);