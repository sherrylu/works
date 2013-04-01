// JavaScript Document
	$(document).ready(function(){//文档加载时执行
		$('.box').kxbdSuperMarquee({
				distance:610,//每次滚动的距离，通常与图片的宽度相同
				time:3,//滚动间隔的时间
				navId:'.banav',//导航所在的div标签
				direction:'left'				
			});
		})