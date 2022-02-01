alert("Bem vindo! A seguir pediremos que informe alguns dados.")
let name = prompt("Informe o seu nome")
let age = prompt("Informe sua idade")
let confirma = confirm(`Sua idade é ${age}?`)
alert("Seu nome é " + name)
alert("Sua idade é " + age)

if(confirma = true){
    alert("Você confirmou sua idade " + age + " anos")
}
else{
    alert("Você não confirmou sua idade")
}