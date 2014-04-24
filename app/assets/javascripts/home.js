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

// jQuery(function() {
//   $("a.fancybox").fancybox({
//             'transitionIn'      : 'fade',
//             'transitionOut'     : 'fade',
//             'titleFormat'       : function(title) {
//                 return title;
//             },
//               beforeShow: function(){
//       $("body").css({'overflow-y':'hidden'});
//     },
//     afterClose: function(){
//       $("body").css({'overflow-y':'visible'});
//     },
//             helpers : {
//               title: {
//                 type: 'inside',
//                 position: 'bottom'
//               },
//                   overlay: {
//       locked: false
//     }
//             },

//   });

// });

});


