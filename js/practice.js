$ (function() {
  $(".drawer").click (function() {
    $(".drawer-list").slideToggle();
  });
});

$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 80) {
          pagetop.fadeIn(300);
     } else {
          pagetop.fadeOut(300);
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 300);
     return false;
  });
});


    
    // モーダル
$(function() { 
  $('.course-item a').click(function() {
          var imgSrc = $(this).children().attr('src');
          $('.bigimg').children().attr('src', imgSrc);
          $('.modal').fadeIn();
          $('body,html').css('overflow-y', 'hidden');
          return false
        });
  
  $('.close-btn').click(function() {
          $('.modal').fadeOut();
          $('body,html').css('overflow-y', 'visible');
          return false
        });
  });
