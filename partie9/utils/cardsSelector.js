
//#region  get 

console.log(animeArray);
 
let tabCard =[]
for (let prop in animeArray){
  
    const item={
      id:Number,
      title:String,
      synopsis: String,
      type:String,
      tabGenres:Array,
      image:String,
      video:String,
      get_id(id){
        this.id=id
        return this.id
      },
      get_title(title){
        this.title=title
        return this.title
      },
      get_synopsis(synopsis){
        this.synopsis=synopsis
        return this.synopsis
      },
      get_genres(genres){
        const tab =[]
        genres.forEach(e=>{tab.push(e.name)})
        this.tabGenres=tab
        return this.tabGenres
      },
      get_type(type){
        this.type=type
        return this.type
      },
      get_image(image){
        this.image=image
        return this.image
      },
      get_video(video){
        this.video=video
        return this.video
      }
      
    }
    
    item.get_id(prop)
    item.get_title(animeArray[prop].title)
    item.get_synopsis(animeArray[prop].synopsis)
    item.get_genres(animeArray[prop].genres)
    item.get_type(animeArray[prop].type)
    item.get_image(animeArray[prop].images.jpg.image_url)
    item.get_video(animeArray[prop].trailer.embed_url);

    
    tabCard.push(item)
}


function getListToDisplay({video,img,title,synopsys}){
}

const test1=function getListGenreAnime(animeArray){
  let tab15=Array
 for (let prop of animeArray) {
  animeArray[prop].genres.forEach(element => {
      tab15=element
  });
 }

}

/* for (let iterator of animeArray) {
  console.log(iterator.genres);
  for (let iter of iterator.genres) {
    console.log('eeeeeeeeeeee',iter.name)
  }
} */