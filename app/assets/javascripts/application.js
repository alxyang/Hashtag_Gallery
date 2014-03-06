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
//= require fancybox
//= require_tree .

$(document).ready(function() {

  $( ".image-info" ).hover(
    function() {
      $( this ).addClass( "display-text" );
    }, function() {
      $( this ).removeClass( "display-text" );
    }
  );



$body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }    
});

});

//only loads once set flags here
$(window).load(function(){
var url_flag;
var urlnext;
if(url_flag != 1){
  urlnext = $('.pagination .next_page').attr('href');
}


$(window).scroll(function(){
    if( urlnext && $(window).scrollTop() > $(document).height() - $(window).height() - 20 ) {
      $.ajax({
            url: urlnext,
            type: 'get',
            success: function(response) {
              //alert( $(response).find('.pagination .next_page').attr('href'));
              new_response = $(response).load();
              response_filter = $(response).filter('div.container');  
              //result = $("#container", response);
              console.log(response_filter);
              $(".tagged-images-container-position").append(response_filter);
              urlnext = $(response).find('.pagination .next_page').attr('href');
              url_flag = 1;
              if (response == "") {
                //stop calling endless scroll
              }
            }  
          });
    }
}).scroll();
jQuery(function() {
  $("a.fancybox").fancybox({
            'transitionIn'      : 'fade',
            'transitionOut'     : 'fade',
            'titleFormat'       : function(title) {
                return title;
            },
            helpers : {
              title: {
                type: 'inside',
                position: 'bottom'
              },
                  overlay: {
      locked: false
    }
            }       
  });

});

});


