

const htmlListTypeAnime = document.querySelector('.list-type-anime');

finalListTypeAnime.forEach((item)=>{
     const itemTypeAnime=document.createElement('li')
     const btn=document.createElement('button')
     btn.classList.add("btn-type-"+item, "btn-type")
     btn.setAttribute("type","button")
     btn.setAttribute('name',item)
     btn.textContent=item
    itemTypeAnime.classList.add("list-type-anime-item");
    
    itemTypeAnime.appendChild(btn)

    htmlListTypeAnime.appendChild(itemTypeAnime);
    
});




