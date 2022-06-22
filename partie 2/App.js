/* Etape 1 crée tableaux  vide en html qui doit avoir dans sont thead nom ,prénom ,classe ,professeur ,moyenne */
const students = [
    {name:"Matigan",firstName:"Paul",classe:"TS3",professor:"xavier",average:15},
    {name:"Carramba",firstName:"Pierre",classe:"TS1",professor:"dupignon",average:19},
    {name:"Degas",firstName:"Jerome",classe:"TS2",professor:"gravel",average:13},{name:"nanpogui",firstName:"Etienne",classe:"TS4",professor:"algradier",average:18},{name:"maxwell",firstName:"Erwan",classe:"TS1",professor:"Charles",average:14},]


/* Etape 2   crée tableau d'objet qui va contenir les des info avec la structure suivante  {nom:string,prénom:string , classe:string ,professeur:string,moyenne:number} le array doit avoir 5 objet minimum*/





/* Etape 3  afficher les dans le tableaux Html avec du JS  */


function displayStudents(){
    students.forEach((student) =>{
        const tableBody= document.querySelector(".t-body");
        console.log(tableBody);
        const tableRow= document.createElement("tr");
        tableRow.innerHTML=`<td>${student.name}</td><td>${student.firstName}</td><td>${student.classe}</td><td>${student.professor}</td><td>${student.average}</td>`
       tableBody.appendChild(tableRow);
    })
}
displayStudents();


/* Etape 4 Ajouter un champ de recherche au-dessus du tableaux  */




/* Etape 5 récupérer les valeurs entrées dans le champ de recherche */
const nameSearch= document.querySelector("#name-search");
// ok 
nameSearch.addEventListener('keyup',(event=>{
    event.preventDefault;
    const tableBody= document.querySelector(".t-body");
    tableBody.innerHTML="";
    // je récupère la valeur de l'input
    let inputName = event.target.value;
    console.log("valeur 1", inputName);
    // Je récupère la valeur recherchée dans tableau avec filter
    const result = students.filter(student => student.name==inputName);
//console.log("valeur 2 : ",result[0].name);
    //je remplace
    const tableRow= document.createElement("tr");
    tableRow.innerHTML=`<td>${result[0].name}</td><td>${result[0].firstName}</td><td>${result[0].classe}</td><td>${result[0].professor}</td><td>${result[0].average}</td>`
   tableBody.appendChild(tableRow);
    })
   
);
nameSearch.addEventListener('focusout',(event=>{
    displayStudents();
}))



/* Etape 6  quand on tape le nom d'un élevé ou d'un professeur faire une recherche dans le tableau */

