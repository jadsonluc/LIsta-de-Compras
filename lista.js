
let texto = document.getElementById("texto")
let btn = document.getElementById("btn")
let num = document.getElementById("number")
let lista = document.querySelector('ul')

let listaItem = []

function adicionar(){
    let item = texto.value
    listaItem.push(item)
    texto.value = ""
    mostraTarefa()
}

function mostraTarefa() {
    lista.innerHTML = ''
    for(var itens of listaItem){
        let novoItem = document.createElement('li')
        let novoTexto = document.createTextNode(itens)
        let pos = listaItem.indexOf(itens)
        novoItem.appendChild(novoTexto)
        lista.appendChild(novoItem)
    }
}