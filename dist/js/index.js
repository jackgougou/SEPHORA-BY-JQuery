// 遵从AMD规范
define(["jquery"],function($){
    // 导航栏
    function top(){
        //最顶端导航的上下轮播图
        var iNow = 0;
        var timer = setInterval(function(){
            iNow++;
            $(".to2").css("top",(-29.5)*(iNow)+"px")
            
            if(iNow == 3){
                iNow = 0
                $(".to2").css("top","0")
            }
        },2000)
        // 导航栏右侧鼠标划入显示菜单
        $("#to31").hover(function(){
            $("#to31 .to311").text( "我的丝芙兰▲");
            $("#to31 div").css("display","block")
        },function(){
            $("#to31 .to311").text( "我的丝芙兰▼")
            $("#to31 div").css("display","none")

        })
        //搜索框右侧的购物袋移入显现
        $(".lo3Box").on("mouseenter",".lo31,.lo32",function(){
            $(".lo32").css("display","block")
            $(".lo31").css("border-bottom","0")
        }).on("mouseleave",".lo31,.lo32",function(){
            $(".lo32").css("display","none")
            $(".lo31").css("border-bottom","1px solid gray")

        })
        // 搜索框文字轮播图
        var a = 0;
        var timer2 = setInterval(function(){
            a++;
            $(".searchBanner").css("top",(-14)*(a)+"px")
            
            if(a == 4){
                a = 0
                $(".searchBanner").css("top","0")
            }
        },2222)
        // 搜索框选中轮播图消失，选出显现
        $(".lo2").on("focus",".lo21 input,.searchBannerBox",function(){
            $(".searchBannerBox").css("display","none")
        })
        $(".lo21 input").blur(function(){
            $(".searchBannerBox").css("display","block");
        })
    }
    function banner(){
        // 动态加载轮播图图片
        $.ajax({
            type : "get",
            url : "../json/index.json",
            success:function(arr){
                // console.log(arr)
                var str1 = arr.banner;
                console.log(str1)
                for(i = str1.length -1 ;i >=0 ;i--){
                    var node = $(`<a href=""><img src="${str1[i].img}"></a>`);
                    node.appendTo($(".bannerBox"));
                }
            },
            error:function(msg){
                alert("banner图片加载失败" + msg)
            }
        })
        // banner图函数
        var iNow = 0;
        var imgLength = $(".bannerBox a").length;
        console.log($(".bannerBox a").size())
        var timer = setInterval(time,2000)
        function time(){
            iNow++;
            if(iNow == imgLength){
                n = 0;
            }
        }
    }
    return {
        top:top,
        banner:banner
    }
})