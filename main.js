// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacek = document.querySelector('#panacek')
let mince = document.querySelector('#mince')


let panacekX = 500;
let panacekY = 400;

let minceX = 100;
let minceY = 200;

let maxX = window.screen.availWidth;
let maxY = window.screen.availHeight;

let panacekSirka = 50;
let panacekVyska = 20;
let minceSirka = 20;
let minceVyska = 20;
let scoreVypocet = 0;

let height = window.innerHeight;
let width = window.innerWidth;

panacek.style.left = panacekX + 'px'
panacek.style.top = panacekY + 'px'
mince.style.left = Math.floor(Math.random() * (width - 1)) + 1 + 'px'
mince.style.top = Math.floor(Math.random() * (height - 1)) + 1 + 'px'

/*osetrit, aby panacek nevylezl z herniho planu*/

/*function pohniPanackem(a, b, c, d) {
    panacekX = a;
    panacekY = b;
    panacek.style.left = panacekX + 'px';
    panacek.style.top = panacekY + 'px';
}*/

function pohyb(event, velikostPohybu) {
    if (panacekX < maxX && panacekX > 0 && panacekY < maxY && panacekY > 0) {
        if (event.keyCode === 40) {
            /*dolu*/
            panacekX = panacekX;
            panacekY = panacekY + velikostPohybu;
            panacek.style.left = panacekX + 'px';
            panacek.style.top = panacekY + 'px';


        } else if (event.keyCode === 38) {
            /*nahoru*/

            pohniPanackem(panacekX, panacekY - velikostPohybu, panacekX + 'px', panacekY + 'px');
            panacekX = panacekX;
            panacekY = panacekY - velikostPohybu;
            panacek.style.left = panacekX + 'px';
            panacek.style.top = panacekY + 'px';
        }
        if (event.keyCode === 37) {
            /*doleva*/
            panacekX = panacekX - velikostPohybu;
            panacekY = panacekY;
            panacek.style.left = panacekX + 'px';
            panacek.style.top = panacekY + 'px';
        }
        if (event.keyCode === 39) {
            /*doprava*/
            panacekX = panacekX + velikostPohybu;
            panacekY = panacekY;
            panacek.style.left = panacekX + 'px';
            panacek.style.top = panacekY + 'px';
        }
    } else if (panacekX > maxX) {
        panacekX = maxX - 10;
        panacekY = panacekY;
        panacek.style.left = panacekX + 'px';
        panacek.style.top = panacekY + 'px'
    } else if (panacekY > maxY) {
        panacekX = panacekX;
        panacekY = maxY - 10;
        panacek.style.left = panacekX + 'px';
        panacek.style.top = panacekY + 'px'
    } else {
        panacekX = panacekX + 10;
        panacekY = panacekY + 10;
        panacek.style.left = panacekX + 'px';
        panacek.style.top = panacekY + 'px'
    }
}

if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
    /*pricist bod*/
    scoreVypocet += 1;
    document.querySelector('#score').textContent = scoreVypocet;
    /*přesunout minci*/
    mince.style.left = Math.floor(Math.random() * (width - 1)) + 1 + 'px'
    mince.style.top = Math.floor(Math.random() * (height - 1)) + 1 + 'px'
}


if (score === 6) {
    alert('Posbíral jsi celý poklad')
}