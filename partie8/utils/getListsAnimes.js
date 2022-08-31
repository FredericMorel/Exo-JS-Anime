const animeArray = data.data;

console.log(animeArray);

//#region Type Anime
const typeAnimeSet = new Set()

console.log(getTypeAnimeSet(animeArray));
/**
 *
 *
 * @param {*} animeArray
 * @return {*} Set of Anime
 */
function getTypeAnimeSet(animeArray) {
  animeArray.forEach(element => {
    typeAnimeSet.add(element.type)
  });
  return typeAnimeSet
}

//#end region

//#region Genre Anime
const genreAnimeSet = new Set()

/**
 *
 *
 * @param {*} animeArray
 */
function getGenreAnime(animeArray) {
  animeArray.forEach(element => {
    element.genres.forEach(e=>{
      genreAnimeSet.add(e.name)
     
    })
  });
  return genreAnimeSet
}

console.log(getGenreAnime(animeArray))

//#end region