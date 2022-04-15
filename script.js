const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let position = 0;
let isJumping = false

function headleKeyup(event){
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }
}

function jump(){
    
    isJumping = true
    let upInterval = setInterval(() =>{
        //verifica se o dino está pulando
        if(position >= 180){
            clearInterval(upInterval);
            let downInterval = setInterval(() =>{
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
                

            })
        }
        //faz o pulo
        position += 20;
        dino.style.bottom = position + 'px';
    }, 20)
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 700;
    let randomTime = Math.random() * 6000;


    cactus.classList.add('cactus');
    cactus.style.left = 700 + "px";
    background.appendChild(cactus)

    let leftInterval = setInterval(() =>{
        

        if(cactusPosition < -1){
            clearInterval(leftInterval)
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval)
            document.body.innerHTML = '<h1 class="game-over">Game Over</h1>';

        } else{  
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px"; 
        }
    },20)

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', headleKeyup)