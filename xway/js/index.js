// JavaScript Document

<!--js代码部分-->
$(document).ready(function(){
	//=========头部关闭收藏的按钮===============
	$('.yes,.no,.close').click(function(){
		$('#top').css('display','none');
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
	//===============右边排行榜选项卡===============
	$('#sidebar ul li span').click(function(){
		$('#sidebar ul li span').removeClass('dqxz_rq');
		$(this).addClass('dqxz_rq');
		$('#sidebar ul li div').css('display','none');
		$(this).next('div').css('display','block');
	})
	//==============左边分类赛选菜单的展开关闭===============
	//全部展开和全部关闭按钮
	$('.menu_btn .btn_open').click(function(){
		$('#menu form').slideDown("show")
		$('#menu a span').html('-')
	})
	$('.menu_btn .btn_close').click(function(){
		$('#menu form').slideUp("show")
		$('#menu a span').html('+')
	})
	//点击伸展关闭下拉菜单的效果
	$('.open').toggle(function(){
			$(this).next('form').slideDown('show')
			$(this).find('span').html('-')
		},function(){
			$(this).next('form').slideUp('show')
			$(this).find('span').html('+')
	})
	//=========推荐内容1选项卡切换===============
	$('#content_1 .list_ul li span').click(function(){
		$('#content_1 .list_ul li span').removeClass('dqxz');
		$(this).addClass('dqxz');
		$('#content_1 .list_ul li .con_1').css('display','none');
		$(this).next('.con_1').css('display','block');
	})
	//=========推荐内容2选项卡切换===============
	$('#content_2 .list_ul li span').click(function(){
		$('#content_2 .list_ul li span').removeClass('dqxz');
		$(this).addClass('dqxz');
		$('.con_1_l').css('display','none');
		$('.con_1_l').css('display','block');
	})
})