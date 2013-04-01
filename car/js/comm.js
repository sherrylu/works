// JavaScript Document
$(document).ready(function(){
/*main页面js效果开始*/
	$(".content_right li").hover(function(){
		$(this).children().children(".content_right dd").slideDown(300);
		},function(){
		$(this).children().children(".content_right dd").hide();
		}
	)
	$('#marquee1').kxbdSuperMarquee({
				distance:960,
				time:4,
				navId:'#mar1Nav',
				direction:'left'
			});
/*main页面js效果结束*/			
			
/*index页面js效果开始*/
	$('#marquee').kxbdSuperMarquee({
				distance:960,
				time:4,
				navId:'#marNav',
				direction:'left'
			});
	$('#marquee2').kxbdSuperMarquee({
				distance:655,
				time:3,
				btnGo:{left:'#goL',right:'#goR'},
				direction:'left'
			});
	$('#marquee3').kxbdSuperMarquee({
				isMarquee:true,
				isEqual:false,
				scrollDelay:40,
				controlBtn:{up:'#goUM',down:'#goDM'},
				direction:'up'
			});
/*index页面js效果结束*/			
});