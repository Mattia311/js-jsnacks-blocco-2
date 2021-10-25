//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.


/*const text = document.getElementById('output')

const bici = [
    {
        name: 'audi',
        peso: 20,
    },
    {
        name: 'bmw',
        peso: 25,
    },
    {
        name: 'panda',
        peso: 15,
    },
    {
        name: 'ferrari',
        peso: 30,
    },
    {
        name: 'lambo',
        peso: 35,
    },
]


var filteredValue = bici.filter(function (item) {
    return item.name == "panda" && item.peso < 20;
});
console.log(JSON.stringify(filteredValue))

text.innerHTML = ('la bici con il peso minore è:' + JSON.stringify(filteredValue));*/









//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti. Nome sarà l’unica proprietà da compilare, mentre le altre saranno tutte settate a 0.


const squadre = [
    {
        name: 'milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        name: 'inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        name: 'lazio',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        name: 'roma',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        name: 'juve',
        puntiFatti: 0,
        falliSubiti: 0
    },
]

console.log(squadre);


//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti

function numeriRand () {
    let numRandom = Math.floor(Math.random() * 20) + 1
    
    return numRandom
}   
numeriRand()


squadre[0].puntiFatti = numeriRand()
squadre[0].falliSubiti = numeriRand()
squadre[1].puntiFatti = numeriRand()
squadre[1].falliSubiti = numeriRand()
squadre[2].puntiFatti = numeriRand()
squadre[2].falliSubiti = numeriRand()
squadre[3].puntiFatti = numeriRand()
squadre[3].falliSubiti = numeriRand()
squadre[4].puntiFatti = numeriRand()
squadre[4].falliSubiti = numeriRand()
console.log(squadre);




