const slidesContainer=document.querySelector("#cards-container");
const slide=document.querySelector(".card");
const prevButton=document.getElementById("slide-arrow-prev");
const nextButton=document.getElementById("slide-arrow-next");
nextButton.addEventListener("click",()=>{
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;

});
prevButton.addEventListener("click",()=>{
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});



