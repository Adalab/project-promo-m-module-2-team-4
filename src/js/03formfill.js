'use strict'


const card={
    line:document.querySelector(".rectangle"),
    title:document.querySelector(".name"),
    border:document.querySelector(".icon"),
    icon:document.querySelector(".iconcolor"),
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
    const titleValue = name.value;
    card.title.innerHTML= titleValue;

}
data.fullName.addEventListener('keyup', changeTitle);