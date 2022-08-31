

//#region begin main programme 

/*TODO: Etape 1 récuperer le tableau de données
- Tableau généré quand un click sur les boutons */

const arrayImg = { img1: "/assets/img/109222.jpg", img2: "/assets/img/119044.jpg", img3: "/assets/img/120909.jpg", img4: "/assets/img/96959.jpg" }

/*Etape 2 A partir du tableau créer les cards à afficher */
const arrayTitle = { title1: 'Card 1', title2: 'Card2', title3: 'Card3', title4: 'Card4' }

const arrayText = { text1: 'lorem*3', text2: 'lorem*3', text3: 'lorem*3', text4: 'lorem*3' }


console.log("niveau -2", arrayImg.img1, arrayTitle.title1,arrayText.text1)


createCard(arrayImg.img2, arrayTitle.title2, arrayText.text1)
createCard(arrayImg.img1, arrayTitle.title2, arrayText.text1)
createCard(arrayImg.img1, arrayTitle.title2, arrayText.text1)
createCard(arrayImg.img1, arrayTitle.title2, arrayText.text1)
//#end region

