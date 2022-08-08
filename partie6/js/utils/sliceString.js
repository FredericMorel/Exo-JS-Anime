function sliceString( str=String,nbrLetters=Number){
    
    if (str.length>nbrLetters){
        const result=str.slice(0,nbrLetters);
        str=result+"...";
       
    }else{
        str+="...";
      
    }
    return str;
}
// TODO: 
// FIXME: 