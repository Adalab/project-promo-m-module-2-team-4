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

const paletteData = document.querySelector(".design");

if (savedData) {
  data = savedData;
  inputChange();
}

// function getLocalStorage() {
//   if (savedData != null) {
//     data.name.value = savedData.name;
//     data.job.value = savedData.job;
//     data.job.value = savedData.job;
//     data.email.value = savedData.email;
//     data.phone.value = savedData.phone;
//     data.linkedin.value = savedData.linkedin;
//     data.github.value = savedData.github;
//     paletteData.value = savedData.palette;
//     // guardo en el objeto data y repinto
//   }
//   // previewCard();
//   // previewImage();
//   // previewPalette();
// }
// getLocalStorage();
