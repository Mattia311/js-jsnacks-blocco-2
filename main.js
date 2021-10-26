





// quarto snack
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando foreach

const text = document.getElementById('output')
const bici = [
    {
        nome: 'bmw',
        peso: 50
    },
    {
        nome: 'ferra',
        peso: 34
    },
    {
        nome: 'lambo',
        peso: 30
    },
    {
        nome: 'gt',
        peso: 60
    },
    {
        nome: 'hbm',
        peso: 12
    }
]

bici.forEach((bicicle,index,Array) => {
    

    var filteredValue = bici.filter(function (item) {
        return item.nome == "hbm" && item.peso < 20;
    });
    console.log(JSON.stringify(filteredValue));
    text.innerHTML = ('la bici con il peso minore è:' + JSON.stringify(filteredValue))
})
