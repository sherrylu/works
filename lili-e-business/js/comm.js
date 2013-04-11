// JavaScript Document
function addFavourite(url,title){
            function findKeys(){
                var isMSIE=/*@cc_on!@*/false;
                var ua=navigator.userAgent.toLowerCase(),isMac=(ua.indexOf("mac")!=-1),isWebkit=(ua.indexOf("webkit")!=-1),str=(isMac?"Command/Cmd":"CTRL");
                if(window.opera&&(!opera.version||(opera.version()<9))){str+=" + T"}
                else{
                    if(ua.indexOf("konqueror")!=-1){str+=" + B"}
                    else{if(window.opera||window.home||isWebkit||isMSIE||isMac){str+=" + D"}else{str+=" + D"}}
                }
                return str
            }
            try{
                if(document.all){window.external.addFavorite(url,title)}
                else{
                    if(window.sidebar){window.sidebar.addPanel(title,url,"")}
                    else{alert("您的浏览器不支持自动添加收藏夹。关闭本对话框后，请您手动使用组合快捷键'"+findKeys()+"'进行添加。")}
                }
            }catch(e){
                alert("您的浏览器不支持自动添加收藏夹。关闭本对话框后，请您手动使用组合快捷键'"+findKeys()+"'进行添加。")
            }
        }//收藏夹代码


$(document).ready(function(){
$('.login').css('display','none');
$('.login_link').click(function(){
	$('.login').slideDown('slow');
})
$('.login_btn').click(function(){
	$('.login').slideUp(100);
})

//登录效果
$('.login_in').click(function(){
	$(this).css('border','1px solid red');
	$('.login_in').hover(function(){
	},function(){
	$(this).css('border','1px solid #666');	
	})
})

	
$(".list").hover(function(){
		$(this).children(".top_nav_list").show(100);
		},function(){
		$(this).children(".top_nav_list").hide(100);
		})//头部导航效果
$(".main_topMent_list").hover(function(){
		$(".hide").slideDown(50);
		},function(){
		$(".hide").slideUp(100);
		})//菜单隐藏部分
		
		
$('.main_top_ment li').hover(function(){
	 $(this).children('.main_top_ment li a').css('color','#FF0000');
	},function(){
	 $(this).children('.main_top_ment li a').css('color','#000');
	})	

		
$('#marquee').kxbdSuperMarquee({
				distance:698,
				time:10,
				navId:'#marNav',
				direction:'left'
			});//banner广告图滚动
			
$('#marquee1').kxbdSuperMarquee({
				isAuto:false,
				distance:698,
				btnGo:{left:'#goL1',right:'#goR1'},
				direction:'left'
			});


//小图滚动

$(".new_con ul li:eq(0)").click(function(){
		$(".show_con").css("display","none");
		$(".show_con:eq(0)").css('display','block');
		$(".new_con ul li").removeClass("active");
		$(".new_con ul li:eq(0)").addClass("active");
		})
		$(".new_con ul li:eq(1)").click(function(){
		$(".show_con").css("display","none");
		$(".show_con:eq(1)").css('display','block');
		$(".new_con ul li").removeClass("active");
		$(".new_con ul li:eq(1)").addClass("active");
		})
		$(".new_con ul li:eq(2)").click(function(){
		$(".show_con").css("display","none");
		$(".show_con:eq(2)").css('display','block');
		$(".new_con ul li").removeClass("active");
		$(".new_con ul li:eq(2)").addClass("active");
		})
		$(".new_con ul li:eq(3)").click(function(){
		$(".show_con").css("display","none");
		$(".show_con:eq(3)").css('display','block');
		$(".new_con ul li").removeClass("active");
		$(".new_con ul li:eq(3)").addClass("active");
		})	//公告充值切换卡

$(".content_hover:eq(0)").css({"background":"#CCC","color":"#000"});		
$(".content_hover").hover(function(){
				$(".content_list").css("display","none");
				$(this).next().css("display","block");
				},function(){
			})
$(".content_hover:eq(0)").hover(function(){
				$(".content_hover:eq(0)").css({"background":"#CCC","color":"#000"});
				$(".content_hover:eq(1),.content_hover:eq(2),.content_hover:eq(3)").css({"background":"#F60","color":"#fff"});
				},function(){
				$(".content_hover:eq(1),.content_hover:eq(2),.content_hover:eq(3)").css({"background":"#F60","color":"#fff"});
			})
$(".content_hover:eq(1)").hover(function(){
				$(".content_hover:eq(1)").css({"background":"#CCC","color":"#000"});
				$(".content_hover:eq(0),.content_hover:eq(2),.content_hover:eq(3)").css({"background":"#F60","color":"#fff"});
				},function(){
				$(".content_hover:eq(0),.content_hover:eq(2),.content_hover:eq(3)").css({"background":"#F60","color":"#fff"});
			})
$(".content_hover:eq(2)").hover(function(){
				$(".content_hover:eq(2)").css({"background":"#CCC","color":"#000"});
				$(".content_hover:eq(0),.content_hover:eq(1),.content_hover:eq(3)").css({"background":"#F60","color":"#fff"});
			    },function(){
				$(".content_hover:eq(0),.content_hover:eq(1),.content_hover:eq(3)").css({"background":"#F60","color":"#fff"});
			})
$(".content_hover:eq(3)").hover(function(){
				$(".content_hover:eq(3)").css({"background":"#CCC","color":"#000"});
				$(".content_hover:eq(0),.content_hover:eq(1),.content_hover:eq(2)").css({"background":"#F60","color":"#fff"});
			    },function(){
				$(".content_hover:eq(0),.content_hover:eq(1),.content_hover:eq(2)").css({"background":"#F60","color":"#fff"});
			})//今日特闪切换卡
	
		
$(".box ul li").hover(function(){
		$(".box ul li").css({"border":"1px solid #fff","border-top":"none"});
		$(this).css({"border":"1px solid #F60","border-top":"none"});
		},function(){
		$(".box ul li").css({"border":"1px solid #fff","border-top":"none"});
		$(this).css({"border":"1px solid #fff","border-top":"none"});
	})	//box里面li边框效果	
	

 // 滚动窗口来判断按钮显示或隐藏
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.link_top').fadeIn(100);
        } else {
            $('.link_top').fadeOut(100);
        }
    });
 
    // jQuery实现动画滚动
    $('.link_top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
    })
})


