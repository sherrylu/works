// JavaScript Document

<!--js代码部分-->
$(document).ready(function(){
	//=========头部关闭收藏的按钮===============
	$('.close').click(function(){
		$('.warm').css('display','none');
	})
	//==========地址选项卡点选弹出，离开消失===============
	$('.difang a').click(function(){
		$('#dizhi').slideToggle('show')
	})
	$('#dizhi').hover(function(){},function(){
		$('#dizhi').slideUp('show')
	})
	$('#dizhi a').click(function(){
		$('.difang h3').html($(this).html())//选中地址换文本t
		$('#dizhi').slideUp('show')
	})
	//=========搜索条选项卡切换===============
	$('.search li p:eq(0)').css('display','block');
	$('.search li a').click(function(){
		$('.sea_shuru').attr('value','')
		$('.search li a').removeClass('dqxz_xxk');
		$(this).addClass('dqxz_xxk');
		$('.search li p').css('display','none');
		$(this).next().css('display','block');
	})
	$('.sea_shuru,.search li p').click(function(){
		$('.search li p').css('display','none');
		$('.sea_shuru').attr('value','').focus()//焦点定位到这里;
	})

	//=========推荐内容1选项卡切换===============
	$('#content_1 .list_ul li .con_1').css('display','none');
	$('.con_1:eq(0)').css('display','block');
	$('#content_1 .list_ul li span').click(function(){
		$('#content_1 .list_ul li span').removeClass('dqxz');
		$(this).addClass('dqxz');
		$('#content_1 .list_ul li .con_1').css('display','none');
		$(this).next('.con_1').css('display','block');
	})
})