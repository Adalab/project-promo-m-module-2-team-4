'use strict'

//collapsible
const cdesign=document.querySelector(".js-cdesign");
const cfill=document.querySelector(".js-cfill");
const cshare=document.querySelector(".js-cshare");

const contentDesign=document.querySelector(".js-design");
const contentFill=document.querySelector(".js-fill");
const contentShare=document.querySelector(".js-share");

const arrow1

contentFill.classList.add('hidden');
contentShare.classList.add('hidden');

function hiddenDesign(){
contentDesign.classList.add('hidden');
// contentDesign.classList.remove('hidden');
}
function hiddenFill (){
    contentFill.classList.remove('hidden');
}
function hiddenShare (){
    contentShare.classList.remove('hidden');
}

function showDesign (){
    hiddenDesign();
    if (contentDesign.classList.contains('js-design')){
        contentFill.classList.add('hidden');
        contentShare.classList.add('hidden');
        contentDesign.classList.remove('hidden');
    }
}

function showFill (){
    hiddenFill()
    if (contentFill.classList.contains('js-fill')){
        contentDesign.classList.add('hidden');
        contentShare.classList.add('hidden');
    }
}

function showShare (){
    hiddenShare()
    if (contentShare.classList.contains('js-share')){
        contentDesign.classList.add('hidden');
        contentFill.classList.add('hidden');
    }
}

cdesign.addEventListener('click', showDesign);
cfill.addEventListener('click', showFill);
cshare.addEventListener('click', showShare);

