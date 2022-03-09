// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacek = document.querySelector('#panacek');
let mince = document.querySelector('#mince');

let panacekX = 500;
let panacekY = 400;

let maxX = window.screen.availWidth;
let maxY = window.screen.availHeight;

let panacekSirka = 64;
let panacekVyska = 70;
let minceSirka = 36;
let minceVyska = 36;
let scoreVypocet = 0;

let height = window.screen.availHeight; //vcetne scroll bar
let width = window.screen.availWidth;

/*let height = window.innerHeight; //vcetne scroll bar
let width = window.innerWidth;*/

panacek.style.left = panacekX + 'px'
panacek.style.top = panacekY + 'px'

let minceX = Math.floor(Math.random() * (maxX - 1));
let minceY = Math.floor(Math.random() * (maxY - 1));
mince.style.left = minceX + 'px';
mince.style.top = minceY + 'px';

/*osetrit, aby panacek nevylezl z herniho planu*/

let hudba;
hudba = document.querySelector("#hudba");
let zvukfanfara;
zvukfanfara = document.querySelector("#zvukfanfara");
let zvukmince;
zvukmince = document.querySelector("#zvukmince");

function play(a) {
    a.play();
}

function movePanacek(a, b, c, d) {
    panacekX = a;
    panacekY = b;
    panacek.style.left = panacekX + 'px';
    panacek.style.top = panacekY + 'px';
}

function collectCoin() {


    if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
        console.log('jsem tu');
        scoreVypocet += 1;
        document.querySelector('#score').textContent = scoreVypocet;
        minceX = Math.floor(Math.random() * (maxX - 1));
        minceY = Math.floor(Math.random() * (maxY - 1));
        mince.style.left = minceX + 'px';
        mince.style.top = minceY + 'px';
        play(zvukmince);
        if (scoreVypocet === 2) {
            alert('Gratuluji. Posbíral/a jsi celý poklad.');
            play(zvukfanfara);
            scoreVypocet = 0;
            document.querySelector('#score').textContent = scoreVypocet;
            if (mince.src = 'obrazky/mince.png') {
                mince.src = 'obrazky/mince-bronzova.png';
            }
        }
    }
}



function move(event, velikostPohybu) {
    if (panacekX < maxX && panacekX > 0 && panacekY < maxY && panacekY > 0) {
        if (event.keyCode === 40) {
            /*dolu*/
            movePanacek(panacekX, panacekY + velikostPohybu, panacekX + 'px', panacekY + 'px');
            panacek.src = 'obrazky/panacek.png';
        } else if (event.keyCode === 38) {
            /*nahoru*/
            movePanacek(panacekX, panacekY - velikostPohybu, panacekX + 'px', panacekY + 'px');;
            panacek.src = 'obrazky/panacek-nahoru.png';
        } else if (event.keyCode === 37) {
            /*doleva*/
            movePanacek(panacekX - velikostPohybu, panacekY, panacekX + 'px', panacekY + 'px');
            panacek.src = 'obrazky/panacek-vlevo.png';
        } else if (event.keyCode === 39) {
            /*doprava*/
            movePanacek(panacekX + velikostPohybu, panacekY, panacekX + 'px', panacekY + 'px');
            panacek.src = 'obrazky/panacek-vpravo.png';
        }
    }
    /*omezeni pohybu na okno*/
    else if (panacekX >= maxX) {
        movePanacek(panacekX - 5, panacekY, panacekX + 'px', panacekY + 'px')
        panacek.src = 'obrazky/panacek.png';
    } else if (panacekY >= maxY) {
        movePanacek(panacekX, panacekY - 5, panacekX + 'px', panacekY + 'px')
        panacek.src = 'obrazky/panacek.png';
    } else {
        movePanacek(panacekX + 5, panacekY + 5, panacekX + 'px', panacekY + 'px')
        panacek.src = 'obrazky/panacek.png';
    }
    collectCoin();

}