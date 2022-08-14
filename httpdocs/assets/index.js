$(function(){
    var shrinkHeader = 180;
    if ($(window).width() < 768) {
      var shrinkHeader = 350;
    }
    $(window).scroll(function() {
      var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
       $('.header').addClass('shrink');
       
     }
     else {
      $('.header').removeClass('shrink');
    }
  });
    function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }
  });
  
  // https://github.com/vmitsaras/js-offcanvas
  $( function(){
    
    $( document ).bind( "beforecreate.offcanvas", function( e ){
      var dataOffcanvas = $( e.target ).data('offcanvas-component');
      console.log(dataOffcanvas);
      dataOffcanvas.onInit =  function() {
       console.log(this);
     };
   } );
    
    $( document ).bind( "create.offcanvas", function( e ){
      var dataOffcanvas = $( e.target ).data('offcanvas-component');
      console.log(dataOffcanvas);
      dataOffcanvas.onOpen =  function() {
        console.log('Callback onOpen');
      };
      dataOffcanvas.onClose =  function() {
        console.log('Callback onClose');
      };
    });
  
    $( document ).bind( "clicked.offcanvas-trigger clicked.offcanvas", function( e ){
      var dataBtnText = $( e.target ).text();
      console.log(e.type + '.' + e.namespace + ': ' + dataBtnText);
    } );
  
    $( document ).bind( "open.offcanvas", function( e ){
      var dataOffcanvasID = $( e.target ).attr('id');
      console.log(e.type + ': #' + dataOffcanvasID);
    } );
  
    $( document ).bind( "resizing.offcanvas", function( e ){
      var dataOffcanvasID = $( e.target ).attr('id');
      console.log(e.type + ': #' + dataOffcanvasID);
    } );
  
    $( document ).bind( "close.offcanvas", function( e ){
      var dataOffcanvasID = $( e.target ).attr('id');
      console.log(e.type + ': #' + dataOffcanvasID);
    } );
  
    $( '.js-open' ).bind( "create.offcanvas", function( e ){
      var dataOffcanvas = $(this).data('offcanvas-component');
      setTimeout(function(){
        //dataOffcanvas.open();
      }, 200);
    } );
    
    $( document ).bind( "beforecreate.offcanvas", function( e ){
      var $offcanvas = $( e.target ),
      api = $offcanvas.data('offcanvas-component');
      
      
  
      function onFocusIn() {
        console.log('onFocusIn');
        api.options.resize = false;
        console.log(api.options.resize);
        $(window).off('resize.offcanvas orientationchange.offcanvas');
      }
      
      function onFocusOut() {
        console.log('onFocusOut');
        api.options.resize = true;
        console.log(api.options.resize);
        $(window).on('resize.offcanvas orientationchange.offcanvas');
        api.resize();
      }
  
      $offcanvas.on('focusin', 'input,textarea', onFocusIn)
      .on('focusout', 'input,textarea', onFocusOut);
    });  
    
    
      // Trigger Enhance
      $( document ).trigger( "enhance" );
    });
  
  function offcanvas() {
    $('body').removeClass('has-offcanvas--visible');
    $('body').removeClass('has-offcanvas--right');
    $('body').removeClass('has-offcanvas--overlay');
    $('aside').removeClass('is-open');
    $('aside').addClass('is-closed');
    $('.c-offcanvas-bg').removeClass('is-open');
    $('.c-offcanvas-bg').addClass('is-closed');
  }



  var btnOrange=document.querySelectorAll(".btnorange");
var btnFushia=document.querySelectorAll(".btnfushia");
//const colorChange=document.querySelector(".type1-2");
//var textDynamic=document.querySelector(".select-text");
var imgDynamic=document.querySelector(".imgDynamic");


btnFushia.forEach(btn =>
    btn.addEventListener("click", function(){
      window.scrollTo(0,1937)
        colorChange.classList.remove("button-type-2");
        colorChange.classList.add("button-type-1");
        colorChange.innerHTML="Amincissement";
       // textDynamic.innerHTML=btn.innerHTML;
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
        colorChange.innerHTML="bien être & esthéthique";
        window.scrollTo(0,1937)
        //textDynamic.innerHTML=btn.innerHTML;
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

const btnPlus = document.querySelector('.savoirplus');
btnPlus.addEventListener('click', function(){
  window.scrollTo(0,3448)
})

AOS.init();

// Active slide click bouton

let AllSlides = document.querySelectorAll(".carousel-item");
let AllBtn = document.querySelectorAll(".linkSlide");

for( var i = 0 ; i < AllBtn.length ; i++) {
  AllBtn[i].addEventListener("click" , function()
  {
    var target = this.getAttribute("href").substr(1);
    for ( var j = 0 ; j < AllSlides.length ; j++ ){
      AllSlides[j].classList.remove("active");
    }
    document.getElementById(target).classList.add("active");
  })
}

