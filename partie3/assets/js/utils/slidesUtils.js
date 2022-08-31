
    const listCards=document.getElementById("list-cards");
    const card=document.querySelector(".card");
    const prevButton=document.querySelector(".base-arrow-left");
    const nextButton=document.querySelector(".base-arrow-right");
    nextButton.addEventListener("click",()=>{
        const slideWidth = card.clientWidth;
        listCards.scrollLeft += slideWidth;
        console.log("click");
        
    });
    prevButton.addEventListener("click",()=>{
        const slideWidth = card.clientWidth;
        listCards.scrollLeft -= slideWidth;
    });
