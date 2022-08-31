/* voici un jeu de donnée a utiliser pour cette exercice */

// Voir Data.js

/* TODO:  Etape 1) créer une div dans html qui va te servire a afficher des cards que que tu va générée en js */
/*Info pour Etape 1 cette div devra étre en display:flex flexdirection:row flex-warp:no-wrap */
const mainApp = document.querySelector("#app");

const listCards = document.createElement("div");
listCards.classList.add("flex-row", "list-cards");
listCards.id="list-cards";
listCards.style.width="100vw";
listCards.style.overflow="hidden";
listCards.style.position="relative";



/* TODO: Etape 2) crée une fonction qui est capable de crée une card  */
/* la card devra avoir une entéte avec le titre de l'animée  */
/* un body avec la small_image_url de l'ainimée */
/* un footer qui contiendra la description de l'anime sur 3 lignes  */
/* cette fonction devra avoir comme paramétre d'entrée title,small_image_url,desc,id */

const cardModel = { title: String, img: String, video:String, desc: String, id: Number };

// Function Create Cards

function createImgCard({ title, img, desc}) {
  const card = document.createElement("div");
  card.classList.add("card");
  const imgCard = document.createElement("img");
  imgCard.classList.add("card-img");
  imgCard.src = img;
  card.appendChild(imgCard);
  const titleCard = document.createElement("p");
  titleCard.classList.add("title-card");
  titleCard.innerText = title;
  card.appendChild(titleCard);
  const descriptionCard = document.createElement("p");
  descriptionCard.classList.add("card-text");
  descriptionCard.innerText = desc;
  card.appendChild(descriptionCard);
  listCards.appendChild(card);
}


function createVideoCard({video,title,desc}) {
  const card = document.createElement("div");
  card.classList.add("card");
  const imgCard = document.createElement("div");
  imgCard.classList.add("card-video");
  imgCard.innerHTML=`<iframe width="250" height="315" src="https://www.youtube.com/embed/4A_X-Dvl0ws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  card.appendChild(imgCard);
  const titleCard = document.createElement("p");
  titleCard.classList.add("title-card");
  titleCard.innerText = title;
  card.appendChild(titleCard);
  const descriptionCard = document.createElement("p");
  descriptionCard.classList.add("card-text");
  descriptionCard.innerText = desc;
  card.appendChild(descriptionCard);
  listCards.appendChild(card);
}

//createCard(cardModel);

/* TODO: Etape 3) parcours le tableau de données que je t'ai fournie et genére une card pour chaque anime qui se trouve a l'interieure */  
const dataAnime = data.data;
dataAnime.forEach((anime) => {
  if(anime.trailer.url===null){
    const img=anime.images.jpg.image_url;
    const title=anime.title;
    const desc= anime.synopsis;
    createImgCard({img,title,desc})
  }else{
   const video=anime.trailer.url;
   const title=anime.title;
   const desc=anime.synopsis;
    createVideoCard({video,title,desc});
  }});

  
createBaseArrowLeft();
createBaseArrowRight()
/* TODO: Etape 4) Rajoute ho dessus de la div qui contient les cards des boutons qui vont permetre de trier les card par type */

/* TODO: Etape 5) fait en sorte que quand on click sur ces boutons on affiche que les cards du méme type que ce boutton  */

function createBaseArrowLeft(){
  let baseArrowLeft= document.createElement("div");
  baseArrowLeft.classList.add("base-arrow-left");
  baseArrowLeft.style.width="100px";
  baseArrowLeft.style.height="40%";
  baseArrowLeft.style.backgroundColor="#00000057";
  baseArrowLeft.style.position="absolute";
  baseArrowLeft.style.top="calc(100%/3.3)";
  baseArrowLeft.style.left="30px";
  baseArrowLeft.style.borderRadius="10px";
  baseArrowLeft.style.display="flex";
  baseArrowLeft.style.flexDirection="column";
  baseArrowLeft.style.justifyContent="center";
  const arrowLeft=document.createElement("img");
  arrowLeft.src="../partie3/assets/img/angle-left-solid.svg";
  arrowLeft.setAttribute("src","/PARTIE3/assets/img/angle-left-solid.svg")
  arrowLeft.classList.add("arrow");
  
  baseArrowLeft.appendChild(arrowLeft);
  listCards.appendChild(baseArrowLeft);


}

function createBaseArrowRight(){
  let baseArrowRight= document.createElement("div");
  baseArrowRight.classList.add("base-arrow-right");
  const arrowRigth=document.createElement("img");
  arrowRigth.src="/partie3/assets/img/angle-right-solid.svg";
  arrowRigth.classList.add("arrow");
  baseArrowRight.appendChild(arrowRigth);
  
  listCards.appendChild(baseArrowRight);
  console.log(baseArrowRight);
}

mainApp.appendChild(listCards);
