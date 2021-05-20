"use strict";
const savedData = JSON.parse(localStorage.getItem("data"));

let data = {
  name: "",
  job: "",
  photo: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  palette: 1,
};

let card = {
  line: document.querySelector(".rectangle"),
  title: document.querySelector(".name"),
  border: document.querySelectorAll(".icon"),
  icon: document.querySelectorAll(".iconcolor"),
  job: document.querySelector(".job"),
  phone: document.querySelector(".js-phone"),
  email: document.querySelector(".js-email"),
  linkedin: document.querySelector(".js-linkedin"),
  github: document.querySelector(".js-github"),
  image: document.querySelector(".js__profile-preview"),
};

if (savedData) {
  data = savedData;
  inputChange();
}
