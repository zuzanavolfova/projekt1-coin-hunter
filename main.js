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

let height = window.innerHeight; //vcetne scroll bar
let width = window.innerWidth;

/*let height = window.innerHeight; //vcetne scroll bar
let width = window.innerWidth;*/

panacek.style.left = panacekX + 'px'
panacek.style.top = panacekY + 'px'
mince.style.left = Math.floor(Math.random() * (height - 1)) + 'px'
mince.style.top = Math.floor(Math.random() * (width - 1)) + 'px'

/*osetrit, aby panacek nevylezl z herniho planu*/

function movePanacek(a, b, c, d) {
    panacekX = a;
    panacekY = b;
    panacek.style.left = panacekX + 'px';
    panacek.style.top = panacekY + 'px';
}

function collectCoin() {
    if (!(panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
        console.log('jsem tu');
        /*scoreVypocet += 1;
        document.querySelector('#score').textContent = scoreVypocet;
        
        mince.style.left = Math.floor(Math.random() * (width - 1)) + 'px';
        mince.style.top = Math.floor(Math.random() * (height - 1)) + 'px'*/
    }
}

function move(event, velikostPohybu) {
    if (panacekX < maxX && panacekX > 0 && panacekY < maxY && panacekY > 0) {
        if (event.keyCode === 40) {
            /*dolu*/
            movePanacek(panacekX, panacekY + velikostPohybu, panacekX + 'px', panacekY + 'px');
            collectCoin()
            panacek.src = 'obrazky/panacek.png'
        } else if (event.keyCode === 38) {
            /*nahoru*/
            movePanacek(panacekX, panacekY - velikostPohybu, panacekX + 'px', panacekY + 'px');;
            panacek.src = 'obrazky/panacek-nahoru.png'
        } else if (event.keyCode === 37) {
            /*doleva*/
            movePanacek(panacekX - velikostPohybu, panacekY, panacekX + 'px', panacekY + 'px');
            panacek.src = 'obrazky/panacek-vlevo.png'
        } else if (event.keyCode === 39) {
            /*doprava*/
            movePanacek(panacekX + velikostPohybu, panacekY, panacekX + 'px', panacekY + 'px');
            panacek.src = 'obrazky/panacek-vpravo.png'
        }
    }
    /*omezeni pohybu na okno*/
    else if (panacekX >= maxX) {
        movePanacek(panacekX - 5, panacekY, panacekX + 'px', panacekY + 'px')
        panacek.src = 'obrazky/panacek.png'
    } else if (panacekY >= maxY) {
        movePanacek(panacekX, panacekY - 5, panacekX + 'px', panacekY + 'px')
        panacek.src = 'obrazky/panacek.png'
    } else {
        movePanacek(panacekX + 5, panacekY + 5, panacekX + 'px', panacekY + 'px')
        panacek.src = 'obrazky/panacek.png'
    }
}




if (score === 6) {
    alert('Posbíral jsi celý poklad')
}