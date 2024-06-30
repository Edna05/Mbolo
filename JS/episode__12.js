/*Écrire un programme qui fait la somme des 10 premiers nombres entiers
 à partir de 1. Le résultat est affiché en console.*/

  /*Declaration d une variable
  pour stocker les nombres */
  let somme = 0;

/* Faire la somme des 10 premiers nombres entiers à partir de 1*/
for (let i = 1; i <= 10; i++) {
    somme += i;
}

/* Afficher le résultat dans la console*/
console.log("La somme des 10 premiers nombres entiers à partir de 1 est :", somme);