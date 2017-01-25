   var liste1 = [[1,"MULOT Cyrille",3],[2,"AMIOT Antoine",2],[3,"BRUNET Xavier",36],[4,"FONTENAY Karine",1],[5,"PRIVAT Nicolas",61],[6,"KAMINSKI Stephan",98],[7,"GARDENT Thierry",51],[8,"HENNENFENT Roland",17],[9,"BENOIT Philippe",39],[10,"LANGEVIN Samuel",58],[11,"REVILLER Thierry",86],[12,"SAVART Jerome",65],[13,"MOULIN Franck",68],[14,"ALENDOURO Victor",66],[15,"PECOT Stève",95],[16,"VASTESAEGER Sven",75],[17,"GARNIER Dominique",23],[18,"FLOURET Michel",46],[19,"MINARD Anne laure",76],[20,"PASQUET Frederic",79],[21,"DEVILLERT Christophe",28],[22,"LAPIERRE Michael",85],[23,"ROUX Thierry",82],[24,"ROULET David",59],[25,"DORDAIN Tony",93],[26,"MENDER Miloud",96],[27,"FONTAINE Julien",29],[28,"FOUQUET Arnaud",48],[29,"GICQUEL Fabrice",97],[30,"ARAR Didier",84],[31,"BRAJON Bertrand",57],[32,"SCIACCA Aurélia",50],[33,"LOPES LELO Maria",5],[34,"FORESTIER David",33],[35,"HUET Jérôme",53],[36,"MARSURA Philippe",42],[37,"LINVAL Philippe",69],[38,"HERNOT Laurent",89],[39,"LAKAS Patrice",67],[40,"MARCHAND Eric",40],[41,"BOURNAT Thierry",38],[42,"CAMBONI Mario",25],[43,"BARICHARD Jérôme",47],[44,"SANSELME Philippe",87],[45,"ANDRE Serge",71],[46,"CARTON Noël",24],[47,"PETITJEAN Rémy",64],[48,"TEISSEDRE Christian",37],[49,"AMY Jérôme",99],[50,"MOYNAULT Christophe",35],[51,"VéNIANT Romu",92],[52,"LEBIGUE Tristan",88],[53,"JUGE Fabrice",26],[54,"VINCENT Jérémy",90],[55,"IVART Yann",30],[56,"DESJOUR Patrick",70],[57,"GALLON Fabrice",77],[58,"GUYOT Jean-joseph",27],[59,"CHATARD Benoit",80],[60,"ROUX Claude",9],[61,"KOWALSKI Dany",63],[62,"PERRETTE Christophe",34],[63,"DUBOURDIEU Stephane",81],[64,"LAMBERT Guillaume",54],[65,"FAMBRINI Cyril",52],[66,"MOUNIER Christian",72],[67,"BROSSARD Remy",13],[68,"FOUQUET Arnaud",94],[69,"ARNAUD Christian",44]];
    var liste2 = [[70,"MOSNIER Bernard",55],[71,"BERGERET Lise",8],[72,"BERGERET Christophe",7],[73,"LEFEBVRE Michel",91],[74,"FLEURY Stephanie",15],[75,"AUBARD Nicolas",74],[76,"VALLEE Nelly",45],[77,"BERNABEU Julien",73],[78,"DUPRé Alain",78],[79,"SALIGNAT Jean-claude",4],[80,"VOLAT Marc",21],[81,"BENIGAUD Sylviane",18],[82,"LEPAIN Laurent",22]];
    var listecomp = liste1.concat(liste2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////                                                                                                                                     ///////
///////                                            FONCTION QUI AFFICHE LE TABLEAU                              ///////
///////                                                                                                                                    ///////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function afficherUnTableau(monTableau){                    //Déclaration de la fonction
    document.getElementById('classmt').innerHTML="";  //Clear du tableau précédent
   for (var i = 0; i < monTableau.length; i++) {               //Boucle qui parcours le tableau
        var lignetab = "<tr>";                                              //Donne comme valeur la balise <tr>

    for (var x = 0 ;x < monTableau[i].length ; x++) {       //Boucle qui parcours l'élément i du tableau
      lignetab+="<td>";                                                     //Ajoute la balise <td> à lignetab
      lignetab+=monTableau[i][x];                                     //Ajoute l'élément x de l'élément i à ligne tab
      lignetab+="</td>";                                                    //Ajoute la balise fermante </td> à lignetab
      
    }
    lignetab+="</tr>";                                                      //Ajoute la balise fermante </tr> à lignetab
    
    document.getElementById('classmt').innerHTML+=lignetab;
    //Ecrit lignetab dans le fichier HTML
    }
  }  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////                                                                                                                                     ///////
///////                                            FONCTION QUI CHERCHE UN ELEMENT                           ///////
///////                                                                                                                                    ///////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function search(){                                                //Déclaration de la fonction
    var resultat = new Array;                                  //Création d'un nouveau tableau
    var recherche = document.formu.rech.value;  //Récupère la saisie utlisateur et la nomme recherche
    var type = document.formu.choixType.value;  //Récupère le type choisi par l'utilisateur
    var tableau = listecomp;                                   //Tableau deviens la concaténation des deux listes

    switch(type){                                                     //Déclaration du switch
      case 'nom' :                                                     //Dans le cas où type = 'nom'
      recherche = recherche.toUpperCase()+" ";    //recherche devient recherche en majuscules
      type=1;                                                           //Type prend la valeur 1
      break;                                                              //On arrête le switch

      case 'prenom':                                                //Dans le cas où type = 'prenom'
      recherche = " "+recherche.charAt(0).toUpperCase()+recherche.substring(1).toLowerCase();
      //Recherche devient recherche avec un espace, la première lettre en majuscule et le reste en minusucule
      type=1;                                                         //Type prend la valeur 1
      break;                                                            //On arrête le switch

      case 'dossard' :                                             //Dans le cas où type = 'dossard'
      recherche=parseInt(recherche);                  //Recherche prend la valeur entière de recherche
      type=2;                                                        //Type prend la valeur 2
      break;                                                          //On arrête le switch

      case 'classement' :                                      //Dans le cas où type = 'classement'
      recherche=parseInt(recherche);                 //Recherche prend la valeur entière de recherche
      type=0;                                                       //Type prend la valeur 0
      break;                                                          //On arrête le switch

      default:                                                        //Si aucun des cas n'est rencontré
      type='';                                                        //Type prend la valeur ''
    }

    for(i=0;i <= tableau.length-1; i++){            //Boucle qui parcours le tableau
      switch(recherche){                                      //Déclaration du switch
        case tableau[i][type] :                               //Cas où la recherche abouti
        resultat.push(tableau[i]);                          //On push tableau[i] dans le tableau résultat
        break;                                                       //On arrête le switch
      }
      if(recherche!=parseInt(recherche) && tableau[i][type].indexOf(recherche)!=-1){
        //Si recherche n'est pas un entier et que recherche se trouve dans une case du tableau
        resultat.push(tableau[i]);                        //Alors on push la case dans le tableau résultat
        }
      
    }
      if(!resultat[0]){                                        //Si résultat n'existe pas
          resultat[0]= 'pas trouvé';                    //Alors on informe l'utilisateur
      }
      afficherUnTableau(resultat);                   //On affiche le tableau résultat dans le HTML
  };

   function tri(type){

   var tableau = new Array;
    tableau = tableau.concat(listecomp);
    var resultat = new Array;
    var minimum;
    var indice;
    var ligneMinimum;

  if(type==0||type==2){}
    while(tableau.length!=0){
        minimum=tableau[0][type];
        for (var i=0; i<tableau.length;i++){
            if(tableau[i][type] <= minimum){
                minimum= tableau[i][type];
                ligneMinimum= tableau[i];
                indice = i;
            }
        }
        resultat.push(ligneMinimum);
        tableau.splice(indice,1);
    }
    afficherUnTableau(resultat);
};
function tri_prenom(){

    var tableau = new Array;
    tableau = tableau.concat(listecomp);
    var resultat = new Array;
    var type = 1;
    var minimum;
    var indice;
    var ligneMinimum;
    var indice_prenom;


      while(tableau.length != 0){
        minimum = tableau[0][type].split(' ');
        for(var i =0; i<tableau.length; i++){
          prenom = tableau[i][type].split(' ');
          for(var k=0;k<prenom.length; k++){
            if(prenom[k][1]== prenom[k][1].toLowerCase()){
              indice_prenom = k;
            }
          }
          if(prenom[indice_prenom]<= minimum[1]){
            minimum[1] = prenom[indice_prenom];
            ligneMinimum = tableau[i];
            indice = i;
          }
        }
        resultat.push(ligneMinimum);
        tableau.splice(indice,1);
      }
    afficherUnTableau(resultat);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////                                                                                                                                     ///////
///////                                            EN DEHORS DES FONCTIONS                                          ///////
///////                                                                                                                                    ///////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  afficherUnTableau(listecomp);               //On affiche le tableau initiale
