function carregar () {
var msg = document.querySelector('#msg')
var img = document.querySelector('#imagem')
var data = new Date()
var hora = data.getHours();
msg.innerHTML =  `Agora são ${hora} horas
`

if ( hora >= 0 && hora < 12) {

    img.src = 'imagens/manha.png'
    document.body.style.background = '#f4c398'


} else if (hora >= 12 && hora <= 18) {

    img.src = 'imagens/tarde.png'
    document.body.style.background = '#ffa638'
} else {
 
    img.src = 'imagens/noite.png'
    document.body.style.background = '#3e6f76'

}

}