let name = prompt("Qual o seu nome?")
let velocidadecon = 0

let velocidadeesp = prompt("Qual velocidade você quer acelerar a nave?")
if(confirm("Você quer acelerar a " + velocidadeesp + "km/h?") === true){
    velocidadecon = velocidadeesp
}
if(velocidadecon == 0){
    alert("Você está parado, considere aumentar a velocidade")
}
else if(velocidadecon < 40){
    alert("Você está devagar demais, podemos aumentar um pouco ")
}
else if(velocidadecon < 80){
    alert("Parece uma boa velocidade para manter")
}
else if(velocidadecon < 100){
    alert("Velocidade alta, considere diminuir")
}
else{
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Olá " + name + "\nVocê está a " + velocidadecon + "km/h")