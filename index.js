var nombre = window.prompt("Saisir un montant en euros")

console.log(nombre)

if(nombre<0){
    window.alert("Votre saisie est un nombre négatif");
}
else if (isNaN(nombre) == true){
    window.alert("Votre saisie n'est pas un nombre");
}
else {
    window.alert(Math.round(nombre * 1.1 * 100) / 100 + " dollars");
}

// Antho veut juste le résultat, pas besoin que le code se répète pour le moment avec la boucle for

// Préférer faire les arrondis au niveau de l'affichage et non dans les variables pour garder les valeurs les plus vraies possibles//