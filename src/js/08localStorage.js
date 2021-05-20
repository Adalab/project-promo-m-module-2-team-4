function getData() {
  data = {
    name: document.querySelector("#name").value,
    job: document.querySelector("#job").value,
    photo: photo,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    linkedin: document.querySelector("#linkedin").value,
    github: document.querySelector("#github").value,
    palette: document.querySelector(".js-palette:checked").value,
  };
}
function saveInLocal() {
  const data = getData();
  const dataString = JSON.stringify(data);
  localStorage.setItem("data", dataString);
}

function getLocalStorage() {
  const dataString = localStorage.getItem("data");
  if (dataString !== null) {
    const data = JSON.parse(dataString);
    document.querySelector("#name").value = data.name;
    document.querySelector("#job").value = data.job;
    document.querySelector("#email").value = data.email;
    document.querySelector("#phone").value = data.phone;
    document.querySelector("#linkedin").value = data.linkedin;
    document.querySelector("#github").value = data.github;
    photo = data.photo;
    const paletteElements = document.querySelectorAll(".js-palette");
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === data.palette) {
        paletteElement.checked = true;
      }
    }
    updateAllInputs();
    handlePalette();
    updatePhoto();
  }
}
