$(document).ready(function(){
	
	// 	$('.modal').addClass("show")
	// 	$('.modal').append(`<div class="item_box">
	// 												<iframe src="https://www.youtube.com/embed/UEV9Hg01ZHA" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="">
	// 												</iframe>
	// 											</div>`
	// 											)
	// $('.modal .dim').click(function(){
	// 	$('.modal .item_box').remove()
	// 	$('.modal').removeClass('show')
	// })


	var getdirection = function( ev, obj ){
		var w = $(obj).children('.main_num ul li .hov').width(),
        h = $(obj).children('.main_num ul li .hov').height(),
        x = (ev.pageX - $(obj).offset().left - (w / 2) * (w > h ? (h / w) : 1)),
        y = (ev.pageY - $(obj).offset().top - (h / 2) * (h > w ? (w / h) : 1)),
        dir = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
		return dir;
	}

    var eff_addClass = function( ev, obj, state ){
		var direction = getdirection( ev, obj ),
			class_dir = "";
		$(obj).removeClass('in-top in-left in-right in-bottom out-top out-right out-bottom out-left');
		switch(direction){
			/*Top*/
			case 0: class_dir = '-top'; break;
			/*Right*/
			case 1: class_dir = '-right'; break;
			/*Bottom*/
			case 2: class_dir = '-bottom'; break;
			/*Left*/
			case 3: class_dir = '-left'; break;
		}
		$(obj).addClass( state + class_dir );
	}

    $('.main_num ul li a').each(function(){
		var $this = $(this);
		setTimeout(function  () {
			$this.on('mouseenter',function( ev ){
				$(this).removeClass('out');
				eff_addClass( ev, this, 'in');
			})
			.on(' mouseleave',function( ev ){
				 $(this).addClass('out');
			});
		},50)
	});

	$('.main_num ul li').click(function(){
      $('.modal').addClass("show")
      $('.modal').append(`<div class="item_box">
                            <iframe src="https://www.youtube.com/embed/${$(this).data("video")}?rel=0&playsinline=1&autoplay=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="">
                            </iframe>
                          </div>`
                          )
    })
    $('.modal .dim').click(function(){
      $('.modal .item_box').remove()
      $('.modal').removeClass('show')
    })
   //  $('.list img').mouseover(function(){
   //    $(this).attr("src",$(this).data("animated"))
   //  })
   //  $('.list img').mouseout(function(){
   //    $(this).attr("src",$(this).data("static"))
   //  })
  
})