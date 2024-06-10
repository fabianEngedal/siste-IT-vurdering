const celleArray = [];
let gjeldendeNivå = 1;
let gjeldendeSteg = 0;

function opplysTilfeldigCelle() {
    const tilfeldigCelle = Math.floor(Math.random() * 9);
    celleArray.push(tilfeldigCelle)

    while (celleArray.length > gjeldendeSteg) {
        document.getElementById("celle" + (tilfeldigCelle + 1)).classList.add("opplys");
        setTimeout(() => {
            document.getElementById("celle" + (tilfeldigCelle + 1)).classList.remove("opplys");
        }, 600);
        gjeldendeSteg ++;
    } 
    gjeldendeSteg = 0;
    document.querySelectorAll(".sekvensRute").addEventListener("click", håndterKlikk())
}

function håndterKlikk(event) {
    if (event.target.id === document.getElementById('celle' + (tilfeldigCelle + 1))) {
        gjeldendeSteg++;
        console.log(gjeldendeSteg)
        if (gjeldendeSteg === gjeldendeNivå) {
            // Brukeren fullførte gjeldende nivå
            gjeldendeNivå++;
            opplysteCeller.length = 0; // Tømme arrayen
            setTimeout(() => {
                opplyseTilfeldigCelle();
            }, 1000);
        }
    } else {
        alert("Feil celle! Prøv igjen.");
        // Tilbakestill spillet
        opplysteCeller.length = 0; // Tømme arrayen
        gjeldendeNivå = 1;
        gjeldendeSteg = 0;
        setTimeout(() => {
            opplyseTilfeldigCelle();
        }, 1000);
    }
}

opplysTilfeldigCelle()
/* function opplyseTilfeldigCelle() {
    // Hvis dette er det første steget i et nytt nivå
    if (gjeldendeSteg === 0) {
        // Legg til den samme cellen som forrige nivå først
        opplysteCeller.push(opplysteCeller[0]);
    } else {
        // Legg til en ny tilfeldig celle
        const celleindeks = Math.floor(Math.random() * 9);
        opplysteCeller.push(celleindeks);
    }

    // Opplyse celler basert på den genererte sekvensen
    const timeout = 1000;
    opplysteCeller.forEach((celleindeks, index) => {
        setTimeout(() => {
            document.getElementById('celle' + (celleindeks + 1)).classList.add('opplys');
            setTimeout(() => {
                document.getElementById('celle' + (celleindeks + 1)).classList.remove('opplys');
            }, 500);
        }, timeout * index);
    });

    // Øke stegtelleren
    gjeldendeSteg = 0;
}

function håndterKlikk(event) {
    if (event.target.id === 'celle' + (opplysteCeller[gjeldendeSteg] + 1)) {
        gjeldendeSteg++;
        if (gjeldendeSteg === gjeldendeNivå) {
            // Brukeren fullførte gjeldende nivå
            gjeldendeNivå++;
            opplysteCeller.length = 0; // Tømme arrayen
            setTimeout(() => {
                opplyseTilfeldigCelle();
            }, 1000);
        }
    } else {
        alert("Feil celle! Prøv igjen.");
        // Tilbakestill spillet
        opplysteCeller.length = 0; // Tømme arrayen
        gjeldendeNivå = 1;
        gjeldendeSteg = 0;
        setTimeout(() => {
            opplyseTilfeldigCelle();
        }, 1000);
    }
}

document.getElementById('rutenett').addEventListener('click', håndterKlikk);

// Starte spillet
opplyseTilfeldigCelle(); */
