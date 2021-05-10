'use strict'

//collapsible
const cdesign=document.querySelector(".js-cdesign");
const cfill=document.querySelector(".js-cfill");
const cshare=document.querySelector(".js-cshare");

const contentDesign=document.querySelector(".js-design");
const contentFill=document.querySelector(".js-fill");
const contentShare=document.querySelector(".js-share");

const arrowDesign=document.querySelector(".js-arrowD");
const arrowFill=document.querySelector(".js-arrowF");
const arrowShare=document.querySelector(".js-arrowS");

contentFill.classList.add('hidden');
contentShare.classList.add('hidden');


function hiddenDesign(){
contentDesign.classList.add('hidden');
arrowDesign.classList.add('arrowhidden');
arrowDesign.classList.remove('arrow');

}
function hiddenFill (){
    contentFill.classList.remove('hidden');
    arrowFill.classList.remove('arrowhidden');
    arrowFill.classList.add('arrow');
}
function hiddenShare (){
    contentShare.classList.remove('hidden');
    arrowShare.classList.remove('arrowhidden');
    arrowShare.classList.add('arrow');
}

function showDesign (){
    hiddenDesign();
    if (contentDesign.classList.contains('js-design')){
        contentFill.classList.add('hidden');
        contentShare.classList.add('hidden');
        contentDesign.classList.remove('hidden');
        arrowDesign.classList.add('arrowhidden');

    }
}

function showFill (){
    hiddenFill()
    if (contentFill.classList.contains('js-fill')){
        contentDesign.classList.add('hidden');
        contentShare.classList.add('hidden');
        arrowFill.classList.add('arrowhidden');
    }
}

function showShare (){
    hiddenShare()
    if (contentShare.classList.contains('js-share')){
        contentDesign.classList.add('hidden');
        contentFill.classList.add('hidden');
        arrowShare.classList.add('arrowhidden');
    }
}

cdesign.addEventListener('click', showDesign);
cfill.addEventListener('click', showFill);
cshare.addEventListener('click', showShare);

