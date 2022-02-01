let celsius
let fah 
choose()
function choose(){
    let co = prompt("Digite FC ou CF para converter de Fahrenheit para Celsius ou Fahrenheit para Celsius, respectivamente.")
    if(co == "FC"){
        fah = prompt("Digite uma temperatura em fahrenheit")
        alert(gradeftoc())
    }
    else if(co == "CF"){
        celsius = prompt("Digite uma temperatura em Celsius")
        alert(gradectof())
    }
    else{
        choose()
    }
}

function gradectof(){ 
    let c = celsius
     f = (c * 1.8 + 32)
     return f

}
function gradeftoc(){
    let f = fah
    c = (f -32) / 1.8
    return c 

}