$(document).ready(function(){
  $('.category_item').click(function(){
    var category = $(this).attr('id');
    if(category == "all"){
      $('.project').addClass('hide');
      setTimeout(function(){
        $('.project').removeClass('hide');
      }, 500);
    } else {
      $('.project').addClass('hide');
      setTimeout(function(){
        $('.' + category).removeClass('hide');
      }, 500);
    }
  });
});
