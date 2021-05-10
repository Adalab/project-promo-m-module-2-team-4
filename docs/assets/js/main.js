"use strict";const cdesign=document.querySelector(".js-cdesign"),cfill=document.querySelector(".js-cfill"),cshare=document.querySelector(".js-cshare"),contentDesign=document.querySelector(".js-design"),contentFill=document.querySelector(".js-fill"),contentShare=document.querySelector(".js-share"),arrowDesign=document.querySelector(".js-arrowD"),arrowFill=document.querySelector(".js-arrowF"),arrowShare=document.querySelector(".js-arrowS");function hiddenDesign(){contentDesign.classList.add("hidden")}function hiddenFill(){contentFill.classList.remove("hidden"),arrowFill.classList.remove("arrowhidden"),arrowFill.classList.add("collapsible__icon2")}function hiddenShare(){contentShare.classList.remove("hidden"),arrowShare.classList.remove("arrowhidden"),arrowShare.classList.add("collapsible__icon2")}function showDesign(){hiddenDesign(),contentDesign.classList.contains("js-design")&&(contentFill.classList.add("hidden"),contentShare.classList.add("hidden"),contentDesign.classList.remove("hidden"),arrowFill.classList.add("arrowhidden"),arrowShare.classList.add("arrowhidden"),arrowDesign.classList.remove("arrowhidden"))}function showFill(){hiddenFill(),contentFill.classList.contains("js-fill")&&(contentDesign.classList.add("hidden"),contentShare.classList.add("hidden"),arrowDesign.classList.add("arrowhidden"),arrowShare.classList.add("arrowhidden"))}function showShare(){hiddenShare(),contentShare.classList.contains("js-share")&&(contentDesign.classList.add("hidden"),contentFill.classList.add("hidden"),arrowDesign.classList.add("arrowhidden"),arrowFill.classList.add("arrowhidden"))}contentFill.classList.add("hidden"),contentShare.classList.add("hidden"),arrowFill.classList.remove("collapsible__icon2"),arrowShare.classList.remove("collapsible__icon2"),arrowFill.classList.add("arrowhidden"),arrowShare.classList.add("arrowhidden"),console.log(arrowShare),cdesign.addEventListener("click",showDesign),cfill.addEventListener("click",showFill),cshare.addEventListener("click",showShare);const palette1=document.querySelector(".palette-1"),palette2=document.querySelector(".palette-2"),palette3=document.querySelector(".palette-3"),label1=document.querySelector(".label1"),label2=document.querySelector(".label2"),label3=document.querySelector(".label3");function labelPallete1(){card.line.classList.add("js-color2"),card.line.classList.remove("js-color5","js-color8"),card.title.classList.add("js-color1"),card.title.classList.remove("js-color4","js-color7"),card.border.classList.add("js-color3"),card.border.classList.remove("js-color6","js-color9"),card.icon.classList.add("js-color1"),card.icon.classList.remove("js-color4","js-color7"),FormData.pallete="1"}function labelPallete2(){card.line.classList.add("js-color5"),card.line.classList.remove("js-color2","js-color8"),card.title.classList.add("js-color4"),card.title.classList.remove("js-color1","js-color7"),card.border.classList.add("js-color6"),card.border.classList.remove("js-color3","js-color9"),card.icon.classList.add("js-color4"),card.icon.classList.remove("js-color1","js-color7"),FormData.pallete="2"}function labelPallete3(){card.line.classList.add("js-color8"),card.line.classList.remove("js-color2","js-color5"),card.title.classList.add("js-color7"),card.title.classList.remove("js-color1","js-color4"),card.border.classList.add("js-color9"),card.border.classList.remove("js-color3","js-color6"),card.icon.classList.add("js-color4"),card.icon.classList.remove("js-color1","js-color7"),FormData.pallete="3"}label2.addEventListener("change",labelPallete2),label1.addEventListener("change",labelPallete1),label3.addEventListener("change",labelPallete3);const form=document.querySelector(".js-form"),card={line:document.querySelector(".rectangle"),title:document.querySelector(".name"),border:document.querySelector(".icon"),icon:document.querySelector(".iconcolor"),job:document.querySelector(".job")},data={fullName:document.querySelector("#name"),position:document.querySelector("#position"),image:document.querySelector(".label"),email:document.querySelector("#email"),phone:document.querySelector("#telephone"),linkedin:document.querySelector("#linkedIn"),github:document.querySelector("#github")};function changeTitle(){const e=data.fullName.value,o=data.position.value;card.title.innerHTML=e,card.job.innerHTML=o}form.addEventListener("keyup",changeTitle),console.log(">> Ready :)");