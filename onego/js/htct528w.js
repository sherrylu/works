// JavaScript Document
$(document).ready(function(){
$(".jqzoom").jqueryzoom({
				xzoom: 525, //zooming div default width(default width value is 200)
				yzoom: 318, //zooming div default width(default height value is 200)
				offset: 10, //zooming div default offset(default offset value is 10)
				position: "right", //zooming div position(default position value is "right")
 				preload:1,
				lens:1
			});

$(".gk_xiao:eq(0)").click(function(){
	$("img.cur").attr("src","images/xq_mid_1.jpg");
	$("img.cur").attr("jqimg","images/xq_big_1.jpg");
});
$(".gk_xiao:eq(1)").click(function(){
	$("img.cur").attr("src","images/xq_mid_2.jpg");
	$("img.cur").attr("jqimg","images/xq_big_2.jpg");
});
$(".gk_xiao:eq(2)").click(function(){
	$("img.cur").attr("src","images/xq_mid_3.jpg");
	$("img.cur").attr("jqimg","images/xq_big_3.jpg");
});
$(".gk_xiao:eq(3)").click(function(){
	$("img.cur").attr("src","images/xq_mid_4.jpg");
	$("img.cur").attr("jqimg","images/xq_big_4.jpg");
});
$('.canshu').css('display','none');
$('.miaoshu').css('display','block');
$('.spms').css({'background':'#0376ff','color':'#FFF'});
$('.spms').click(function(){
	$('.canshu').css('display','none');
	$('.miaoshu').css('display','block');
	$(this).css({'background':'#0376ff','color':'#FFF'});
	$('.jtcs').css({'background':'#dfedfe','color':'black'});
		return false;
		});
$('.jtcs').click(function(){
	$('.miaoshu').css('display','none');
	$('.canshu').css('display','block');
	$(this).css({'background':'#0376ff',"color":"#FFF"});
	$('.spms').css({'background':'#dfedfe','color':'black'});
		return false;
		})
		


});