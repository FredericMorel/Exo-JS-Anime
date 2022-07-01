/* Etape 1 crée tableaux  vide en html qui doit avoir dans sont thead nom ,prénom ,classe ,professeur ,moyenne */

let table = document.createElement("table");
// 1) créer balise table
//document.body.appendChild(table);
// 2) créer balise thead
let thead = document.createElement("thead");
// 3) ajout balise thead à balise table
table.appendChild(thead);
let tr = document.createElement("tr");
thead.appendChild(tr);
let th1 = document.createElement("th");
th1.innerHTML = "Nom";
tr.appendChild(th1);
let th2 = document.createElement("th");
th2.innerHTML = "Prénom";
tr.appendChild(th2);
let th3 = document.createElement("th");
th3.innerHTML = "Classe";
tr.appendChild(th3);
let th4 = document.createElement("th");
th4.innerHTML = "Professeur";
tr.appendChild(th4);
let th5 = document.createElement("th");
th5.innerHTML = "Moyenne";
tr.appendChild(th5);
let tbody = document.createElement("tbody");
table.appendChild(tbody);
let mainApp = document.querySelector("#app");
//document.querySelector("main").appendChild(table);
mainApp.appendChild(table);

/* Etape 2   crée tableau d'objet qui va contenir les des info avec la structure suivante  {nom:string,prénom:string , classe:string ,professeur:string,moyenne:number} le array doit avoir 5 objet minimum*/

const users = [
  {
    nom: "Agathe",
    prenom: "Didier",
    classe: "Ts1",
    professeur: "Sebastien",
    moyenne: 15,
  },
  {
    nom: "Beta",
    prenom: "Joe",
    classe: "Ts2",
    professeur: "bernard",
    moyenne: 16,
  },
  {
    nom: "Ceres",
    prenom: "Jean",
    classe: "Ts3",
    professeur: "Astride",
    moyenne: 17,
  },
  {
    nom: "Darthe",
    prenom: "Benoit",
    classe: "Ts4",
    professeur: "Joseph",
    moyenne: 15,
  },
  {
    nom: "Evans",
    prenom: "Pascal",
    classe: "Ts5",
    professeur: "César",
    moyenne: 18,
  },
  {
    nom: "LaFosse",
    prenom: "Julien",
    classe: "Ts7",
    professeur: "César",
    moyenne: 15,
  },
];

/* Etape 3  afficher les dans le tableaux Html avec du JS  */

for (let i = 0; i < users.length; i++) {
  let tr = document.createElement("tr");
  //tbody.appendChild(tr);
  let td1 = document.createElement("td");
  td1.innerHTML = users[i].nom;
  tr.appendChild(td1);
  let td2 = document.createElement("td");
  td2.innerHTML = users[i].prenom;
  tr.appendChild(td2);
  let td3 = document.createElement("td");
  td3.innerHTML = users[i].classe;
  tr.appendChild(td3);
  let td4 = document.createElement("td");
  td4.innerHTML = users[i].professeur;
  tr.appendChild(td4);
  let td5 = document.createElement("td");
  td5.innerHTML = users[i].moyenne;
  tr.appendChild(td5);
  tbody.appendChild(tr);
}

/* Etape 4 Ajouter un champ de recherche au-dessus du tableaux  */

let input = document.createElement("input");
input.setAttribute("type", "search");
input.setAttribute("placeholder", "Rechercher");
document.querySelector("table").before(input);

/* Etape 5 récupérer les valeurs entrées dans le champ de recherche */

input.addEventListener("keyup", function (e) {
  let search = e.target.value;
  console.log("Ce que je tape : ", search);
  let tr = document.querySelectorAll("tr");
  console.log("D'abord je récupère tous les TR : ", tr);
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td");
    console.log("Td de la boucle for :", tr[1]);

    for (let j = 0; j < td.length; j++) {
      if (td[j].innerHTML.toLowerCase().includes(search.toLowerCase())) {
        tr[i].style.display = "";
        break;
      } else {
        tr[i].style.display = "none";
      }
    }
  }
});
