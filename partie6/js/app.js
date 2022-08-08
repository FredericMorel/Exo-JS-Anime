"use strict";


data.data.forEach(element=>{
    const cardsContainer=document.querySelector(".cards-container");
    const img=element.images.jpg.image_url;
    const title=element.title;
    let synopsys=element.synopsis;
    const preview= sliceString(synopsys,50);
    synopsys=preview;
  
    const card=createCard({img,title,synopsys,cardsContainer})
    
    cardsContainer.appendChild(card);
});