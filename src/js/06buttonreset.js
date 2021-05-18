const resetElement = document.querySelector(".button_reset");

function resetButton(ev) {
  ev.preventDefault();
  for (const resetInput of form) {
    resetInput.value = "";
    profileImage.style = "";
    profilePreview.style = "";
  }
}

//innerHTML al card de nombres y tal con el nombre que queremos por defecto
//llamamiento al funcion de las paletas

resetElement.addEventListener("click", resetButton);
