var inputText = document.querySelector('#texto')
var button = document.querySelector("#button")
var lista = document.querySelector('.list')

var tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || []


function mostrarTarefa() {
  lista.innerHTML = ''

  for(var item of tarefas) {
    var itemList = document.createElement('li')
    var itemText = document.createTextNode(item)
    

    itemList.setAttribute('class', 'itemCompra')

    var imgElement = document.createElement('img')
    imgElement.src = './img/trash.png'
    imgElement.setAttribute('class', 'img')

    var imgText = document.createTextNode('delete')
    imgElement.appendChild(imgText)



    var pos = tarefas.indexOf(item)
    imgElement.setAttribute('onclick', `removeTarefa(${pos})`)

    itemList.appendChild(itemText)
    
    itemList.appendChild(imgElement)

    lista.appendChild(itemList)
    
  }
  console.log(tarefas)
}
mostrarTarefa()

function addTarefa() {
  var tarefa = inputText.value
  tarefas.push(tarefa)
  
  
  inputText.value = ''
  mostrarTarefa()
  salvarNoLocalStorage()
}




function removeTarefa(pos) {
  tarefas.splice(pos, 1)
  mostrarTarefa()
  salvarNoLocalStorage()
}

function salvarNoLocalStorage() {
  localStorage.setItem('list_tarefas', JSON.stringify(tarefas))
}
