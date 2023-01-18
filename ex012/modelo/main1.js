
    let num = document.querySelector('#txtn')
    let lista = document.querySelector('#lista')
    let res = document.querySelector('#res')
    const valores = []

    function isNumero(n) {

        if (Number(n) >= 1 && Number(n) <= 100) {
            return true

        } else {

            return false
        }
    }


    function inLista (n , l ) {
         if (l.indexOf(Number(n)) != -1) {
        return true  

         } else {

            return false
         }

    }





    function adicionar () {

        if (isNumero(num.value) && ! inLista(num.value,valores)) {
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            lista.appendChild(item)
            res.innerHTML = ''

    } else {

        window.alert('valor invalido ou ja inserido.')
    }               
            num.value = ''
            num.focus()
              }


              function finalizar () {

                if (valores.length == 0) {
                    window.alert('Adicione valores antes de finalizar!')

                } else {
                    let total = valores.length
                    let maior = valores[0]
                    let menor = valores [0]
                    let soma = 0
                    let media = 0

                    
                    


                    for (let pos in valores ) {

                        if (valores[pos] > maior)
                        

                            maior = valores[pos]

                             if  (valores[pos] < menor) 

                                menor = valores[pos]

                            
                                soma += valores[pos]

                        }
                        media = soma/ total

                        res.innerHTML = ''
                    res.innerHTML += `<p>Ao todo, temos ${total} </p>`
                    res.innerHTML += `<p> Maior valor informado foi ${maior}. </p>`
                    res.innerHTML += `<p> Menor valor informado foi ${menor}.  </p>`
                    res.innerHTML += `<p>Somando todos os valores temos ${soma} </p>`
                    res.innerHTML += `<p>A média é ${media}  </p>`


                    }


                    

                }
                
               



              