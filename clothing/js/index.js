// JavaScript Document


$(document).ready(function(){
	$('#gonggao').kxbdSuperMarquee({
				isEqual:false,
				distance:30,
				time:3,
				//btnGo:{up:'#goU',down:'#goD'},
				direction:'up'
			});
	$('.nav li div').css('display','none');
	$('.nav li #btn').hover(function(){
		$('.nav li div').css('display','none');
		$(this).next().css('display','block');
		
		},function(){
		
		})
	
})

	