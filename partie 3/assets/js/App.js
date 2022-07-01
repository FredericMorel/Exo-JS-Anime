/* voici un jeu de donnée a utiliser pour cette exercice */

// Voir Data.js

/* TODO:  Etape 1) créer une div dans html qui va te servire a afficher des cards que que tu va générée en js */
/*Info pour Etape 1 cette div devra étre en display:flex flexdirection:row flex-warp:no-wrap */
const mainApp = document.querySelector("#app");
console.log(mainApp);
const listCard = document.createElement("div");
listCard.classList.add("flex-row", "list-card");
mainApp.appendChild(listCard);

/* TODO: Etape 2) crée une fonction qui est capable de crée une card  */
/* la card devra avoir une entéte avec le titre de l'animée  */
/* un body avec la small_image_url de l'ainimée */
/* un footer qui contiendra la description de l'anime sur 3 lignes  */
/* cette fonction devra avoir comme paramétre d'entrée title,small_image_url,desc,id */
const cardModel = { title: String, img: String, desc: String, id: Number };
function createCard({ title, img, desc, id }) {
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
  descriptionCard.classList.add("descr-card");
  descriptionCard.innerText = desc;
  card.appendChild(descriptionCard);
  listCard.appendChild(card);
}
//createCard(cardModel);

/* TODO: Etape 3) parcours le tableau de données que je t'ai fournie et genére une card pour chaque anime qui se trouve a l'interieure */
const dataAnime = data.data;
console.log("image1 : ", dataAnime.image_url);
dataAnime.forEach((anime) => {
  cardModel.title = anime.title;
  cardModel.img = anime.images.jpg.small_image_url;
  cardModel.desc = anime.synopsis;
  cardModel.id = anime.mal_id;
  console.log(anime.title);
  createCard(cardModel);
});

/* TODO: Etape 4) Rajoute ho dessus de la div qui contient les cards des boutons qui vont permetre de trier les card par type */

/* TODO: Etape 5) fait en sorte que quand on click sur ces boutons on affiche que les cards du méme type que ce boutton  */
