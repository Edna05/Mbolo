/*Écrire un programme qui demande la moyenne d’un élève et affiche
 sa mention (Passable, Assez-Bien, Bien, Très bien, Excellent)*/

  /*Declaration d une variable
  pour stocker MBOLO JS */
  let moyenne = prompt("Entrez la moyenne de l'élève (entre 0 et 20) ");

/*Convertir les chaînes de caractères en nombre à virgule*/
moyenne = parseFloat(moyenne);

/* Vérification la moyenne et affichage la mention correspondante*/
if 
(moyenne >= 0 && moyenne <3 ) {
    alert("Mention : null");
  } else if (moyenne >= 4&& moyenne < 7) {
      alert("Mention : faible");
  } else if (moyenne >= 8 && moyenne < 9) {
      alert("Mention :faible");
  }else if(moyenne >= 10 && moyenne < 11) {
  alert("Mention : Passable");
} else if (moyenne >= 12 && moyenne < 14) {
    alert("Mention : Assez-Bien");
} else if (moyenne >= 14 && moyenne < 15) {
    alert("Mention : Bien");
} else if (moyenne >= 16 && moyenne < 19) {
    alert("Mention : Très bien");
} else if (moyenne >= 19 && moyenne <= 20) {
    alert("Mention : Excellent");
} else
 {
    alert("La moyenne invalide. veillez entrer une moyenne comprise entre 0 et 20.");
 }