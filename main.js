// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacek = document.querySelector('#panacek');
let mince = document.querySelector('#mince');
let typMince = 0;



let maxY = window.innerHeight - 70;
let maxX = window.innerWidth - 70;
let width = window.screen.availWidth - 70;
let heigh = window.screen.availHeight - 70;

let panacekSirka = 64;
let panacekVyska = 70;
let minceSirka = 36;
let minceVyska = 36;
let scoreVypocet = 0;
let vitezneScore = 5;

let hraniceMenuX = 0;
let hraniceMenuY = 160;

let panacekX = 500;
let panacekY = 400;
panacek.style.left = panacekX + 'px'
panacek.style.top = panacekY + 'px'

let minceX = Math.floor(Math.random() * (maxX - hraniceMenuX)) + hraniceMenuX;
let minceY = Math.floor(Math.random() * (maxY - hraniceMenuY)) + hraniceMenuY;
mince.style.left = minceX + 'px';
mince.style.top = minceY + 'px';

/*osetrit, aby panacek nevylezl z herniho planu*/

let hudba;
hudba = document.querySelector("#hudba");
let zvukfanfara;
zvukfanfara = document.querySelector("#zvukfanfara");
let zvukmince;
zvukmince = document.querySelector("#zvukmince");



function movePanacek(x, y) {
    panacekX = x;
    panacekY = y;
    panacek.style.left = panacekX + 'px';
    panacek.style.top = panacekY + 'px';
}

function score() {
    scoreVypocet += 1;
    document.querySelector('#score').textContent = scoreVypocet;
    minceX = Math.floor(Math.random() * (maxX - hraniceMenuX)) + hraniceMenuX;
    minceY = Math.floor(Math.random() * (maxY - hraniceMenuY)) + hraniceMenuY;
    mince.style.left = minceX + 'px';
    mince.style.top = minceY + 'px';
}

function checkWinning() {
    if (scoreVypocet === vitezneScore) {
        zvukfanfara.play();
        alert('Gratuluji. Posbíral/a jsi celý poklad.');
        scoreVypocet = 0;
        document.querySelector('#score').textContent = scoreVypocet;
        typMince++;
        changeTypMince();
    }
}

function collectCoin() {
    if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
        console.log('jsem tu');
        score();
        zvukmince.play();
        checkWinning();
    }
}

function changeTypMince() {
    if (typMince === 0) {
        mince.src = 'obrazky/mince-bronzova.png';
    } else if (typMince === 1) {
        mince.src = 'obrazky/mince-stribrna.png';
    } else if (typMince === 2) {
        mince.src = 'obrazky/mince.png';
        typMince = -1;
    }
}

function move(event, velikostPohybu) {
    if (panacekX < maxX && panacekX > hraniceMenuX && panacekY < maxY && panacekY > hraniceMenuY) {
        if (event.keyCode === 40) {
            /*dolu*/
            movePanacek(panacekX, panacekY + velikostPohybu);
            panacek.src = 'obrazky/panacek.png';
        } else if (event.keyCode === 38) {
            /*nahoru*/
            movePanacek(panacekX, panacekY - velikostPohybu);
            panacek.src = 'obrazky/panacek-nahoru.png';
        } else if (event.keyCode === 37) {
            /*doleva*/
            movePanacek(panacekX - velikostPohybu, panacekY);
            panacek.src = 'obrazky/panacek-vlevo.png';
        } else if (event.keyCode === 39) {
            /*doprava*/
            movePanacek(panacekX + velikostPohybu, panacekY);
            panacek.src = 'obrazky/panacek-vpravo.png';
        }
    } else if (panacekX >= maxX) {
        movePanacek(panacekX - 5, panacekY)
        panacek.src = 'obrazky/panacek.png';
    } else if (panacekY >= maxY) {
        movePanacek(panacekX, panacekY - 5)
        panacek.src = 'obrazky/panacek.png';
    } else {
        movePanacek(panacekX + 5, panacekY + 5)
        panacek.src = 'obrazky/panacek.png';
    }
    collectCoin();

}
let button = document.querySelector('.button');

function pauseSound() {
    hudba.pause();
}

function playSound() {
    hudba.play()
}