"use strict";

const form = document.querySelector(".js-form");
const reset = document.querySelector(".button_reset");

function changeTitle(ev) {
  const inputForm = ev.target.name;
  const inputValue = ev.target.value;
  data[inputForm] = inputValue;
}

function inputChange() {
  console.log(data);
  card.title.innerHTML = data.name === "" ? "Nombre y Apellidos" : data.name;
  card.job.innerHTML = data.job === "" ? "Puesto" : data.job;
  card.email.href = `mailto: ${data.email}`;
  card.phone.href = `tel: ${data.phone}`;
  card.linkedin.href =
    data.linkedin.href === ""
      ? data.linkedin.setAttribute("disabled", true)
      : `https://linkedin.com/in/${data.linkedin}`;

  card.github.href = `https://github.com/${data.github}`;
}

function handlerKey(ev) {
  changeTitle(ev);
  inputChange();
}

form.addEventListener("keyup", handlerKey);
