let euro = parseFloat(prompt("Entrez une valeur en euro"));

while(isNaN(euro) || euro < 0){
    alert("Veuillez rentrer un nombre positif !")
    euro = parseFloat(prompt("Entrez une valeur en euro"))
}

const dollars = euro * 1.1;
alert("Votre conversion de " + euro.toFixed(1) + "€ correspond à " + dollars.toFixed(1) + "$");

