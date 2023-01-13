function contar () {
var tn1 = document.querySelector('#txtinicio')
var tn2 = document.querySelector('#txtfim')
var tn3 = document.querySelector('#txtpasso')
var res = document.querySelector('#res')

var n1 = Number(tn1.value)
 var n2 = Number(tn2.value)
 var n3 = Number (tn3.value)

if (tn1.value.length == 0 || tn2.value.length == 0 || tn3.value.length == 0) {
    window.alert('[ERRO] Falta dados!')
    
} else {

    if (n3 <= 0) {

        window.alert('Passo invalido! considerando PASSO 1')

        n3 = 1;

    }



    if(  n1 < n2) {
        for (var c = n1;c <= n2; c += n3 ) {

            res.innerHTML += ` ${c} \u{1F449}`
    
            console.log(c)
        
         }
         res.innerHTML += `\u{1F3C1}`
    } else {

        for ( var c = n1; c >= n2; c -= n3 ) {

            res.innerHTML += `${c}\u{1F449}`

        }

        res.innerHTML += `\u{1F3C1}`
    }
    

}


 




}   

