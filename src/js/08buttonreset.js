const resetElement = document.querySelector(".button_reset");
const paletteDefault = document.querySelector("#blue");

function resetButton(ev) {
  ev.preventDefault();
  for (const resetInput of form) {
    resetInput.value = "";
    profileImage.style = "";
    profilePreview.style = "";
    labelpalette1();
    paletteDefault.checked = true;
    data.palette = "1";
    card.title.innerHTML = "Mileva Marić";
    card.job.innerHTML = "Matemática";
  }
  localStorage.removeItem("data");
}
resetElement.addEventListener("click", resetButton);
