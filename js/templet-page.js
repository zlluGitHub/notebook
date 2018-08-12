
$(document).ready(function() {
//模板替换
var contenttemplet=$('body>div').clone();
var links = `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> 
<link rel="stylesheet" href="css/public.css">`;
var frame = `<header>
                <div class="warp">
                <div class="inner">
                    <a href="https://github.com/zlluGitHub">
                        <i class="fa fa-github fa-lg"></i> zlluGitHub
                    </a>
                    <nav>
                        <a href="javascript:void(0);">
                            <i class="fa fa-home fa-fw"></i>首页</a>
                        <a href="http://www.zhenglinglu.cn/index.html">
                            <i class="fa fa-send-o fa-fw"></i>博客</a>
                        <a href="https://github.com/zlluGitHub">
                            <i class="fa fa-github fa-fw"></i>GitHub</a>
                        <a href="javascript:void(0);">
                            <i class="fa fa-search fa-fw"></i>搜索</a>
                    </nav>
                </div>
                </div>
                <div class="warp-bottom">
                <div class="navigation__inner">
                    <a href="https://github.com/zlluGitHub/StudyRecord">
                        <i class="fa fa-book fa-fw"></i>知识笔记</a>
                    <a href="https://zllugithub.github.io/E-business-Mozan/">
                        <i class="fa fa-share-alt fa-fw"></i>share</a>
                    <a href="https://github.com/zlluGitHub/StudyRecord/issues">
                        <i class="fa fa-question-circle-o fa-fw"></i>问答</a>
                    <a href="https://github.com/zlluGitHub/MyFunctionLibrary">
                        <i class="fa fa-gear fa-fw"></i>插件</a>
                    <a href="javascript:void(0);">
                        <i class="fa fa-id-card fa-fw"></i>ABOUTME</a>
                    </a>
                </div>
                </div>
            </header>
            <section>
                <div class="body-box">
                <div class="sidebar">
                    <!-- 导航部分 -->
                    <div class="navigation">
                        <ul class="sidebar-fixed">
                            <li class="catalog">
                                <a href="">目录</a>
                            </li>
                            <li class="bigtitle">标题</li>
                            <li class="dashed"></li>
                            <!-- 目录内容 -->
                        </ul>
                    </div>
                </div>
                <div class="content">
                </div>
                </div>
            </section>`;
//重构页面
$('head').append(links);
$('body').html(frame);
$('.content').html(contenttemplet);

});

