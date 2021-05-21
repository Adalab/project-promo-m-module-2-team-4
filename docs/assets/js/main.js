"use strict";const savedData=JSON.parse(localStorage.getItem("data"));let data={name:"",job:"",photo:"",email:"",phone:"",linkedin:"",github:"",palette:1},card={line:document.querySelector(".rectangle"),title:document.querySelector(".name"),border:document.querySelectorAll(".icon"),icon:document.querySelectorAll(".iconcolor"),job:document.querySelector(".job"),phone:document.querySelector(".js-phone"),email:document.querySelector(".js-email"),linkedin:document.querySelector(".js-linkedin"),github:document.querySelector(".js-github"),image:document.querySelector(".js__profile-preview")};const paletteData=document.querySelector(".design");savedData&&(data=savedData,inputChange());const cdesign=document.querySelector(".js-cdesign"),cfill=document.querySelector(".js-cfill"),cshare=document.querySelector(".js-cshare"),contentDesign=document.querySelector(".js-design"),contentFill=document.querySelector(".js-fill"),contentShare=document.querySelector(".js-share"),arrowDesign=document.querySelector(".js-arrowD"),arrowFill=document.querySelector(".js-arrowF"),arrowShare=document.querySelector(".js-arrowS");function hiddenDesign(){contentDesign.classList.add("hidden")}function hiddenFill(){contentFill.classList.remove("hidden"),arrowFill.classList.remove("arrowhidden"),arrowFill.classList.add("collapsible__icon2")}function hiddenShare(){contentShare.classList.remove("hidden"),arrowShare.classList.remove("arrowhidden"),arrowShare.classList.add("collapsible__icon2")}function showDesign(){hiddenDesign(),contentDesign.classList.contains("js-design")&&(contentFill.classList.add("hidden"),contentShare.classList.add("hidden"),contentDesign.classList.remove("hidden"),arrowFill.classList.add("arrowhidden"),arrowShare.classList.add("arrowhidden"),arrowDesign.classList.remove("arrowhidden"))}function showFill(){hiddenFill(),contentFill.classList.contains("js-fill")&&(contentDesign.classList.add("hidden"),contentShare.classList.add("hidden"),arrowDesign.classList.add("arrowhidden"),arrowShare.classList.add("arrowhidden"))}function showShare(){hiddenShare(),contentShare.classList.contains("js-share")&&(contentDesign.classList.add("hidden"),contentFill.classList.add("hidden"),arrowDesign.classList.add("arrowhidden"),arrowFill.classList.add("arrowhidden"))}console.log(arrowShare),contentFill.classList.add("hidden"),contentShare.classList.add("hidden"),arrowFill.classList.remove("collapsible__icon2"),arrowShare.classList.remove("collapsible__icon2"),arrowFill.classList.add("arrowhidden"),arrowShare.classList.add("arrowhidden"),console.log(arrowShare),cdesign.addEventListener("click",showDesign),cfill.addEventListener("click",showFill),cshare.addEventListener("click",showShare);const palette1=document.querySelector(".palette-1"),palette2=document.querySelector(".palette-2"),palette3=document.querySelector(".palette-3"),label1=document.querySelector(".label1"),label2=document.querySelector(".label2"),label3=document.querySelector(".label3");function labelpalette1(){card.line.classList.add("js-color2"),card.line.classList.remove("js-color5","js-color8"),card.title.classList.add("js-color1"),card.title.classList.remove("js-color4","js-color7"),card.border.forEach(e=>e.classList.add("js-color3")),card.border.forEach(e=>e.classList.remove("js-color6","js-color9")),card.icon.forEach(e=>e.classList.add("js-color1")),card.icon.forEach(e=>e.classList.remove("js-color4","js-color7")),data.palette="1",localStorage.setItem("color",JSON.stringify(data.palette))}function labelpalette2(){card.line.classList.add("js-color5"),card.line.classList.remove("js-color2","js-color8"),card.title.classList.add("js-color4"),card.title.classList.remove("js-color1","js-color7"),card.border.forEach(e=>e.classList.add("js-color6")),card.border.forEach(e=>e.classList.remove("js-color3","js-color9")),card.icon.forEach(e=>e.classList.add("js-color4")),card.icon.forEach(e=>e.classList.remove("js-color1","js-color7")),data.palette="2",localStorage.setItem("color",JSON.stringify(data.palette))}function labelpalette3(){card.line.classList.add("js-color8"),card.line.classList.remove("js-color2","js-color5"),card.title.classList.add("js-color7"),card.title.classList.remove("js-color1","js-color4"),card.border.forEach(e=>e.classList.add("js-color9")),card.border.forEach(e=>e.classList.remove("js-color6","js-color3")),card.icon.forEach(e=>e.classList.add("js-color7")),card.icon.forEach(e=>e.classList.remove("js-color1","js-color4")),data.palette="3",localStorage.setItem("color",JSON.stringify(data.palette))}label2.addEventListener("change",labelpalette2),label1.addEventListener("change",labelpalette1),label3.addEventListener("change",labelpalette3);const getFromLocalStorage=()=>{const e=localStorage.getItem("color"),t=JSON.parse(e);null!==t&&localStorageColor(t)};function localStorageColor(e){"1"===e&&(labelpalette1(),label1.setAttribute("checked","")),"2"===e&&(labelpalette2(),label2.setAttribute("checked","")),"3"===e&&(labelpalette3(),label3.setAttribute("checked",""))}getFromLocalStorage();const form=document.querySelector(".js-form"),reset=document.querySelector(".button_reset");function changeTitle(e){const t=e.target.name,a=e.target.value;data[t]=a}function inputChange(){console.log(data),card.title.innerHTML=""===data.name?"Nombre y Apellidos":data.name,card.job.innerHTML=""===data.job?"Puesto":data.job,card.email.href="mailto: "+data.email,card.phone.href="tel: "+data.phone,card.linkedin.href=""===data.linkedin.href?data.linkedin.setAttribute("disabled",!0):"https://linkedin.com/in/"+data.linkedin,card.github.href="https://github.com/"+data.github}function handlerKey(e){changeTitle(e),inputChange()}form.addEventListener("keyup",handlerKey);let photo="";const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview"),localImage=localStorage.getItem("photo");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,data.photo=fr.result,localStorage.setItem("photo",data.photo)}localImage&&(profileImage.style.backgroundImage=`url(${localImage})`,profilePreview.style.backgroundImage=`url(${localImage})`,data.photo=localImage),fileField.addEventListener("change",getImage);const createCard=document.querySelector(".js-createcard"),responseElement=document.querySelector(".js-response"),btnTwitter=document.querySelector(".js-twitter");function handlerClickCreate(e){e.preventDefault(),""===data.name?(responseElement.innerHTML="Oops! Tienes que rellenar tu nombre!",responseElement.classList.remove("hidden")):""===data.job?(responseElement.innerHTML="Oops! Tienes que rellenar tu puesto de trabajo!",responseElement.classList.remove("hidden")):""===data.photo?(responseElement.innerHTML="Oops! Tienes que subir tu foto!",responseElement.classList.remove("hidden")):""===data.email?(responseElement.innerHTML="Oops! Tienes que rellenar tu email!",responseElement.classList.remove("hidden")):""===data.phone?(responseElement.innerHTML="Oops! Tienes que rellenar tu teléfono!",responseElement.classList.remove("hidden")):""===data.linkedin?(responseElement.innerHTML="Oops! Tienes que rellenar tu usuario de LinkedIn!",responseElement.classList.remove("hidden")):""===data.github?(responseElement.innerHTML="Oops! Tienes que rellenar tu usuario de GitHub!",responseElement.classList.remove("hidden")):(console.log(data),fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",headers:{"content-type":"application/json"},mode:"cors",body:JSON.stringify(data)}).then(e=>e.json()).then(e=>{!1===e.success?(responseElement.innerHTML="<p>Tienes que rellenar algunos datos.</p>",responseElement.classList.remove("hidden")):(responseElement.innerHTML=`\n            <h3 class="cardcreated-js">La tarjeta ha sido creada:</h3>\n            <p><a class="linkcard" target:_blank href="${e.cardURL}">${e.cardURL}</a></p>`,responseElement.classList.remove("hidden"),btnTwitter.classList.remove("hidden"),btnTwitter.setAttribute("href",`https://twitter.com/intent/tweet?text=${responseElement}&url=${e.cardURL}&hashtags=Adalabers,JavaScript,PromoJemison,week7of12`),localStorage.setItem("data",JSON.stringify(data)))}).catch(()=>{responseElement.innerHTML='<p class="error">Hemos apagado el servidor un rato. Inténtalo más tarde.</p>',responseElement.classList.remove("hidden")}))}createCard.addEventListener("click",handlerClickCreate);const resetElement=document.querySelector(".button_reset"),paletteDefault=document.querySelector("#blue");function resetButton(e){e.preventDefault();for(const e of form)e.value="",profileImage.style="",profilePreview.style="",labelpalette1(),paletteDefault.checked=!0,data.palette="1",card.title.innerHTML="Mileva Marić",card.job.innerHTML="Matemática";localStorage.removeItem("data")}resetElement.addEventListener("click",resetButton);