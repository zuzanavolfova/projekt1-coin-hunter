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

panacek.style.left = panacekX + 'px'
panacek.style.top = panacekY + 'px'
mince.style.left = minceX + 'px'
mince.style.top = minceY + 'px'


function pohyb(event, velikostPohybu) {
    if (event.keyCode === 40) {
        panacekX = panacekX;
        panacekY = panacekY + velikostPohybu;
        panacek.style.left = panacekX + 'px';
        panacek.style.top = panacekY + 'px';
    } else if (event.keyCode === 38) {
        panacekX = panacekX;
        panacekY = panacekY - velikostPohybu;
        panacek.style.left = panacekX + 'px';
        panacek.style.top = panacekY + 'px';
    }
    if (event.keyCode === 37) {
        panacekX = panacekX - velikostPohybu;
        panacekY = panacekY;
        panacek.style.left = panacekX + 'px';
        panacek.style.top = panacekY + 'px';
    } else if (event.keyCode === 39) {
        panacekX = panacekX + velikostPohybu;
        panacekY = panacekY;
        panacek.style.left = panacekX + 'px';
        panacek.style.top = panacekY + 'px';
    }
}

if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
    /* přičíst body
    /*přesunout minci*/
}