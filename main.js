function calcular(){
    var user_peso = document.getElementById('peso')
    var user_altura = document.getElementById('altura')

    var res = document.getElementById('res')

    if (user_peso.value.length == 0)
        window.alert('Coloque um valor valido')
    else{
        var imc = user_peso.value / user_altura.value**2
     
        }if(imc <=18.5){
            res.innerHTML = `Seu IMC: ${imc.toFixed(2)} Abaixo do peso`

        }else if(imc >= 18.6 && imc <= 24.9){
            res.innerHTML = `Seu IMC: ${imc.toFixed(2)} Peso Ideal`

        }else if (imc >= 25.0 && imc <= 29.9 ){
            res.innerHTML = `Seu IMC: ${imc.toFixed(2)} Levemente Acima do peso`

        }else if (imc >= 30.0 && imc <=34.9 ){
            res.innerHTML =`Seu IMC: ${imc.toFixed(2)} Obesidade Grau I`

        }else if (imc >= 35.0 && imc <=39.9){
            res.innerHTML =`Seu IMC: ${imc.toFixed(2)} Obesidade Grau II (severa)`

        }else{
            res.innerHTML=`Seu IMC: ${imc.toFixed(2)} Obesidade III(mórbida)`
        }            
        

}
