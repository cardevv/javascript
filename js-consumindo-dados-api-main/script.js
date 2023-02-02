 async function buscaEndereco(cep) {
    var campoErro = document.getElementById('erro')
    campoErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {

            throw Error ('CEP não existe!');


        }
        var cidade = document.querySelector('#cidade')
        var logradouro = document.querySelector('#endereco')
        var estado = document.querySelector('#estado')
        
        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        
        console.log(consultaCEPConvertida)
        return consultaCEPConvertida;
    } catch(erro) {
        if (cep.length < 8 ) {

            campoErro.innerHTML = `<p> Faltam digitos!</p>`

        } else if (cep.length > 8) {
            campoErro.innerHTML = `<p>Digitos a mais!</p>`
            
        } else {
            campoErro.innerHTML = `<p> CEP invalido, Tente novamente!</p>`
        }
        
        console.log(erro)
    }

}

var cep = document.querySelector('#cep');
cep.addEventListener("focusout", () => { buscaEndereco(cep.value)});





//let ceps = ['01001000','01001001'];
//let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
//Promise.all(conjuntoCeps).then(respostas => console.log(respostas))




/* async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
    } catch (erro) {
        console.log(erro);
    }
}

 

let ceps = ['01001000', '01001001'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
console.log(conjuntoCeps);
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

*/