const inWrap = document.querySelector(".input-wrap");
const input = document.querySelector(".input-anim");
const validation = document.querySelector(".input-wrap span");

input.addEventListener("input", function (e) {
  //console.log(e.target.value);
  if (e.target.value !== "") {
    e.target.parentNode.classList.add("active-input");
  } else if (e.target.value === "") {
    e.target.parentNode.classList.remove("active-input");
  }

  if (e.target.value.includes("$")) {
    input.classList.add("erreur");
    validation.innerHTML = "Les $ sont interdits";
    validation.classList.add("visible");
  } else {
    input.classList.remove("erreur");
    validation.classList.remove("visible");
  }
});

const leftBtn = document.getElementById("button-left");
leftBtn.onclick = function goToLeft() {};
