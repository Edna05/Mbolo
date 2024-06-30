/*Écrire un programme qui demande un nombre à l’utilisateur et
 affiche la table de multiplication de ce nombre   jusqu’à 10.*/

 /* Demander à l'utilisateur d'entrer un nombre*/
let nombre = prompt("Entrez un nombre pour afficher sa table de multiplication jusqu'à 10 :");

/* Convertir l'entrée de chaîne de caractères en nombre entier*/
nombre = parseInt(nombre);

/* Vérifier si l'entrée est un nombre valide*/
if (isNaN(nombre)) {
    alert("Veuillez entrer un nombre valide.");
} else {
    /* Afficher la table de multiplication*/
    alert(`Table de multiplication de ${nombre} :`);
    for (let i = 1; i <= 10; i++) {
        let resultat = nombre * i;
        alert(`${nombre} x ${i} = ${resultat}`);
    }
}