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
})
//main
setTimeout(function  () {
  $('.wrap.main').addClass('active');
},1000)