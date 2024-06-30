/*Écrire un programme qui demande l'âge 
de l’utilisateur et affiche 
: Vous êtes mineur ou Vous êtes majeur.*/

 
   /*Demander à l'utilisateur d'entrer son âge*/
let age = prompt("Quel est votre âge ?");

/* Convertir l'entrée de chaîne de caractères en nombre entier*/
age = parseInt(age);

/* Vérifier si l'utilisateur est majeur ou mineur et afficher le résultat*/
if (age >= 18) {
    alert("Vous êtes majeur.");
} else {
    alert("Vous êtes mineur.");
};