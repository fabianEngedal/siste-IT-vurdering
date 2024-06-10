document.addEventListener("DOMContentLoaded", function() {
    const beholder = document.getElementById('aimTrainerContainer');
    const bilde = document.getElementById('aimTrainerBlink');
    const teller = document.getElementById('aimTrainerTeller');
    const resultater = document.getElementById('aimTrainerResultater');
    const gjennomsnittligTidDisplay = document.getElementById('aimTrainerTid');
    const prøvIgjenKnapp = document.getElementById('aimTrainerProevIgjen');
    const lagreKnapp = document.getElementById('aimTrainerLagre');

    let klikkIgjen = 30;
    let klikkTider = [];
    let sisteKlikkTid = null;

    function flyttBilde() {
        const beholderRektangel = beholder.getBoundingClientRect();
        const bildeRektangel = bilde.getBoundingClientRect();
    
        const maxX = beholderRektangel.width - bildeRektangel.width;
        const maxY = beholderRektangel.height - bildeRektangel.height;
    
        const tilfeldigX = Math.floor(Math.random() * maxX);
        const tilfeldigY = Math.floor(Math.random() * maxY);
    
        bilde.style.left = `${tilfeldigX}px`;
        bilde.style.top = `${tilfeldigY}px`;
    }    
    
    function oppdaterTeller() {
        const nåværendeTid = new Date().getTime();
        
        const tidSidenSisteKlikk = nåværendeTid - sisteKlikkTid;
        klikkTider.push(tidSidenSisteKlikk);

        sisteKlikkTid = nåværendeTid;

        klikkIgjen--;
        teller.textContent = `Klikk igjen: ${klikkIgjen}`;
        
        if (klikkIgjen === 0) {
            bilde.removeEventListener('click', håndterKlikk);
            visResultater();
        }
    }

    function håndterKlikk() {
        if (!document.getElementById("aimTrainerOverskrift").classList.contains("skjult")) {
            document.getElementById("aimTrainerOverskrift").classList.add("skjult");
            document.getElementById("aimTrainerTekst").classList.add("skjult");
        }

        flyttBilde();
        oppdaterTeller();
    }

    function visResultater() {
        if (klikkTider.length > 0) {
            const gjennomsnittligTid = klikkTider.reduce((sum, intervall) => sum + intervall, 0) / klikkTider.length;
            gjennomsnittligTidDisplay.textContent = `${Math.round(gjennomsnittligTid)} ms`;
        } else {
            gjennomsnittligTidDisplay.textContent = "Ingen data tilgjengelig";
        }
        bilde.style.display = "none";
        teller.style.display = "none";
        resultater.classList.remove("skjult");
    }

    function tilbakestillSpill() {
        klikkIgjen = 30;
        klikkTider = [];
        sisteKlikkTid = null;
        teller.textContent = `Klikk igjen: ${klikkIgjen}`;
        bilde.style.display = "block";
        teller.style.display = "block";
        resultater.classList.add("skjult");
        document.getElementById("aimTrainerOverskrift").classList.add("skjult");
        document.getElementById("aimTrainerTekst").classList.add("skjult");
        flyttBilde();
        bilde.addEventListener("click", håndterKlikk);
    }


    bilde.addEventListener("click", håndterKlikk);

    prøvIgjenKnapp.addEventListener("click", tilbakestillSpill);
});
