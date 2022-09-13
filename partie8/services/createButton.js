/* finalListTypeAnime.forEach((item)=>{
     const itemTypeAnime=document.createElement('li')
     const btn=document.createElement('button')
     btn.classList.add("btn-type-"+item, "btn-type")
     btn.setAttribute("type","button")
     btn.setAttribute('name',item)
     btn.textContent=item
    itemTypeAnime.classList.add("list-type-anime-item");
    
    itemTypeAnime.appendChild(btn)

    htmlListTypeAnime.appendChild(itemTypeAnime);
    
}); */
const htmlListTypeAnime = document.querySelector('.list-type-anime');

function createTypeButton(item){
    
        const itemTypeAnime=document.createElement('li')
        const btn=document.createElement('button')
        btn.classList.add("btn-type-"+item, "btn-type")
        btn.id=item
        btn.setAttribute("type","button")
        btn.setAttribute('name',item)
        btn.textContent=item
       itemTypeAnime.classList.add("type-anime-item");
       
       itemTypeAnime.appendChild(btn)
   
       htmlListTypeAnime.appendChild(itemTypeAnime);
       
   
}

getTypeAnimeSet(animeArray).forEach(e=>{
    createTypeButton(e)
})

const htmlListGenreAnime=document.querySelector('.list-genre-anime')

function createGenreButton(item){
    const itemGenreAnime=document.createElement('li')
    const btn=document.createElement('button')
    btn.classList.add("btn-genre-"+item, "btn-genre")
    btn.setAttribute("type","button")
    btn.setAttribute('name',item)
    btn.textContent=item
    itemGenreAnime.classList.add("genre-anime-item")
    itemGenreAnime.appendChild(btn)
    htmlListGenreAnime.appendChild(itemGenreAnime)
}
getGenreAnime(animeArray).forEach(e=>{createGenreButton(e)})


/* const btnOna=document.querySelector('.btn-type-ONA')
console.log(btnOna)
btnOna.addEventListener('click',()=>{
    if(btnOna.classList.contains('btn-type,')){
        btnOna.classList.replace('btn-type','btn-type-clicked')
        return btnOna
    }else{
        btnOna.classList.replace('btn-type-clicked','btn-type')
        return btnOna
    }
}) */