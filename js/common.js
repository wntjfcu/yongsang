$(document).ready(function(){
  $('.m-btn').click(function(){
      $('.m-btn').toggleClass('on')
      $('.m-nav').toggleClass('on')
      $('.window-mask').fadeToggle();
  })
  $('.window-mask').click(function(){
    $('.m-btn').toggleClass('on')
    $('.m-nav').toggleClass('on')
    $('.window-mask').fadeToggle();
})
  $('.popup .close.wh button').click(function(){
    $('.popup.video_pop').removeClass('on')
    $('.popup.video_pop').remove();
})


})
//main
setTimeout(function  () {
  $('.wrap.main').addClass('active');
},1000)

setTimeout(function  () {
  $('.video_pop').addClass('on');
},2500)