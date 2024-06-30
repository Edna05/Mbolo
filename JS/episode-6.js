/*Écrire un programme qui demande à l’utilisateur trois nombres
 et affiche la moyenne de ces nombres en alerte.*/
let nombre1 = prompt("Entrez le premier nombre ");
let nombre2 = prompt("Entrez le deuxième nombre ");
let nombre3 = prompt("Entrez le troisième nombre ");

/* Convertir les chaines caractères en nombres*/
nombre1 = parseFloat(nombre1);
nombre2 = parseFloat(nombre2);
nombre3 = parseFloat(nombre3);

/* Calculer la moyenne*/
let moyenne = (nombre1 + nombre2 + nombre3) / 3;

/* Afficher la moyenne*/
alert(moyenne );
