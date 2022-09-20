function slicingString(text,len) {
    if(text.length>len){
        text=text.slice(0,len)
        text=text+'...'
    }
    return text
}