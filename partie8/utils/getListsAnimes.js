const animeArray = data.data;



//#region Type Anime
const typeAnimeSet = new Set()


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
//#end region


function displayVideo(params) {
  '<iframe width="340" height="192" src="https://www.youtube.com/embed/4A_X-Dvl0ws" title="TVアニメ『呪術廻戦』PV第4弾" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>'
}