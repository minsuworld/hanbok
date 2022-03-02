$(function () {
  $('.gnb').append(`
  <div class="icon_set2">
  <a href="#">아이콘1</a>
  <a href="#">아이콘2</a>
  <a href="#">아이콘3</a>
  </div>
  `)
  $('.ham').click(function(){
    $('.gnb').toggleClass('on')
  })
  $('.dep1>li').click(function(){
    $('.dep1>li').removeClass('on')
    // $('.dep1>li>.dep2').slideUp()
    $(this).addClass('on')
    // $(this).children('.dep2').slideDown()
  })
})

$(function () {
  $('.sec2_list>li').click(function () {
    $('.sec2_list>li').removeClass('on')
    $(this).addClass('on')
  })
})

$(function () {
  $('.sec4_con>li').click(function () {
    if ($(this).attr('class') != 'on') {
      $('.sec4_con>li').children('.sec4_con>li>p').slideUp()
      $(this).children('.sec4_con>li>p').slideToggle()
      $('.sec4_con>li').removeClass('on')
      $(this).addClass('on')
    } else {
      $(this).children('.sec4_con>li>p').slideToggle()
      $(this).removeClass('on')
    }
  })
})

$(function(){
  AOS.init({
  });
});