
let temps = 0
const timerElement = document.getElementById("timer")
let jaune = document.getElementById("jaune")
let orange = document.getElementById("orange")
let bleu = document.getElementById("bleu")
let rose = document.getElementById("rose")
let rouge = document.getElementById("rouge")
let vert = document.getElementById("vert")
let Démarrer = document.getElementById("start")
let ScoreDisDémarrer = document.getElementById("score")
let scores = document.getElementById("classement").innerText;
let countclassement = 0
let score = 0
let count = 0
let tabResult = []
let tabInput = []
const colors = ['rose', 'orange', 'bleu', 'jaune', 'rouge', 'vert']
let Jeu = false
document.getElementById("para")
var textdefin = document.getElementById("textdefin")
var texte = document.getElementById("classement")






function Démarrage(couleurchoisie) {
    if (Jeu == true) {
        tabInput.push(couleurchoisie.dataset.value)
        Affichagecouleur(couleurchoisie.dataset.value)
        if (tabInput[count] == tabResult[count]) {
            count++
            if (count > score) {
                tabInput = []
                score++
                ScoreDisDémarrer.textContent = "Level : " + score
                count = 0
                Couleurchoisie()
            }
        } else {
            countclassement = countclassement + 1

            texte.innerHTML = texte.innerHTML + "<br/>" + score;
            console.log(texte.innerHTML)
            countclassement++

            Fin()
        }

    }
}

Démarrer.addEventListener("click", function () {
    if (Jeu == false) {
        Démarrer.textContent = "Arreter"
        Jeu = true
        setInterval(diminuerTemps, 1000)
        textdefin.textContent = " "
        Couleurchoisie()
    } else {


        Fin()
    }
})




async function Affichagecouleur(couleur) {

    if (couleur == 'vert') {
        vert.id = 'vertfoncé'
        await pause(400);
        vert.id = 'vert'
    } else if (couleur == 'rouge') {
        rouge.id = 'rougefoncé'
        await pause(400);
        rouge.id = 'rouge'

    } else if (couleur == 'bleu') {
        bleu.id = 'bleufoncé'
        await pause(400);
        bleu.id = 'bleu'


    } else if (couleur == 'jaune') {
        jaune.id = 'jaunefoncé'
        await pause(400);
        jaune.id = 'jaune'

    } else if (couleur == 'orange') {
        orange.id = 'orangefoncé'
        await pause(400);
        orange.id = 'orange'

    } else if (couleur == 'rose') {
        rose.id = 'rosefoncé'
        await pause(400);
        rose.id = 'rose'

    }
}



async function Couleurchoisie() {
    for (i = 0; i <= score; i++) {
        await pause(800)

        Affichagecouleur(tabResult[i])
    }
    let randomNumber = Math.floor(Math.random() * 6);
    tabResult.push(colors[randomNumber])
    Affichagecouleur(tabResult[score])
}



function pause(temps) {
    return new Promise(resolve => setTimeout(resolve, temps));
}

function Fin() {
    ScoreDisDémarrer.textContent = "Niveau : 0"
    Démarrer.textContent = "Demarrer"
    textdefin.textContent = "Perdu"

    temps = 0

    tabInput = []
    tabResult = []
    score++
    count = 0
    score = 0
    Jeu = false
}



function diminuerTemps() {
    if (Jeu == true)
        timerElement.innerText = temps
    temps++
}


rose.addEventListener("click", function () {
    Démarrage(rose)
})

orange.addEventListener("click", function () {
    Démarrage(orange)
})

vert.addEventListener("click", function () {
    Démarrage(vert)
})

jaune.addEventListener("click", function () {
    Démarrage(jaune)
})

bleu.addEventListener("click", function () {
    Démarrage(bleu)
})

rouge.addEventListener("click", function () {
    Démarrage(rouge)
})
