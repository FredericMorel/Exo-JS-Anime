"use strict"

const genreAnimeHtml=document.querySelector('.list-genre-anime')


genreAnime.forEach((item)=>
{
    const itemGenreAnime=document.createElement('li')
    itemGenreAnime.classList.add('item-genre-anime')
    const btnGenreAnime= document.createElement('button')
    btnGenreAnime.classList.add('btn-genre-anime')
    btnGenreAnime.setAttribute("type","button")
    btnGenreAnime.textContent=item
    itemGenreAnime.appendChild(btnGenreAnime)
    genreAnimeHtml.appendChild(itemGenreAnime)
    
});
