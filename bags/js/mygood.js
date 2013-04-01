// JavaScript Document
$(document).ready(function(){
	$(".jqzoom").jqueryzoom({
						xzoom: 400,		//zooming div default width(default width value is 200)
						yzoom: 400,		//zooming div default width(default height value is 200)
						offset: 20,		//zooming div default offset(default offset value is 10)
						position: "right",  //zooming div position(default position value is "right")
                        preload: 1    , // preload of images :1 by default
						lens:1  // lens over the image   1 by default
		
		
		});

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
				$('.smlpic img:eq(0)').css('border','2px solid #bbd164');
			$('.smlpic img:eq(0)').click(function(){
				$('.smlpic img').css('border','none');
				$(this).css('border','2px solid #bbd164');
				$('.bigpic').attr('src','images/small2.jpg')
				$('.bigpic').attr('jqimg','images/big2.jpg')
				})
			$('.smlpic img:eq(1)').click(function(){
				$('.smlpic img').css('border','none');
				$(this).css('border','2px solid #bbd164');
				$('.bigpic').attr('src','images/small1.jpg');
				$('.bigpic').attr('jqimg','images/big1.jpg');
				})
			$('.smlpic img:eq(2)').click(function(){
				$('.smlpic img').css('border','none');
				$(this).css('border','2px solid #bbd164');
				$('.bigpic').attr('src','images/small3.jpg');
				$('.bigpic').attr('jqimg','images/big3.jpg');
				})
			$('.smlpic img:eq(3)').click(function(){
				$('.smlpic img').css('border','none');
				$(this).css('border','2px solid #bbd164');
				$('.bigpic').attr('src','images/small4.jpg');
				$('.bigpic').attr('jqimg','images/big4.jpg');
				})
})

