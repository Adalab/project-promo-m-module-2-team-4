const createCard = document.querySelector(".js-createcard");
const responseElement = document.querySelector(".js-response");

function handlerClickCreate(event) {
  event.preventDefault();
  if (data.fullName === "") {
    responseElement.innerHTML = "Oops! Tienes que rellenar tu nombre!";
    responseElement.classList.remove(hidden);
  } else if (data.position === "") {
    responseElement.innerHTML =
      "Oops! Tienes que rellenar tu puesto de trabajo!";
    responseElement.classList.remove(hidden);
  } else if (data.image === "") {
    responseElement.innerHTML = "Oops! Tienes que subir tu foto!";
    responseElement.classList.remove(hidden);
  } else if (data.email === "") {
    responseElement.innerHTML = "Oops! Tienes que rellenar tu email!";
    responseElement.classList.remove(hidden);
  } else if (data.phone === "") {
    responseElement.innerHTML = "Oops! Tienes que rellenar tu teléfono!";
    responseElement.classList.remove(hidden);
  } else if (data.linkedin === "") {
    responseElement.innerHTML =
      "Oops! Tienes que rellenar tu usuario de LinkedIn!";
    responseElement.classList.remove(hidden);
  } else if (data.github === "") {
    responseElement.innerHTML =
      "Oops! Tienes que rellenar tu usuario de GitHub!";
    responseElement.classList.remove(hidden);
  } else {
    fetch("https://awesome-profile-cards.herokuapp.com/card", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === false) {
          responseElement.innerHTML = "Te falta algun dato ;)";
          responseElement.classList.remove(hidden);
        } else {
          /*responseElement.innerHTML = "La tarjeta ha sido creada!" + */
        }
      });
  }
}
