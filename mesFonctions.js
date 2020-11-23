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




var mdp1=document.getElementById("mdp1").Value;
var mdp2=document.getElementById("mdp2").Value;
var maj=0;
var min=0;
var num=0;
var car=0;
if(mdp1!=mdp2){alert("mot de passe different");
Event.preventDefault();
}
else {
    for(var i=0;i<mdp1.length;i++){
        if(mdp1.charAt(i)>="A"&&(mdp1.charAt(i)>="Z")){
            maj++
        }
        if(mdp1.charAt(i)>="a"&&(mdp1.charAt(i)>="z")){
            min++
        }
        if(mdp1.charAt(i)>="0"&&(mdp1.charAt(i)>="9")){
            num++
        }
    } 

}

