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



function pohyb(elementSelector, velikostPohybu) {
    /*zjisti key code*/
    if (keyCode === 40) {
        x = x;
        y = y + velikostPohybu;
        elementSelector.style.left = x + 'px';
        elementSelector.style.top = y + 'px';
    } else if (keyCode === 38) {
        x = x;
        y = y - velikostPohybu;
        elementSelector.style.left = x + 'px';
        elementSelector.style.top = y + 'px';
    }
    if (keyCode === 37) {
        x = x - velikostPohybu;
        y = y;
        elementSelector.style.left = x + 'px';
        elementSelector.style.top = y + 'px';
    } else if (keyCode === 39) {
        x = x + velikostPohybu;
        y = y;
        elementSelector.style.left = x + 'px';
        elementSelector.style.top = y + 'px';
    }


}