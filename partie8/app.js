

//#region begin main programme 

/*TODO: Etape 1 récuperer le tableau de données
- Tableau généré quand un click sur les boutons */



/*Etape 2 A partir du tableau créer les cards à afficher */

//#end region

/* console.log('final countDown', getTypeAnimeSet(animeArray));
console.log('final CountDown', getGenreAnime(animeArray))

console.log('Anime Array', animeArray[0]['title']); */


/* animeArray.forEach(element => {

    console.log(element.type)

    
}); */
/* animeArray.forEach(element => {
    const eType=element.type
    const btn=document.getElementById(eType)
    console.log('query selector :::',btn);
    btn.addEventListener('click', () => {
        if(btn.classList.contains('btn-type')) {
            
            btn.classList.replace('btn-type', 'btn-type-clicked')
            console.log('Type => Clicked', btn);

        } else {
            btn.classList.replace('btn-type-clicked', 'btn-type')
            console.log('if =>', btn);


        }
    })
}); */

function changeClassBtn(classBtn,animeArray){
    const clsBtn=document.getElementById(classBtn)
    clsBtn.addEventListener('click',()=>{
        if (clsBtn.classList.contains('btn-type')) {
            clsBtn.classList.replace('btn-type','btn-type-clicked')
            
        } else {
            clsBtn.classList.replace('btn-type-clicked','btn-type')
            
    
        }
    })

}

changeClassBtn('ONA',animeArray)
changeClassBtn('TV')
changeClassBtn('Movie')
changeClassBtn('Special')