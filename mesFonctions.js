function visiteur() {
    alert("bienvenue sur mon site");
    
     numero = Math.floor(Math.random()*1000);
    var texte = "tu es le visiteur n°";
    alert (texte + " " + numero );
}	
    var p_footer= document.getElementById("p_footer");
   p_footer.addEventListener('dblclick', visiteur);
  
  
  
  
  
  
  
   document.getElementById("titre_header").addEventListener("mouseover", ChangerTitre);
 function ChangerTitre()
    {
    var txt = document.getElementById("titre_header").innerHTML;
    if(txt=="mes dev! Web en SNIR")
    {
        document.getElementById("titre_header").innerHTML="Par Lucas Mathis";
        setTimeout(ChangerTitre,1000);
    }    
    else
    {
        document.getElementById("titre_header").innerHTML="mes dev! Web en SNIR";
    }
 }




function ChangerCouleurBleu ()
{  
    console.log("Changement de couleur");
    document.getElementById("titre_header").style.backgroundColor = "#2874a6";
    document.getElementById("nav").style.backgroundColor = "#2874a6";
    document.getElementById("p_footer").style.backgroundColor = "#2874a6";
    document.getElementById("aside").style.backgroundColor = "#2874a6";
}


document.getElementById("theme_bleu").addEventListener('click', ChangerCouleurBleu);

function ChangerCouleurOrange ()
{  
    console.log("Changement de couleur");
    document.getElementById("titre_header").style.backgroundColor = "#cc5500";
    document.getElementById("nav").style.backgroundColor = "#cc5500";
    document.getElementById("p_footer").style.backgroundColor = "#cc5500";
    document.getElementById("aside").style.backgroundColor = "#cc5500";
}   
    
    
document.getElementById("theme_orange").addEventListener('click', ChangerCouleurOrange);

function ChangerCouleurGris ()
{  
    console.log("Changement de couleur");
    document.getElementById("titre_header").style.backgroundColor = "#beaeae";
    document.getElementById("nav").style.backgroundColor = "#beaeae";
    document.getElementById("p_footer").style.backgroundColor = "#beaeae";
    document.getElementById("aside").style.backgroundColor = "#beaeae";
}   
    
    
document.getElementById("theme_gris").addEventListener('click', ChangerCouleurGris);

function ChangerSection ()
{  
    if(this.id=="nav_mon_cv")
    {
        document.getElementById("mon_cv").style.display = "block";     
        document.getElementById("Inscription").style.display = "none";
        document.getElementById("Connexion").style.display = "none";
    }

    else if(this.id=="nav_inscription")
    {
        document.getElementById("mon_cv").style.display = "none";
        document.getElementById("Inscription").style.display = "block";
        document.getElementById("Connexion").style.display = "none";
    }
    else if(this.id=="nav_connexion")
    {
        document.getElementById("mon_cv").style.display = "none";
        document.getElementById("Inscription").style.display = "none";
        document.getElementById("Connexion").style.display = "block";


    }
}


document.getElementById("nav_inscription").addEventListener ('click', ChangerSection)
document.getElementById("nav_mon_cv").addEventListener ('click', ChangerSection)
document.getElementById("nav_connexion").addEventListener ('click', ChangerSection)

var mdp1=document.getElementById("mdp1").value;
var mdp2=document.getElementById("mdp2").value;
var maj=0; var min=0; var num=0;



function VerifierFormulaireInscription (event)
 {
   if ("mdp1" != "mdp2")
     {
        alert("Les mots de passe sont différents");
        event.preventDefault();
      }
  }

 function VerifierMotDePasse() {
     if (document.getElementById("mdp1").value.length > 7)
     {
         document.getElementById("mdp_longueur").classList.remove("rouge");
         document.getElementById("mdp_longueur").classList.add("vert");
     }
     else
      {
         document.getElementById("mdp_longueur").classList.add("rouge");
         document.getElementById("mdp_longueur").classList.remove("vert");
     }

    var nbMajuscules = 0;
   var nbMinuscules = 0;
   var nbChiffres = 0;
   var nbSpecial = 0;
   for(var tour = 0; tour < document.getElementById("mdp1").value.length; tour++) {
       var charTour = document.getElementById("mdp1").value.charAt(tour);
       if(MajusculeBool(charTour)) {
           nbMajuscules = nbMajuscules + 1;
       }
       else if(MinusculeBool(charTour)) {
           nbMinuscules = nbMinuscules + 1;
       }
       else if(SpecialBool(charTour)) {
           nbSpecial = nbSpecial + 1;
       }
       else if(ChiffreBool(charTour)) {
           nbChiffres = nbChiffres + 1;
       }
   }
   if(nbMajuscules > 0) {
       document.getElementById("mdp_majuscule").classList.remove("rouge");
       document.getElementById("mdp_majuscule").classList.add("vert");
   }
   else {
       document.getElementById("mdp_majuscule").classList.add("rouge");
       document.getElementById("mdp_majuscule").classList.remove("vert");
   }
   if(nbMinuscules > 0) {
       document.getElementById("mdp_minuscule").classList.remove("rouge");
       document.getElementById("mdp_minuscule").classList.add("vert");
   }
   else {
       document.getElementById("mdp_minuscule").classList.add("rouge");
       document.getElementById("mdp_minuscule").classList.remove("vert");
   }
   if(nbChiffres > 0) {
       document.getElementById("mdp_chiffre").classList.remove("rouge");
       document.getElementById("mdp_chiffre").classList.add("vert");
   }
   else {
       document.getElementById("mdp_chiffre").classList.add("rouge");
       document.getElementById("mdp_chiffre").classList.remove("vert");
   }
   if(nbSpecial > 0) {
       document.getElementById("mdp_special").classList.remove("rouge");
       document.getElementById("mdp_special").classList.add("vert");
   }
   else {
       document.getElementById("mdp_special").classList.add("rouge");
       document.getElementById("mdp_special").classList.remove("vert");
   }

   if(document.getElementById("mdp1").value.length > 7 && nbMajuscules > 0 && nbMinuscules > 0 && nbChiffres > 0 && nbSpecial > 0) {
       return true;
   }
   else {
       return false;
   }
 }

function MajusculeBool(caractère) {
    var listedescaractères = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for(var tour = 0; tour < listedescaractères.length; tour++) {
        if(listedescaractères[tour] == caractère) {
            return true;
        }
    }
    return false;
}

function MinusculeBool(caractère) {
    var listedescaractères = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for(var tour = 0; tour < listedescaractères.length; tour++) {
        if(listedescaractères[tour].toLowerCase() == caractère) {
            return true;
        }
    }
    return false;
}

function SpecialBool(caractère) {
    var listedescaractères = [" ", "`", "!", "@", "#", "$", "%", "*", "(", ")", "_", "+", "\\", "-", "=", "[", "]", "{", "}", ";", "'", ":", "\"", "|", ",", ".", "<", ">", "/", "?", "~"];
    for(var tour = 0; tour < listedescaractères.length; tour++) {
        if(listedescaractères[tour] == caractère) {
            return true;
        }
    }
    return false;
}

function ChiffreBool(caractère) {
    var listedescaractères = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(var tour = 0; tour < listedescaractères.length; tour++) {
        if(listedescaractères[tour] == caractère) {
            return true;
        }
    }
    return false;
}
document.getElementsByTagName("form")[0].addEventListener("M'inscrire", VerifierFormulaireInscription);
document.getElementById("mdp1").addEventListener("input", VerifierMotDePasse);
document.getElementById("mdp2").addEventListener("input", VerifierMotDePasse);
document.getElementById("submit_inscription").addEventListener("click",VerifierFormulaireInscription);
document.getElementById("mdp1").addEventListener("click",VerifierFormulaireInscription);
document.getElementById("mdp2").addEventListener("click",VerifierFormulaireInscription);