// JavaScript Document
$(document).ready(function(){

	$('.login_box').css('display','none');
	$('.login').click(function(){
		$('.login_box').slideDown('slow');
		$('.biglogin').hover(function(){},function(){
			$('.login_box').slideUp('slow');
			})
		})
			$('#post').kxbdSuperMarquee({
				isMarquee:true,
				isEqual:false,
				scrollDelay:10,
				direction:'left'
			});
})

