/* <div class="card">
                <div class="img container">
                    <img src="" alt="">
                </div>
                <h3></h3>

            </div> */

function createCard({img,title,synopsys}){
    const card = document.createElement("div");
    card.classList="card";
    const imgContainer=document.createElement("div");
    imgContainer.classList="img-container";
    const imgCard= document.createElement('img');
    imgCard.src=img;
    imgCard.alt="";
    imgCard.classList="img-card";
    const titleCard= document.createElement("h3");
    titleCard.innerText=title;
    titleCard.classList="title-card";
    const textCard = document.createElement("p");
    textCard.innerText=synopsys;
    textCard.classList="text-card";
    imgContainer.appendChild(imgCard);
    card.appendChild(imgContainer);
    card.appendChild(titleCard);
    card.appendChild(textCard);
    return card;
}



