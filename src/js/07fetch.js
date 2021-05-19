const createCard = document.querySelector(".js-createcard");
const responseElement = document.querySelector(".js-response");
const btnTwitter = document.querySelector(".js-twitter");

function handlerClickCreate(event) {
  event.preventDefault();
  if (data.name === "") {
    responseElement.innerHTML = "Oops! Tienes que rellenar tu nombre!";
    responseElement.classList.remove("hidden");
  } else if (data.job === "") {
    responseElement.innerHTML =
      "Oops! Tienes que rellenar tu puesto de trabajo!";
    responseElement.classList.remove("hidden");
  } else if (data.photo === "") {
    responseElement.innerHTML = "Oops! Tienes que subir tu foto!";
    responseElement.classList.remove("hidden");
  } else if (data.email === "") {
    responseElement.innerHTML = "Oops! Tienes que rellenar tu email!";
    responseElement.classList.remove("hidden");
  } else if (data.phone === "") {
    responseElement.innerHTML = "Oops! Tienes que rellenar tu teléfono!";
    responseElement.classList.remove("hidden");
  } else if (data.linkedin === "") {
    responseElement.innerHTML =
      "Oops! Tienes que rellenar tu usuario de LinkedIn!";
    responseElement.classList.remove("hidden");
  } else if (data.github === "") {
    responseElement.innerHTML =
      "Oops! Tienes que rellenar tu usuario de GitHub!";
    responseElement.classList.remove("hidden");
  } else {
    console.log(data);
    fetch("https://awesome-profile-cards.herokuapp.com/card", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === false) {
          responseElement.innerHTML = "Te falta algun dato ;)";
          responseElement.classList.remove("hidden");
        } else {
          /*responseElement.innerHTML = "La tarjeta ha sido creada!" + */
          const newElement = document.createElement("p");
          const newContent = document.createTextNode(
            "La tarjeta ha sido creada"
          );
          newElement.appendChild(newContent);
          responseElement.appendChild(newElement);

          const newLink = document.createElement("a");
          newLink.href = `${data.cardURL}`;
          responseElement.appendChild(newLink);
          btnTwitter.classList.remove("hidden");
        }
      });
  }
}

createCard.addEventListener("click", handlerClickCreate);
