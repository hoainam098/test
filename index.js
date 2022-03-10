
document.addEventListener('DOMContentLoaded',() =>{
    const gameScreen = document.querySelector('#gameScreen')
    const ball = document.querySelector('#ball')
    const  bar = document.querySelector('#bar')

    let gameWidth = 500;
    let gameheight = 700;

    let barY = 680;//680
    let barX = random(400);//190
    let barWidth = 200;
    let barHeight = 20;

    let ballX = random(470);//random
    let ballY = 0;//0
    let ballRadius = 30;
    let drop = 2;
    let ballSpeed = random(20);

    let isGameover = false
    let isColision = false

    let reset = 0;

    let timerId = setInterval(startGame,ballSpeed)
    console.log('Speed',ballSpeed)



    function barLocate() {
        bar.style.left = barX +'px'
        bar.style.top = barY +'px'

    } barLocate()

    function startGame() {
        ball.style.left = ballX + 'px'
        ballY += drop
        ball.style.top = ballY + 'px'
        dropBall()
    }

    if ((ballX+ballRadius>barX) &&
        (ballX < barX + barWidth)
    ) {
        isColision=true
    }
    console.log('isColision1',isColision)

    function dropBall() {
        if (!isColision){
            if (ballY === gameheight-ballRadius) {
                endGame()
            }
        } else  if (ballY === gameheight-ballRadius-barHeight) {
            reDrop()
        }
    }

    function reDrop() {
        isColision = false
        ballY = reset
        ballX = random(470)
        ballSpeed = random(20)
        if ((ballX+ballRadius>barX) &&
            (ballX< barX + barWidth)
        ) {
            isColision=true
            console.log('Re-speed',ballSpeed)
            setInterval(startGame,ballSpeed)
        } else if (ballY === gameheight-ballRadius) {
                endGame()
            }
    console.log('Re-Colision',isColision)
    }


    function random(randomx) {
        return Math.floor(Math.random() * randomx) + 1;
    }



    function endGame() {
        clearInterval(timerId)
         isGameover = true
         console.log("gameOver")
     }
})

