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
  palette: "",
};

let nameInput = document.querySelector("#name");
let jobInput = document.querySelector("#job");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");
let linkedinInput = document.querySelector("#linkedin");
let githubInput = document.querySelector("#github");

let paletteElements = document.querySelectorAll(".js_palette");

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
