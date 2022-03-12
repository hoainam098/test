const gameScreen = document.querySelector('#gameScreen')
const ball = document.querySelector('#ball')
let barr = document.getElementById('bar');

let space = 10;
// function moveL() {
//     setInterval(acLeft, 30);
// }
//
// function moveR() {
//     setInterval(acRight, 30);
// }


function acLeft() {
    bar.style.left = parseInt(bar.style.left) - 5 + 'px'
}

function acRight() {
    bar.style.left = parseInt(bar.style.left) + 5 + 'px'
}


function moveBar(e) {
    // let ml = setInterval(acLeft, 30);
    let mr = setInterval(acRight, 30);
    clearInterval(mr)


    switch (e.keyCode) {
        case 37:
            clearInterval(mr)
            // setInterval(acLeft,30)
            break;
        case 39:
            clearInterval(ml)
            // setInterval(acRight,30)
            break;
    }
}
addEventListener("keydown", moveBar)
console.log('barLocate',parseInt( bar.style.left))