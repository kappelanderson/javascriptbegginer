let velinchange = 0
let spaceship = {
    "name": "",
    "type": "",
    "maxVelocity": 170,
    "Velocity": 0
}

function register(){
    spaceship["name"] = prompt("Digite o nome da nave")
    spaceship["type"] = prompt("Digite o tipo da nave")
    spaceship["maxVelocity"] = prompt("Digite a velocidade máxima da nave")

}
function velo() {
    velinchange = 0
    if(confirm("Você quer acelerar mais?") == true){
        velinchange = prompt("Você quer adicionar quantos a velocidade?")
        spaceship.Velocity = (parseInt(spaceship.Velocity) + parseInt(velinchange))
        alert(spaceship.Velocity)
    }
    else{
        alert("O programa terminou")
    }
}
function checarvelocity(){
    if(parseInt(spaceship.Velocity) > parseInt(spaceship.maxVelocity)){
        alert("Você ultrapassou o limite e por isso retornará a " + spaceship.maxVelocity)
    }
    else{
        velo()
    }
}


register()
velo()
checarvelocity()