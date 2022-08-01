function sliceString( str=String,nbrLetters=Number){
    if (str.length>nbrLetters){
        str.splice(0,nbrLetters);
        str+="...";
    }else{
        str+="...";
    }
    return str;
}