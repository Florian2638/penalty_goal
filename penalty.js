let gardienGauche  = document.querySelector('.gardien_gauche')
let gardienCentre  = document.querySelector('.gardien_centre')
let gardienDroite  = document.querySelector('.gardien_droite')

let ballons = document.querySelectorAll('.ballon')

let ballonTire = document.querySelector('.ballon_tir')

let flecheGauche = document.querySelector('.flechegauche')
let flecheCentre = document.querySelector('.flechecentre')
let flecheDroite = document.querySelector('.flechedroite')


gardienGauche.style.display = 'none'
gardienDroite.style.display = 'none'

ballons[0].style.display = 'none'
ballons[1].style.display = 'none'
ballons[2].style.display = 'none'

flecheGauche.addEventListener('click', tireGauche)
flecheCentre.addEventListener('click', tireCentre)
flecheDroite.addEventListener('click', tireDroite)




function getRandomArbitrary(nb){
    return Math.floor(Math.random()* nb + 1)
    
}

function tireGauche(){
    let nbAlea = getRandomArbitrary(3)
    console.log('nbAlea',nbAlea)
    flecheGauche.style.display = 'none'
    flecheCentre.style.display = 'none'
    flecheDroite.style.display = 'none'
    ballonTire.style.display = 'none'
    ballons[0].style.display = 'block'
    let isGoal = true;
    if(nbAlea == 1){
        gardienCentre.style.display = 'none'
        gardienGauche.style.display = 'block'
        isGoal = false;
    }else if(nbAlea == 3){
        gardienCentre.style.display = 'none'
        gardienDroite.style.display = 'block'
    }
    
    checkIfGoal(isGoal)

    setTimeout(function() {
        gardienCentre.style.display = 'block'
        gardienDroite.style.display = 'none'
        gardienGauche.style.display = 'none'
        flecheGauche.style.display = 'block'
        flecheCentre.style.display = 'block'
        flecheDroite.style.display = 'block'
        ballonTire.style.display = 'block'
        ballons.forEach(bl => bl.style.display = 'none')
    },3000)
}

function tireCentre(){
    let nbAlea = getRandomArbitrary(3)
    flecheGauche.style.display = 'none'
    flecheCentre.style.display = 'none'
    flecheDroite.style.display = 'none'
    ballonTire.style.display = 'none'
    ballons[1].style.display = 'block'
    let isGoal = false;
    if(nbAlea == 1){
        gardienCentre.style.display = 'none'
        gardienGauche.style.display = 'block'
        isGoal = true
    }else if(nbAlea == 3){
        gardienCentre.style.display = 'none'
        gardienDroite.style.display = 'block'
        isGoal = true
    }

    checkIfGoal(isGoal)

    setTimeout(function () {
        gardienCentre.style.display = 'block'
        gardienDroite.style.display = 'none'
        gardienGauche.style.display = 'none'
        flecheGauche.style.display = 'block'
        flecheCentre.style.display = 'block'
        flecheDroite.style.display = 'block'
        ballonTire.style.display = 'block'
        ballons.forEach(bl => bl.style.display = 'none')
    },3000)
}

function tireDroite(){
    let nbAlea = getRandomArbitrary(3)
    flecheGauche.style.display = 'none'
    flecheCentre.style.display = 'none'
    flecheDroite.style.display = 'none'
    ballonTire.style.display = 'none'
    ballons[2].style.display = 'block'
    let isGoal = true;
    if(nbAlea == 3){
        gardienCentre.style.display = 'none'
        gardienDroite.style.display = 'block'
        isGoal = false
    }else if(nbAlea == 1){
        gardienCentre.style.display = 'none'
        gardienGauche.style.display = 'block'
    }

    checkIfGoal(isGoal)

    setTimeout(function(){
        gardienCentre.style.display = 'block'
        gardienDroite.style.display = 'none'
        gardienGauche.style.display = 'none'
        flecheGauche.style.display = 'block'
        flecheCentre.style.display = 'block'
        flecheDroite.style.display = 'block'
        ballonTire.style.display = 'block'
        ballons.forEach(bl => bl.style.display = 'none')
    },3000)
}

const goalScore = document.querySelector('.Score1')
const saveScore = document.querySelector('.Score2')


let rateSound = new Audio('audio/rate.mp3')
console.log(rateSound)
let goalSound = new Audio('audio/goal.mp3')
let looseSound = new Audio('audio/defaiteSound.mp3')
let siuuSound = new Audio('audio/siuu.mp3')

let win = document.querySelector('.win')
let victory = document.querySelector('.victory')
let croixRouge = document.querySelector('.croixRouge')
let gameOver = document.querySelector('.gameOver')


let countGoal = 0;
let countSave = 0;
function checkIfGoal(isGoal){
    
    if(isGoal) {
        countGoal++;
        goalScore.textContent = 'Goal : ' + countGoal;
        document.querySelector('.goal').style.display = 'block'
        goalSound.play()
        setTimeout(function() {
            document.querySelector('.goal').style.display = 'none'

        },3000)
    } else {
        countSave++;
        saveScore.textContent = 'Raté : ' + countSave;
        document.querySelector('.rate').style.display = 'block'
        rateSound.play()
        setTimeout(function() {
            document.querySelector('.rate').style.display = 'none'

        },3000)
    }

    if(countGoal == 5 || countSave == 5){
        console.log('Fini')
        setTimeout(function() {
            resultat()

        }, 2000)
        setTimeout(function() {
            resetGame()
        },3000)
        
        
    }
} 

function resetGame(){
    countGoal = 0
    countSave = 0
    goalScore.textContent = 'Goal : ' + countGoal;
    saveScore.textContent = 'Raté : ' + countSave;
    croixRouge.style.display = 'none'
    gameOver.style.display = 'none'
    win.style.display = 'none'
    victory.style.display ='none'
    nomJoueur()
    
    
    
    
}

function nomJoueur(){
    const playerName = document.querySelector('.Nom')
    const name = window.prompt('Entrez votre nom')
    playerName.textContent = name;
}

function resultat(){
    if(countGoal == 5){
        win.style.display = 'block'
        victory.style.display ='block'
        gardienCentre.style.display = 'none'
        gardienDroite.style.display = 'none'
        gardienGauche.style.display = 'none'
        ballons.forEach(bl => bl.style.display = 'none')
        siuuSound.play()
        
    }else if(countSave == 5){
        croixRouge.style.display = 'block'
        gameOver.style.display = 'block'
        gardienCentre.style.display = 'none'
        gardienDroite.style.display = 'none'
        gardienGauche.style.display = 'none'
        ballons.forEach(bl => bl.style.display = 'none')
        looseSound.play()
    }
}

resetGame()

