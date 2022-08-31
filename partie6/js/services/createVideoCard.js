








function createVideoCard({video,title,synopsys}) {
    const card = document.createElement("div");
    card.classList.add("card");
    const imgCard = document.createElement("div");
    imgCard.classList.add("card-video");
    imgCard.innerHTML=`<iframe width="250" height="315" src="https://www.youtube.com/embed/4A_X-Dvl0ws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    card.appendChild(imgCard);
    const titleCard = document.createElement("p");
    titleCard.classList.add("title-card");
    titleCard.innerText = title;
    card.appendChild(titleCard);
    const descriptionCard = document.createElement("p");
    descriptionCard.classList.add("card-text");
    descriptionCard.innerText = synopsys;
    card.appendChild(descriptionCard);
    return card

  }
  