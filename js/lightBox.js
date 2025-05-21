function lightBox(src) {
  let shade = document.createElement("div");
  shade.className = "shade";
  //shade.onclick = deleteShade;
  shade.addEventListener("click", deleteShade)

  let bigImage = document.createElement("img");
  bigImage.src = src;
  shade.appendChild(bigImage);

  document.body.appendChild(shade);

  function deleteShade() {
    document.body.removeChild(shade);
  }
}