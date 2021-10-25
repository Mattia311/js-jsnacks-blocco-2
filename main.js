//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.


const text = document.getElementById('output')

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
console.log(bici[2]);

var filteredValue = bici.filter(function (item) {
    return item.name == "panda" && item.peso < 20;
});
console.log(JSON.stringify(filteredValue))

text.innerHTML = JSON.stringify(filteredValue)





