

var cpfz = 969221800


function descobrenmr(cpfz) {

    let soma = 0;
    let multiplicador = 10;


    for (let tamanho = 0; tamanho < 9; tamanho++) {

        soma += cpfz[tamanho] * multiplicador;
        multiplicador--;

    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 1){


        soma = 0;

    }

       return soma != cpfz [9];

   


}



 console.log(descobrenmr)