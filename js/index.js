$(document).ready(function() {
    var marknum=1;
   　$('.bigtitle').text('（'+$('h1').text()+'）'); 
    //创建目录并插入
    $(".content").find("h3").each(function(index, ele) {
        marknum++;
        //为指定文本内ａ元素添加ｉｄ
        $(ele).attr("id", "h" + marknum);  
        // 创建一级ａ元素
        var creacta = $('<a href="javascript:(0);" index="h'+marknum+'"><i class="fa fa-chevron-right fa-fw"></i>' + ele.innerText + "</a>");
        //添加绑定事件
        creacta.click(function() {
            var indexval= this.getAttribute('index');      
            $("html, body").animate({
                scrollTop: $("#" + indexval).offset().top
            }, { duration: 500, easing: "swing" });
            return false;
        });
        // 将一级目录插入到指定demo中
        var oneele = $("<li>").append(creacta);
        $(".sidebar-fixed").append(oneele);

        //二级菜单
        var twoele =  oneele.append("<ul>");   
        $(ele).parent().find("h4").each(function(index, ele) {
            marknum++;
            $(ele).attr("id", "h" + marknum);
            // 创建二级ａ元素
            var creacta = $('<a href="javascript:(0);" index="h'+marknum+'"><i class="fa fa-chevron-right fa-fw"></i>' +ele.innerText +"</a>");
            //添加绑定事件
            creacta.click(function() {
                var indexval= this.getAttribute('index');  console.log(indexval);
                $("html, body").animate({scrollTop: $("#" + indexval).offset().top}, { duration: 500, easing:"swing" });
                return false;
            });
            // 将二级目录插入到指定demo中
            twoele.find('ul').append($("<li>").append(creacta));
        });
    });
//初始化目录
var allicon =$('.sidebar-fixed i');
for (var i = 0; i < allicon.length; i++) {
   
    if ( allicon.eq(i).parent('a').next().text() !== '') {
        allicon.eq(i).attr('class','fa fa-chevron-down fa-fw');
    }else{
        allicon.eq(i).attr('class','fa fa-chevron-right fa-fw');
        allicon.eq(i).addClass('active');
    }
   
}

//点击后字体颜色

$('.sidebar-fixed li a').click(function(){
    var lia = $('.sidebar-fixed li a');
    for (var i = 0; i < lia.length; i++) {
        lia.eq(i).removeClass('active');      
    }
    $(this).addClass('active');
});

    //改变箭头方向
$('.sidebar-fixed i').click(function(){
    
    if ( $(this).parent('a').next().text() !== '') {
        $(this).parent('a').next().toggle('fast',function(){
                
            if ($(this).css('display') === 'none') {
                $(this).prev().find('i').attr('class','fa fa-chevron-right fa-fw');
            }else{
                $(this).prev().find('i').attr('class','fa fa-chevron-down fa-fw');
            }
        });
    }else{
        $(this).addClass('active');
    }
    // console.log($(this).parent('a').next().css('display'));
  
    
})
    
    // 滚动条监听
    $(window).scroll(function() {
        //获取当前滚动条高度

        var highttop = $(document).scrollTop();

        //用于调试 弹出当前滚动条高度

        //判断如果滚动条大于90则弹出 "ok"
        // console.log(highttop);
        if (highttop > $('header').outerHeight()) {
            $(".sidebar-fixed").css({ position: "fixed", top: "0px" });
        } else {
            $(".sidebar-fixed").css({ position: "", top: "none" });
        }
    });
});