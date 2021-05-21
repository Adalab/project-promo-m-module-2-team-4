function getLocalStorage() {
  if (data != null) {
    nameInput.value = savedData.name;
    jobInput.value = savedData.job;
    emailInput.value = savedData.email;
    phoneInput.value = savedData.phone;
    linkedinInput.value = savedData.linkedin;
    githubInput.value = savedData.github;
  }

  localStorageColor();
}
getLocalStorage();

if (savedData) {
  data = savedData;
  inputChange();
}
