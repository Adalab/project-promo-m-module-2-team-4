'use strict'

const form =document.querySelector('.js-form')

const card={
    line:document.querySelector(".rectangle"),
    title:document.querySelector(".name"),
    border:document.querySelectorAll(".icon"),
    icon:document.querySelector(".iconcolor"),
    job: document.querySelector('.job'),
}

const data={
    fullName:document.querySelector("#name"),
    position:document.querySelector('#position'),
    image:document.querySelector('.label'),
    email:document.querySelector("#email"),
    phone:document.querySelector("#telephone"),
    linkedin:document.querySelector("#linkedIn"),
    github:document.querySelector("#github")
}
function changeTitle(){
    const titleValue = data.fullName.value;
    const positionValue = data.position.value;
    // const titleValue = data.fullName.value;
    // const titleValue = data.fullName.value;
    // const titleValue = data.fullName.value;
    // const titleValue = data.fullName.value;
    // const titleValue = data.fullName.value;


    card.title.innerHTML= titleValue;
    card.job.innerHTML= positionValue;
}
 
form.addEventListener('keyup', changeTitle);