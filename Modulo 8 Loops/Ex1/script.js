let name = prompt("Informe o nome da sua nave")
let dobra = 0;
while(confirm("Deseja realizar uma dobra espacial") == true){
    setTimeout(5)
    dobra++;

}
alert("A nave " + name + " realizou ao todo " + dobra + " dobra(s) ")