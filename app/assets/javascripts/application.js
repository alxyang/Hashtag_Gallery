// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require magnific-popup
//= require_tree .

$(document).ready(function() {
  $( ".image-info" ).hover(
    function() {
      $( this ).addClass( "display-text" );
    }, function() {
      $( this ).removeClass( "display-text" );
    }
  );
  $('.test-popup-link').magnificPopup({
    type:'image',
      callbacks: {
      elementParse: function(item) {
      // Function will fire for each target element
      // "item.el" is a target DOM element (if present)
      // "item.src" is a source that you may modify
      }
    },
    gallery: {
    // options for gallery
    enabled: false
    },
    image: {
    markup: '<div class="mfp-figure">'+
    '<div class="mfp-close"></div>'+
    '<div class="mfp-img"></div>'+
    '<div class="mfp-bottom-bar">'+
      '<div class="mfp-title"></div>'+
      '<div class="mfp-counter"></div>'+
    '</div>'+
    '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

    cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor. 

    //titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
    // Or the function that should return the title. For example:
    //titleSrc: function(item) {
     //  return item.el.context + '<small>by Marsel Van Oosten</small>';
    //},

    verticalFit: true, // Fits image in area vertically

    tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
    },
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below

  zoom: {
    enabled: false, // By default it's false, so don't forget to enable it

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function 

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
    opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  }


  });


});

