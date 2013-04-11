// JavaScript Document
$(document).ready(function(){
	$('input#textfield3').focus(function(){
			if($(this).val()=='这里输入您想搜索的关键字'){
				$(this).val('')
				}
			})
			.blur(function(){
			if($(this).val()==''){
				$(this).val('这里输入您想搜索的关键字')
				}			
			
			})
			$('#marquee3').kxbdSuperMarquee({
				distance:580,
				time:2,
				navId:'#mar3Nav',
				direction:'right'
			});
			$('#marquee4').kxbdSuperMarquee({
				distance:335,
				time:2,
				navId:'#mar3Nav',
				direction:'left'
			});
			$('#marquee6').kxbdSuperMarquee({
				isMarquee:true,
				isEqual:false,
				scrollDelay:20,
				controlBtn:{up:'#goUM',down:'#goDM'},
				direction:'left'
			});
	
	})