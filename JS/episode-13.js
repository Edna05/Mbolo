/*Écrire un programme qui demande sans cesse à l'utilisateur
 de renseigner la bonne réponse d’une opération*/

  /*Declaration d une variable
  pour stocker les nombres  */
  const nombre1 = prompt("entrer le premier nombre");
const nombre2 = 1;
const operation = `${nombre1} + ${nombre2}`;

/* Boucle tant que la réponse n'est pas correcte*/

  /* Demander à l'utilisateur de résoudre l'opération*/

while (true) {
    let reponse = prompt(`Combien font ${operation} ?`);

    /* Vérifier si la réponse est correcte*/
    if (reponse == nombre1 + nombre2) {
        alert("Bravo ! Vous avez donné la bonne réponse.");
        break; /*Sortir de la boucle si la réponse est correcte*/
    } else {
        alert("Désolé, ce n'est pas la bonne réponse. Essayez encore.");
    }
}