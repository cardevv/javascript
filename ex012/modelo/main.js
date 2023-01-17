const valores = []
    let num = document.querySelector('#txtn')
    let lista = document.querySelector('#lista')
    let res = document.querySelector('#res')



function adicionar () {


    


    if (num.value >= 0 && num.value <=100 ) {

        let n = Number(num.value)

         



            let item = document.createElement('option')
            valores.push(n)
            

            item.text = `Valor ${n} Adicionado`
            
            lista.appendChild(item)

            
            

     

    } 
    
   
    
    
    else {

        window.alert('O número precisa ser entre 1 e 100!')
    }
} 






function finalizar () { 


    

    res.innerHTML =(`Ao todo, temos ${valores.length} numeros cadastrados`)
     
    res.innerHTML =(`O maior valor informado foi ${num.indexOf(valores.length)} `)

   // res.innerHTML =(`O menor valor informado foi ${num.indexOf(0)}`)

    //res.innerHTML (`Somando todos os valor, temos ${}`)
    

}