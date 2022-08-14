var btnOrange=document.querySelectorAll(".btnorange");
var btnFushia=document.querySelectorAll(".btnfushia");
const colorChange=document.querySelector(".type1-2");
var textDynamic=document.querySelector(".select-text");
var imgDynamic=document.querySelector(".imgDynamic");



btnFushia.forEach(btn =>
    btn.addEventListener("click", function(){
        colorChange.classList.remove("button-type-2");
        colorChange.classList.add("button-type-1");
        colorChange.innerHTML="Amincissement";
        textDynamic.innerHTML=btn.innerHTML;
        if(btn.innerHTML=="Universal Contour Wrap"){
            imgDynamic.src="visuels/amincissement-universal-contour-wrap.jpg"
        }
        if(btn.innerHTML=="Bioimpédancemétrie"){
            imgDynamic.src="visuels/amincissement-bioimpedancemetrie.jpg"
        }
        if(btn.innerHTML=="Pressothérapie"){
            imgDynamic.src="visuels/amincissement-pressotherapie.jpg"
        }
        if(btn.innerHTML=="Cryolipolyse"){
            imgDynamic.src="visuels/amincissement-cryolipolyse.jpg"
        }
        if(btn.innerHTML=="Electrostimulation"){
            imgDynamic.src="visuels/amincissement-electrostimulation.jpg"
        }
        if(btn.innerHTML=="US2A"){
            imgDynamic.src="visuels/amincissement-us2a.jpg"
        }
        if(btn.innerHTML=="Duolift"){
            imgDynamic.src="visuels/amincissement-duolift.jpg"
        }
        if(btn.innerHTML=="Cavitalyse"){
            imgDynamic.src="visuels/amincissement-cavitalyse.jpg"
        }
        if(btn.innerHTML=="news Sequential"){
            imgDynamic.src="visuels/amincissement-newssequential.jpg"
        }

    })
)

btnOrange.forEach(btn =>
    btn.addEventListener("click", function(){
        colorChange.classList.remove("button-type-1");
        colorChange.classList.add("button-type-2");
        colorChange.innerHTML="bien être & esthéthique"
        textDynamic.innerHTML=btn.innerHTML;
        if(btn.innerHTML=="d°Cool"){
            imgDynamic.src="visuels/esthetique-dcool.jpg"
        }
        if(btn.innerHTML=="Rolletic"){
            imgDynamic.src="visuels/esthetique-rolletic.jpg"
        }
        if(btn.innerHTML=="Medy-jet"){
            imgDynamic.src="visuels/esthetique-medyjet.jpg"
        }
        if(btn.innerHTML=="K'domo"){
            imgDynamic.src="visuels/esthetique-kdomo.jpg"
        }
        if(btn.innerHTML=="Diamond Microdermabrasion"){
            imgDynamic.src="visuels/esthetique-microdermabrasion.jpg"
        }
        if(btn.innerHTML=="Lumière pulsée"){
            imgDynamic.src="visuels/"
        }
    })
)


