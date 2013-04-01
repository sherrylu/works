// JavaScript Document
$(document).ready(function(){
	$('.login_box').css('display','none');
	$('.login').click(function(){
		$('.login_box').slideDown('slow');
		$('.biglogin').hover(function(){},function(){
			$('.login_box').slideUp('slow');
			})
		})
	$('#banner').kxbdSuperMarquee({
				distance:820,//每次滚动的距离，通常与图片的宽度相同
				time:4,
				navId:'#mar3Nav',//滚动间隔的时间
				direction:'left'//滚动的方向
			});

})


