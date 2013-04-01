// JavaScript Document

<!--js代码部分-->
$(document).ready(function(){
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
	//==============排序按钮=====================
	$('.btn_tj').css('background-position','bottom')
	$('.btn_paixu a').click(function(){
		$('.btn_paixu a').css('background-position','top')
		$(this).css('background-position','bottom')
	})
	//=================翻页的小按钮=================
	$('.page a.a').click(function(){
		$('.page a.a').attr('id','')
		$(this).attr('id','dangqian')
	})
	$('.fitst').click(function(){
		$('.page a.a').attr('id','')
		$('.page a.a:first').attr('id','dangqian')
	})
	$('.last').click(function(){
		$('.page a.a').attr('id','')
		$('.page a.a:last').attr('id','dangqian')
	})
	//==============搜索列表的交互=====================
	$('.sch_list_con2').css('display','none');
	$('#con1_1 a.back').click(function(){
		$('#con1_1').css('display','none');
		$('#con1_3').css('display','none');
		$('#con1_2').css('display','block');
	})
	$('#con1_3').click(function(){
		$('#con1_1').css('display','none');
		$('#con1_3').css('display','none');
		$('#con1_2').css('display','block');
	})
	$('#con1_2 a').click(function(){
		$('#con1_1').css('display','block');
		$('#con1_3').css('display','block');
		$('#con1_2').css('display','none');
	})
	
	$('#con2_1 a.back').click(function(){
		$('#con2_1').css('display','none');
		$('#con2_3').css('display','none');
		$('#con2_2').css('display','block');
	})
	$('#con2_3').click(function(){
		$('#con2_1').css('display','none');
		$('#con2_3').css('display','none');
		$('#con2_2').css('display','block');
	})
	$('#con2_2 a').click(function(){
		$('#con2_1').css('display','block');
		$('#con2_3').css('display','block');
		$('#con2_2').css('display','none');
	})
	
	$('#con3_1 a.back').click(function(){
		$('#con3_1').css('display','none');
		$('#con3_3').css('display','none');
		$('#con3_2').css('display','block');
	})
	$('#con3_3').click(function(){
		$('#con3_1').css('display','none');
		$('#con3_3').css('display','none');
		$('#con3_2').css('display','block');
	})
	$('#con3_2 a').click(function(){
		$('#con3_1').css('display','block');
		$('#con3_3').css('display','block');
		$('#con3_2').css('display','none');
	})
	
	$('#con4_1 a.back').click(function(){
		$('#con4_1').css('display','none');
		$('#con4_3').css('display','none');
		$('#con4_2').css('display','block');
	})
	$('#con4_3').click(function(){
		$('#con4_1').css('display','none');
		$('#con4_3').css('display','none');
		$('#con4_2').css('display','block');
	})
	$('#con4_2 a').click(function(){
		$('#con4_1').css('display','block');
		$('#con4_3').css('display','block');
		$('#con4_2').css('display','none');
	})
	
	$('#con5_1 a.back').click(function(){
		$('#con5_1').css('display','none');
		$('#con5_3').css('display','none');
		$('#con5_2').css('display','block');
	})
	$('#con5_3').click(function(){
		$('#con5_1').css('display','none');
		$('#con5_3').css('display','none');
		$('#con5_2').css('display','block');
	})
	$('#con5_2 a').click(function(){
		$('#con5_1').css('display','block');
		$('#con5_3').css('display','block');
		$('#con5_2').css('display','none');
	})
})//ready(function(){
