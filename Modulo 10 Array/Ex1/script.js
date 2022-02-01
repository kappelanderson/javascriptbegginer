/*Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.*/

let arr = []
while(arr.length < 2){
    arr.push(prompt("Digite um número"))
}

if(arr[0] > arr[1]){
    let shift = arr.shift()
    arr.push(shift)
}
alert(arr)
