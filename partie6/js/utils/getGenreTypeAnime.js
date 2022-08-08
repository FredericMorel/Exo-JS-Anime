console.log("la liste pour le genre",listAnime);
console.log("la liste pour le genre",listAnime[0].genres[0].name);
console.log("la liste pour le genre",listAnime[1].genres[0].name);
console.log("la liste pour le genre",listAnime[2].genres[0].name);
console.log("la liste pour le genre",listAnime[3].genres[0].name);

console.log("la liste pour le genre",listAnime[5].genres[0].name);
console.log("la liste pour le genre",listAnime[5].genres[1].name);


// TODO:  recuperer le tableau de genre
// FIXME:

const genreArray=[];
listAnime.forEach(element => {
   
    if(element.genres==""){
        return;
    }else{
        genreArray.push(element.genres);
    }
    
});

console.log("Genre Array :",genreArray);
const finalGenreArray=[]
for (let i = 0; i < genreArray.length; i++) {
    console.log(genreArray[i]);
    for (let index = 0; index < genreArray[i].length; index++) {
        console.log("aaaaaa",genreArray[i][index].name);
        finalGenreArray.push(genreArray[i][index].name)
    }
  }
  console.log("final tableau : ", finalGenreArray);
