"use strict";

const form = document.querySelector(".js-form");
const reset = document.querySelector(".button_reset");

const card = {
  line: document.querySelector(".rectangle"),
  title: document.querySelector(".name"),
  border: document.querySelectorAll(".icon"),
  icon: document.querySelectorAll(".iconcolor"),
  job: document.querySelector(".job"),
  phone: document.querySelector(".js-phone"),
  email: document.querySelector(".js-email"),
  linkedin: document.querySelector(".js-linkedin"),
  github: document.querySelector(".js-github"),
};

function changeTitle(ev) {
  const inputForm = ev.target.name;
  const inputValue = ev.target.value;
  data[inputForm] = inputValue;
}

function inputChange() {
  card.title.innerHTML =
    data.fullName === "" ? "Nombre y Apellidos" : data.fullName;
  card.job.innerHTML = data.position === "" ? "Puesto" : data.position;
  card.email.href = `mailto: ${data.email}`;
  card.phone.href = `tel: ${data.phone}`;
  card.linkedin.href = `https://linkedin/${data.linkedin}`;
  card.github.href = `https://github.com/${data.github}`;
}

function handlerKey(ev) {
  changeTitle(ev);
  inputChange();
}

form.addEventListener("keyup", handlerKey);
