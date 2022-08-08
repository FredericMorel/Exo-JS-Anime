


const listAnime=data.data;

/* Get List type Anime */
const listTypeAnime = new Set();


/* listAnime.forEach(element => {
  const typeAnime= element.type
  listTypeAnime.add(typeAnime);
}); */
const finalListTypeAnime=getListTypeAnime(listAnime);
finalListTypeAnime.forEach((element)=>console.log(element));  



/**
 *
 *
 * @param {*} listAnime
 * @return {*} 
 */
function getListTypeAnime(listAnime){
  listAnime.forEach(element => {
    const typeAnime= element.type
    listTypeAnime.add(typeAnime);
  });
  return listTypeAnime;
};



