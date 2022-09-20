
console.log('Page createCard get list card', tabCard)


for (const el of tabCard) {
    createCards(el)
}



function createCards(object) {
    // const
    const card = document.createElement("div")
    const imgContainer = document.createElement("div")
    const titleCard = document.createElement("h3")
    const textCard = document.createElement("p")
    const video= displayVideo(object,card)
    card.classList = "card"
    
        
    
    card.addEventListener('mouseenter', (e) => {
        if(object.video){
            console.log("test test test:",object.video)
            imgContainer.classList.replace("img-container","video-display-none")
            titleCard.classList.replace("title-card","video-display-none")
            textCard.classList.replace("text-card","video-display-none")
            video.classList.replace("video-display-none","video")
        }
        

    }) 

    card.addEventListener('mouseleave', (e) => {
        if(object.video){
            console.log("test test test:",object.video)
            imgContainer.classList.replace("video-display-none","img-container")
            titleCard.classList.replace("video-display-none","title-card")
            textCard.classList.replace("video-display-none","text-card")
            video.classList.replace("video","video-display-none")
        }
        

    }) 
    // functions call's

    createImgContainer(object.image, imgContainer)
    createTitle(object.title, titleCard)
    createTextCard(object.synopsis, textCard)

    //assemblies
    card.appendChild(imgContainer)
    card.appendChild(titleCard)
    card.appendChild(textCard)
    
    const cardContainer = document.querySelector('.cards-container')
    cardContainer.appendChild(card)
    return card
}

function createVideoCard(video) {
    const videoCard = document.createElement('iframe')
    videoCard.classList.add('video')
    videoCard.setAttribute('src', video)
    return videoCard
}

function createImgContainer(img, imgContainer) {

    const imgCard = document.createElement('img')
    imgContainer.classList.add('img-container')
    createImgCard(img, imgCard)
    imgContainer.appendChild(imgCard)
    return imgContainer

}


function createImgCard(img, imgCard) {
    imgCard.src = img
    imgCard.alt = ""
    imgCard.classList = "img-card"
}

function createTextCard(synopsis, textCard) {
    synopsis = slicingString(synopsis, 40)
    textCard.innerText = synopsis
    textCard.classList = "text-card"
    return textCard
}

function createTitle(title, titleCard) {
    titleCard.innerText = title
    titleCard.classList = "title-card"
    return titleCard
}

function displayVideo(object,card) {
    const videoCard = document.createElement('iframe')
    videoCard.classList.add('video-display-none')
    videoCard.setAttribute('src', object.video)
    card.appendChild(videoCard)
    return videoCard
}