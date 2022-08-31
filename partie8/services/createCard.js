


function createCard(img,title,synopsys){
    // const
    const card = document.createElement("div")
    const imgContainer=document.createElement("div")
    const titleCard= document.createElement("h3")
    const textCard = document.createElement("p")
    
    card.classList="card"
    card.addEventListener('mouseenter',()=>{

    })
    // functions call's

    createImgContainer(img,imgContainer)
    createTitle(title,titleCard)
    createTextCard(synopsys,textCard)
   //assemblies
    card.appendChild(imgContainer)
    card.appendChild(titleCard)
    card.appendChild(textCard)
    const cardContainer=document.querySelector('.cards-container')
    cardContainer.appendChild(card)
    return card
}

function createVideoCard(){
    
}

function createImgContainer(img,imgContainer){

    const imgCard= document.createElement('img')
    imgContainer.classList.add('img-container')
    createImgCard(img,imgCard)
    imgContainer.appendChild(imgCard)
    return imgContainer

}


function createImgCard(img,imgCard){
    imgCard.src=img
    imgCard.alt=""
    imgCard.classList="img-card"    
}

function createTextCard(synopsys,textCard){
    textCard.innerText=synopsys
    textCard.classList="text-card"
    return textCard
}

function createTitle(title,titleCard){
    titleCard.innerText=title
    titleCard.classList="title-card"
    return titleCard
}