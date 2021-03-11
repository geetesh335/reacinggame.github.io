const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

startScreen.addEventListener('click', start);

let player = { speed: 5 };
let keys = { ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false };

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

function keyDown(e) {
    e.preventDefault();
    keys[e.key] = true;
}
function keyUp(e) {
    e.preventDefault();
    keys[e.key] = false;
}
function gamePlay() {

    let car = document.querySelector('.car');
    let road = gameArea.getBoundingClientRect();
    console.log(road);

    if (player.start) {
        if (keys.ArrowUp && player.y > road.top + 40) { player.y -= player.speed };
        if (keys.ArrowDown && player.y < road.bottom - 70) { player.y += player.speed };
        if (keys.ArrowLeft && player.x > 0) { player.x -= player.speed };
        if (keys.ArrowRight && player.x < 350) { player.x += player.speed };

        car.style.top = player.y + "px";
        car.style.left = player.x + "px";
        window.requestAnimationFrame(gamePlay);
    }
}
function start() {

    player.start = true;
    gameArea.classList.remove('hide');
    startScreen.classList.add('hide');
    window.requestAnimationFrame(gamePlay);

     for(var i=0; i<5;i++){
        let roadLine = document.createElement('div');
        roadLine.setAttribute('class', 'line');
        roadLine.style.top = (i*150) +"px";
        gameArea.appendChild(roadLine);
     }
   

    let car = document.createElement('div');
    car.setAttribute('class', 'car');
    gameArea.appendChild(car);

    player.x = car.offsetLeft;
    player.y = car.offsetTop;
}
