
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
    
    card.classList = "card"
    card.addEventListener('mouseover', (e) => {
        if(object.video){
            textCard.remove()
            titleCard.remove()
            imgContainer.remove()
            console.log(e.target)
        setTimeout(displayVideo(object,card),3000)
        videoCard.classList.replace("video-display-none", "video-anime")
        }
        
    })
    card.addEventListener('mouseleave', (e) => {
        setTimeout(imgContainer.classList.replace('video-display-none', 'img-container'),1000), false

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
    videoCard.classList.add('video')
    videoCard.setAttribute('src', object.video)
    card.appendChild(videoCard)
}