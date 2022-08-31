// TODO:  
// FIXME: 


/* console.log(finalListTypeAnime)

const setTypeAnime=new Set()
 finalListTypeAnime.forEach(element => {
    setTypeAnime.add(element)
 });

setTypeAnime.add('BlueRay')
console.log("original list :",finalListTypeAnime);
console.log("final list : ",setTypeAnime);

   /*  */

/*     switch (key) {
        case value:
            
            break;
    
        default:
            break;
    } */

/*     setTypeAnime.forEach(item=>{
        let htmlButtonTypeAnime=document.getElementsByClassName("btn-type-"+item)
        htmlButtonTypeAnime.addEventListener('click',event=>{
            console.log(`test dernier : ${event.target.name}`);
        })
      
    }) */ /* */



//#region select ona type
const onaType = document.querySelector('.btn-type-ONA')
onaType.addEventListener('click', () => {
    
    if (onaType.classList.contains('btn-type')) {
        onaType.classList.replace('btn-type', 'btn-type-clicked')
        finalListTypeAnime.delete('ONA')
        console.log(finalListTypeAnime)
        return finalListTypeAnime
    } else {
        onaType.classList.replace('btn-type-clicked', 'btn-type')
        finalListTypeAnime.add('ONA'),
        console.log(finalListTypeAnime)
        return finalListTypeAnime
    }
})

//#endregion select type ona

//#region select TV
const tvType = document.querySelector('.btn-type-TV')
tvType.addEventListener('click', (event) => {
    console.log(event);
    if (tvType.classList.contains('btn-type')) {
        tvType.classList.replace('btn-type', 'btn-type-clicked')
    } else {

        tvType.classList.replace('btn-type-clicked', 'btn-type')
    }
})
//#endregion select type Tv

//#region select Movie
const movieType = document.querySelector('.btn-type-Movie')
movieType.addEventListener('click', (event) => {
    console.log(event);
    if (movieType.classList.contains('btn-type')) {
        movieType.classList.replace('btn-type', 'btn-type-clicked')
    } else {

        movieType.classList.replace('btn-type-clicked', 'btn-type')
    }
})


//# end region select  Movie

//#region select Special
const SpecialType = document.querySelector('.btn-type-Special')
SpecialType.addEventListener('click', (event) => {
    console.log(event);
    if (SpecialType.classList.contains('btn-type')) {
        SpecialType.classList.replace('btn-type', 'btn-type-clicked')
    } else {

        SpecialType.classList.replace('btn-type-clicked', 'btn-type')
    }
})


//# end region select  special