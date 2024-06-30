/*
Écrire un programme qui demande le montant d’une facture et affiche le total à payer 
après avoir appliqué une remise de 10% si le montant de la facture dépasse 40.000 FS*/

/*Declaration d une variable*/
  let montantFacture = prompt("Entrez le montant de la facture :");

/*Convertir l'entrée de chaîne de caractères en nombre à virgule flottante*/
montantFacture = parseFloat(montantFacture);

/* Vérifier si la remise de 10% s'applique*/
if (montantFacture > 40000) {
    /* Calculer le montant de la remise*/
    let remise = montantFacture * 0.1;
    /* Calculer le total à payer après remise*/
    let total__a__payer = montantFacture - remise;
    /* Afficher le résultat avec une alerte*/
    alert(`Le total à payer après remise de 10% est : ${total__a__payer} fcfa`);
} else {
    /* Si le montant de la facture est inférieur ou égal à 40000 F, pas de remise appliquée*/
    alert(`Le total à payer est : ${montantFacture} fcfa`);
}