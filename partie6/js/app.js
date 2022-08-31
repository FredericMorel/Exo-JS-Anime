"use strict";

/* voici un jeu de donnée a utiliser pour cette exercice */

// Voir Data.js

/* TODO:  Etape 1) créer une div dans html qui va te servire a afficher des cards que que tu va générée en js */
/*Info pour Etape 1 cette div devra étre en display:flex flexdirection:row flex-warp:no-wrap */


/* TODO: Etape 2) crée une fonction qui est capable de crée une card  */
/* la card devra avoir une entéte avec le titre de l'animée  */
/* un body avec la small_image_url de l'ainimée */
/* un footer qui contiendra la description de l'element sur 3 lignes  */
/* cette fonction devra avoir comme paramétre d'entrée title,small_image_url,desc,id */


//createCard(cardModel);

/* TODO: Etape 3) parcours le tableau de données que je t'ai fournies et génére une card pour chaque element qui se trouve a l'interieure */  

/* TODO: Etape 4) Rajoute au dessus de la div qui contient les cards des boutons qui vont permetre de trier les cards par type */

/* TODO: Etape 5) fait en sorte que quand on click sur ces boutons on affiche que les cards du même type que ce boutton  */

//#region main
data.data.forEach(element=>{
    if(element.trailer.url===null){
      const cardsContainer=document.querySelector(".cards-container");
      const img=element.images.jpg.image_url;
      const title=element.title;
      let synopsys=element.synopsis;
      const preview= sliceString(synopsys,50);
      synopsys=preview;
      const card=createCard({img,title,synopsys,cardsContainer})
      cardsContainer.appendChild(card);
    }else{
      const cardsContainer=document.querySelector(".cards-container");
      const video=element.trailer.url;
      const title=element.title;
      let synopsys=element.synopsis;
      const preview= sliceString(synopsys,50);
      synopsys=preview;
      const card = createVideoCard({video,title,synopsys,cardsContainer});
      cardsContainer.appendChild(card);
  }
    
});
//#end region main

//createCard(cardModel);

/* TODO: Etape 3) parcours le tableau de données que je t'ai fournie et genére une card pour chaque element qui se trouve a l'interieure */  
/* const dataAnime = data.data;
dataAnime.forEach((element) => {
    
  if(element.trailer.url===null){
    const img=element.images.jpg.image_url;
    const title=element.title;
    let synoppsys= element.synopsis;
    createImgCard({img,title,desc})
  }else{
   const video=element.trailer.url;
   const title=element.title;
   const desc=element.synopsis;
    createVideoCard({video,title,desc});
  }}); */