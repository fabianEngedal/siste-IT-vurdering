document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById("sjimpanseContainer");
    const tekstContainer = document.getElementById("sjimpanseContainerTekst");
    const tekstElm = document.getElementById("sjimpanseTekst");
    const fortsettKnapp = document.getElementById("sjimpanseFortsettKnapp");
    const proevIgjenKnapp = document.getElementById("sjimpanseProevIgjenKnapp")
    const lagreKnapp = document.getElementById("sjimpanseLagreKnapp")

    let nåværendeNivå = 4;
    let nåværendeTall = 1;
    let liv = 3;
    let tallSkjult = false;

    function lagTilfeldigUnikIndeks(antall, maks) {
        const indekser = new Set();
        while (indekser.size < antall) {
            const tilfeldigIndeks = Math.floor(Math.random() * maks);
            indekser.add(tilfeldigIndeks);
        }
        return Array.from(indekser);
    }

    function skaffGridPosisjon(indeks) {
        const rad = Math.floor(indeks / 8) + 1;
        const kolonne = (indeks % 8) + 1;
        return { row: rad, col: kolonne };
    }

    function visTekst(tekst) {
        tekstElm.textContent = tekst;
        tekstContainer.style.display = "block";
        fortsettKnapp.style.display = "block";
    }

    function skjulTekst() {
        tekstElm.textContent = "";
        tekstContainer.style.display = "none";
        fortsettKnapp.style.display = "none";
    }

    function genererGridRuter(antall) {
        gridContainer.innerHTML = "";
        tallSkjult = false;
        nåværendeTall = 1;
        skjulTekst();

        const tilfeldigIndekser = lagTilfeldigUnikIndeks(antall, 40);

        tilfeldigIndekser.forEach((indeks, i) => {
            const gridRute = document.createElement("div");
            gridRute.classList.add("gridElm");
            gridRute.textContent = i + 1;

            const { row, col } = skaffGridPosisjon(indeks);
            gridRute.style.gridRowStart = row;
            gridRute.style.gridColumnStart = col;

            gridRute.addEventListener("click", () => {
                if (!tallSkjult && nåværendeTall === 1) {
                    document.querySelectorAll(".gridElm").forEach(item => {
                        item.textContent = "";
                        item.style.backgroundColor = "var(--hvit)";
                        item.style.borderColor = "var(--hvit)";
                    });
                    tallSkjult = true;
                }
                if (i + 1 === nåværendeTall) {
                    gridRute.style.visibility = "hidden";
                    nåværendeTall++;
                    if (nåværendeTall > antall) {
                        nåværendeNivå++;
                        genererGridRuter(nåværendeNivå);
                    }
                } else {
                    liv--;
                    document.querySelectorAll(".gridElm").forEach(item => {
                        item.classList.add("gjemt");
                    });
                    if (liv > 0) {
                        visTekst(`${3 - liv} av 3 liv brukt opp`);
                    } else {
                        visTekst(`Du kom til nivå ${nåværendeNivå}! Lagre resultatene eller prøv på nytt.`);
                        fortsettKnapp.style.display = "none";
                        proevIgjenKnapp.style.display = "flex";
                        lagreKnapp.style.display = "flex";

                    }
                }
            });

            gridContainer.appendChild(gridRute);
        });
    }

    fortsettKnapp.addEventListener("click", () => {
        genererGridRuter(nåværendeNivå);

    });

    proevIgjenKnapp.addEventListener("click", () => {
        nåværendeNivå = 4;
        liv = 3
        genererGridRuter(nåværendeNivå);
        proevIgjenKnapp.style.display = "none";
        lagreKnapp.style.display = "none";
    });
    
    document.getElementById("sjimpanseStartKnapp").addEventListener("click", () => {
        genererGridRuter(nåværendeNivå);
        document.getElementById("sjimpanseStart").style.display = "none";
    }) 
});