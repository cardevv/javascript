
/*

const lista = document.querySelector(".lista")




document.querySelector(".botao").addEventListener("click",function () {
    mostraTintas()

})


function mostraTintas() {
  if (lista.classList.contains("lista_show")) {

    lista.classList.remove("lista_show")

  }
else{
lista.classList.add("lista_show")

}
}



document.querySelector(".botao").addEventListener("click",function () {
    mostraTintas()

})

*/


const lista = document.getElementById("lista")

function mostraTintas() {
  if (lista.classList.contains("lista_show")) {
    lista.classList.remove("lista_show")
  } else {
    lista.classList.add("lista_show")
  }
  }



  document.querySelector(".botao").addEventListener("click",function() {
    mostraTintas();
  })

  