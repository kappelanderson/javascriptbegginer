alert("Vamos descobrir quanto tempo você duraria na estrada com a quantidade de dinheiro que você tem na carteira")
let money = Number(prompt("Quantos reais você tem no bolso"))
let gas = 7.2
let autonomy = 12.5

alert(`Considerando o preço da gasolina ${gas}R$/L, a autonomia do seu carro ${autonomy}KM/L, com ${money} você conseguirá andar por ${money / gas * autonomy}KM`)