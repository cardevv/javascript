function verificar () {
var data = new Date();
var ano = data.getFullYear()
var fAno = document.querySelector('#txtano');
var res = document.querySelector('#res');
 if(fAno.value.length == 0 || fAno.value > ano) {
    alert('[ERRO] verifique os dados e tente novamente!')
 } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var gen ='';
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    
    if (fsex[0].checked) {
        gen = 'Homem'
        if (idade >= 0 && idade < 10) {
            //Criança

            img.setAttribute('src', 'imagens/homibebe.png')

        } else if (idade < 25) {
            //Jovem

            img.setAttribute('src', 'imagens/homijovem.png')

        } else if ( idade < 50) {

            //Adulto
            img.setAttribute('src', 'imagens/homimedio.png')


        } else {
            //Idoso

            img.setAttribute('src', 'imagens/homiveio.png')

        }


    } else if (fsex[1].checked) {
        gen = 'Mulher';
        if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'imagens/muiebebe.png')
        } else if (idade < 25) {
            //Jovem

            img.setAttribute('src', 'imagens/muiejovem.png')

        } else if ( idade < 50) {

            //Adulto
            img.setAttribute('src', 'imagens/muiemedia.png')

        } else {
            //Idoso
            img.setAttribute('src', 'imagens/muieveia.png')
        }

    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gen} com ${idade} anos`
    res.appendChild(img)


 }

}