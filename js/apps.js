window.addEventListener("DOMContentLoaded", () => {
  const elList = document.querySelector(".list");
  const elLoader = document.querySelector(".loader");

setInterval(() => {
  elLoader.style.opacity = "0";
  setInterval(() => {
    elLoader.style.display = "none"
  }, 1000)
}, 5000)


  function pakemonsFunction(pakemon) {

  for(let element of pakemon) {

    // CREATE
    const newLi = document.createElement("li");
    const newImg = document.createElement("img");
    const newDiv = document.createElement("div");
    const newHeading = document.createElement("h5");
    const newText = document.createElement("p");
    const newWeight = document.createElement("p");

    // SETATRIBUTE AND STYLES

    elList.style.marginTop = "50px"
    newLi.setAttribute("class", "card");
    newLi.style.width = "18rem";
    newLi.style.marginTop = "40px";
    newLi.style.border = "4px solid black";
    newLi.style.borderRadius = "20px";
    newImg.setAttribute("class", "card-img-top");
    newImg.setAttribute("src", element.img);
    newDiv.setAttribute("class", "card-body");
    newDiv.style.borderTop = "4px solid dimgray"
    newHeading.setAttribute("class", "card-title");
    newHeading.style.fontWeight = "700"
    newText.setAttribute("class", "card-text");
    newText.style.fontSize = "20px"
    newText.style.fontWeight = "500"
    newWeight.setAttribute("class", "card-text");
    newWeight.style.fontSize = "20px";
    newWeight.style.fontWeight = "700"


   // TEXT-CONTENT
    newHeading.textContent = element.name;
    newText.textContent = element.type;
    newWeight.textContent = element.weight;

   //  APPEND-CHILD
    elList.appendChild(newLi);
    newLi.appendChild(newImg);
    newLi.appendChild(newDiv);
    newDiv.appendChild(newHeading);
    newDiv.appendChild(newText);
    newDiv.appendChild(newWeight);

}

}

pakemonsFunction(pokemons);

})
