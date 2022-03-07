// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let panacek = document.querySelector('#panacek')

let x = 500;
let y = 400;

panacek.style.left = x + 'px'
panacek.style.top = y + 'px'



function pohyb(event, velikostPohybu) {
    if (event.keyCode === 40) {
        x = x;
        y = y + velikostPohybu;
        panacek.style.left = x + 'px';
        panacek.style.top = y + 'px';
    } else if (event.keyCode === 38) {
        x = x;
        y = y - velikostPohybu;
        panacek.style.left = x + 'px';
        panacek.style.top = y + 'px';
    }
    if (event.keyCode === 37) {
        x = x - velikostPohybu;
        y = y;
        panacek.style.left = x + 'px';
        panacek.style.top = y + 'px';
    } else if (event.keyCode === 39) {
        x = x + velikostPohybu;
        y = y;
        panacek.style.left = x + 'px';
        panacek.style.top = y + 'px';
    }
}