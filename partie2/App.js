/* Etape 1 crée tableaux  vide en html qui doit avoir dans sont thead nom ,prénom ,classe ,professeur ,moyenne */
const students = [
  {
    name: "Matis",
    firstName: "Paul",
    classe: "TS3",
    professor: "xavier",
    average: 15,
  },
  {
    name: "Ferer",
    firstName: "Pierre",
    classe: "TS1",
    professor: "dupignon",
    average: 19,
  },
  {
    name: "Degas",
    firstName: "Jerome",
    classe: "TS2",
    professor: "gravel",
    average: 13,
  },
  {
    name: "nonin",
    firstName: "Etienne",
    classe: "TS4",
    professor: "gravel",
    average: 18,
  },
  {
    name: "maxwell",
    firstName: "Erwan",
    classe: "TS1",
    professor: "Charles",
    average: 14,
  },
];

/* Etape 2   crée tableau d'objet qui va contenir les des info avec la structure suivante  {nom:string,prénom:string , classe:string ,professeur:string,moyenne:number} le array doit avoir 5 objet minimum*/

/* Etape 3  afficher les dans le tableaux Html avec du JS  */
function displayStudents() {
  students.forEach((student) => {
    const tableBody = document.querySelector(".t-body");
    console.log(tableBody);
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td>${student.name}</td><td>${student.firstName}</td><td>${student.classe}</td><td>${student.professor}</td><td>${student.average}</td>`;
    tableBody.appendChild(tableRow);
  });
}
displayStudents();
/* Etape 4 Ajouter un champ de recherche au-dessus du tableaux  */
/* Etape 5 récupérer les valeurs entrées dans le champ de recherche */
const nameSearch = document.querySelector("#name-search");
// ok
nameSearch.addEventListener("keyup", (event) => {
  event.preventDefault;
  const tableBody = document.querySelector(".t-body");
  tableBody.innerHTML = "";
  // je récupère la valeur de l'input
  let inputName = event.target.value;
  console.log("valeur 1", inputName);
  // Je récupère la valeur recherchée dans tableau avec filter
  const resultName = students.filter((student) => {
    if (student.name == inputName) {
      return student.name == inputName;
    } else {
      return student.professor == inputName;
    }
  });
  console.log("valeur 10 : ", resultName);
  console.log("resultat du nom : ", resultName[0].name);

  console.log("resultat du prof : ", resultName[0].professor);

  const tableRow = document.createElement("tr");

  tableRow.innerHTML = `<td>${resultName[0].name}</td><td>${resultName[0].firstName}</td><td>${resultName[0].classe}</td><td>${resultName[0].professor}</td><td>${resultName[0].average}</td>`;
  tableBody.appendChild(tableRow);

  //console.log("valeur 2 : ",result[0].name);
  //je remplace
});

nameSearch.addEventListener("focusout", (event) => {
  event.preventDefault();
  const tableBody = document.querySelector(".t-body");
  if (tableBody.target.value === "") {
    displayStudents();
  }
});

/* Etape 6  quand on tape le nom d'un élevé ou d'un professeur faire une recherche dans le tableau */
