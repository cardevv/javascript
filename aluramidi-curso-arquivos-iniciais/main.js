function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);


   

   

if (elemento != null && elemento.localName === 'audio') {
    
      elemento.play();     
}
else {
    console.log ('Elemento não encontrado');
} 

}



const listaDeTeclas = document.querySelectorAll('.tecla');
/*
let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]


    //teemplate string

const idAudio = `#som_${instrumento}`

    tecla.onclick = function (){
        tocaSom(idAudio);
    };


    contador = contador + 1 ;

    //console.log(contador);

}

 */

for ( let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]


    //teemplate string

const idAudio = `#som_${instrumento}`

    tecla.onclick = function (){
        tocaSom(idAudio);
    };

    //console.log(contador);

    tecla.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter'){

            tecla.classList.add('ativa');
        }
        
        


    }

     tecla.onkeyup = function () {


          tecla.classList.remove('ativa');

     }
      



   }






