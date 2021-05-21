function getLocalStorage() {
  //   if (data !== null) {
  //     nameInput.value = savedData.name;
  //     jobInput.value = savedData.job;
  //     emailInput.value = savedData.email;
  //     phoneInput.value = savedData.phone;
  //     linkedinInput.value = savedData.linkedin;
  //     githubInput.value = savedData.github;
  //   }
  null != getlocalData &&
    ((nameInput.value = getlocalData.name),
    (jobInput.value = getlocalData.job),
    (emailInput.value = getlocalData.email),
    (telephoneInput.value = getlocalData.phone),
    (linkedInInput.value = getlocalData.linkedin),
    (githubInput.value = getlocalData.github),
    (paletteSelector.value = getlocalData.palette),
    (previewImg.value = getlocalData.photo),
    (data = getlocalData)),
    localStorageColor();
}
getLocalStorage();

if (getlocalData) {
  data = getlocalData;
  inputChange();
}
