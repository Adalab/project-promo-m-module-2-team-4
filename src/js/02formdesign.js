'use strict'

const palette1=document.querySelector(".palette-1");
const palette2=document.querySelector(".palette-2");
const palette3=document.querySelector(".palette-3");

const label1= document.querySelector(".1");
const label2= document.querySelector(".2");
const label3= document.querySelector(".3");

const card={
    line:document.querySelector(".rectangle"),
    title:document.querySelector(".name"),
    border:document.querySelector(".icon"),
    icon:document.querySelector(".iconcolor"),
}

function labelPallete1 (){
    //line
    card.line.classList.add ("color-2");
    card.line.classList.remove ("color-5", "color-8");

    //title
    card.title.classList.add ("color-1");
    card.title.classList.remove ("color-4", "color-7");

    //border 
    card.border.classList.add ("color-3");
    card.border.classList.remove ("color-6", "color-9");

    //icon
    card.icon.classList.add ("color-1");
    card.icon.classList.remove ("color-4", "color-7");
     
    FormData.pallete="1"; 
}

function labelPallete2 (){
    //line
    card.line.classList.add ("color-5");
    card.line.classList.remove ("color-2", "color-8");

    //title
    card.title.classList.add ("color-4");
    card.title.classList.remove ("color-1", "color-7");

    //border 
    card.border.classList.add ("color-6");
    card.border.classList.remove ("color-3", "color-9");

    //icon
    card.icon.classList.add ("color-4");
    card.icon.classList.remove ("color-1", "color-7");
     
    FormData.pallete="2"; 
}

label2.addEventListener('change', labelPallete2);

label1.addEventListener('change', labelPallete1);

// function changeColor (){
//     const paletteValue = inputPalette.value;
//     const colorBlue = document.getElementById('blue');
//     const colorRed = document.getElementById('red');
//     const colorYellow = document.getElementById('yellow');
//     removeColor();    
//     if (colorBlue.checked === true) {
//         card.line.classList.add ("color-2");
//         card.title.classList.add ("color-1");
//         card.border.classList.add ("color-3");
//         card.icon.classList.add ("color-1");

//     } else if (colorRed.checked === true) {
//         card.line.classList.add ("color-5");
//         card.title.classList.add ("color-4");
//         card.border.classList.add ("color-6");
//         card.icon.classList.add ("color-4");

//     } else if (colorYellow.checked === true) {
//         card.line.classList.add ("color-8");
//         card.title.classList.add ("color-7");
//         card.border.classList.add ("color-9");
//         card.icon.classList.add ("color-7"); 
//     }
// };

// palette1.addEventListener ('change', changeColor);
// palette2.addEventListener ('change', changeColor);
// palette3.addEventListener ('change', changeColor);





