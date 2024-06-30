/*Écrire un programme qui demande a l utilisateur
 deux nombres et affiche leur somme en alerte.
*/

  /* demander deux nombres*/
  let nombre1= prompt("veillez inserer un nombre")
  let nombre2= prompt("veillez inserer un nombre")

  /* convertir le texte en nombre*/
  nombre1=parseFloat(nombre1)
  nombre2=parseFloat(nombre2)

  /*calculer la somme des deux nombres */
  let resultat= nombre1+nombre2
 
  /*afficher a l utilisateur les nombres*/
  alert ( resultat); 