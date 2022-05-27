<template>
    <div class="article-content layout-content">
        <Row>
            <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="17">
                <div class="layout-left">
                    <div class="about-content" style="padding:0;">
                        <ul class="myblog">
                            <div class="intro">
<!--                                <h5>博客简介 | Blog：</h5>-->
<!--                                <div class="intro_detail">-->
<!--                                    <div>-->
<!--&lt;!&ndash;                                        程&nbsp;序：基于SpringBoot开发的个人博客程序。 <span class="wb_url"><a&ndash;&gt;-->
<!--&lt;!&ndash;                                            href="https://github.com/zjh1022"&ndash;&gt;-->
<!--&lt;!&ndash;                                            target="_blank">GitHub</a></span><br>&ndash;&gt;-->
<!--                                        域&nbsp;名：https://jianghai.yixingyuntech.com &nbsp;&nbsp;创建于2022<span class="wb_url"></span><br>-->
<!--                                        备案号：粤ICP备18120120号-1<br>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <h5>搭建博客目的 | Goal：</h5>-->
<!--                                <div class="intro_detail">-->
<!--                                    <div>-->
<!--                                        &nbsp;&nbsp;&nbsp;&nbsp;计算机、互联网这一类的东西，很多很庞杂，要想全部记住是不可能的事。所以在上大学不久，我就使用为知笔记、有道云或者OneNote这些笔记工具记录自己的笔记，方便自己什么时候遗忘了，再拿起来看看，-->
<!--                                        这是最开始的目的。随着接触互联网的东西越来越多，分享这个词在我的身边越来越多的被提及，CSDN、博客园等等博客网站出现在我的眼前，我开始觉得，自己写的东西，如果能够实实在在的帮助到别人，-->
<!--                                        那才是我记录的意义。所以我一边在自己的小本本上记录，一边开始注册博客网站的账号，开始在网络上写博客。-->
<!--                                        <hr>-->
<!--                                        &nbsp;&nbsp; &nbsp;&nbsp;为什么开始做自己的网站，我记得有一天很晚了，我发现网络上关于某一块的知识很少，并不全面，我从下午一直写到了晚上，废寝忘食，晚上十点左右，我写完了，将博客发出去的时候，心里参数一口气。-->
<!--                                        于是我开始把博客链接分享给别人，以为会对别人有帮助，结果发现404，我那时才知道原来CSDN的博客，竟然是要审核的，与此同时，CSDN网站的广告越来越多。-->
<!--                                        <hr>-->
<!--                                        &nbsp;&nbsp;&nbsp;&nbsp;于是我开始做自己的网站，当时好像才大二吧，我啥都不会，看着很多大神的个人博客网站花里胡哨，心有余而力不足。偶然间发现了HEXO这个静态博客，于是开始各种设计，各种DIY。在使用了快一年后，我发现了-->
<!--                                        它的问题，由于是静态博客，编辑很不方便，需要自己在本地编辑，然后上传，由于是静态服务器托管在GitHub或者Coding，访问速度可想而知。于是有了您现在所看到的。-->
<!--                                        <hr>-->
<!--                                        &nbsp;&nbsp;&nbsp;&nbsp;我不认为个人博客网站需要多漂亮美丽，“内涵”很重要，如果装饰的很花哨，而内容平平一般，我觉得博客分享的意义便不复存在。-->
<!--                                    </div>-->
<!--                                </div>-->
                            </div>
                        </ul>
                        <span class="ly_button"><a href="mailto:jianghai_1022@163.com" target="_blank">联系我</a></span>
                        <p class="ab_dubai">
                        <div class="intro">
                      <br>
                            <h1 align="center">About me</h1><br><br>
                            <div class="intro_detail">
                                <div>
                                  <p>目前就读于山西某高校 大四学生<p><br><br>
                                  <p>更新频度看情况，会记录一些平时遇到的难点以及一些面试题等，偶尔记录一些生活琐事。</p><br>
                                   <p>#2022-03-08</p><br>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </Col>
            <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="7">
                <div class="layout-right">
                    <Recommend/>
                    <Hot style="margin-top:15px;"/>
                    <TagWall style="margin-top:15px;"/>
                    <FriendLinks style="margin-top:15px;"/>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    import Recommend from "../../views/Recommend";
    import TagWall from "../../views/TagWall";
    import Hot from "../../views/Hot";
    import FriendLinks from "../../views/FriendLinks";

    export default {
        name: "AboutContent",
        components: {
            Recommend, TagWall, Hot, FriendLinks
        },
    }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/theme.styl";

    .about-content {
        line-height: 25px;
        margin-bottom: 30px;
        padding: 20px;
    }

    .intro {
        float: left;
        font-size: 14px;
    }

    .intro h5 {
        width: 60%;
        font-weight: bold;
        margin-top: 10px;
        float: left;
    }

    .intro hr {
        border: 0.5px dashed #ccc;
    }

    .intro_detail div {
        margin: 10px 0;
        float: left;
      font-size: 1.2em;
        padding: 10px 20px 10px 20px;
        color: #555555;
        //border-left: 4px solid #c8d3d3;
    }



    .intro_detail .wb_url {
        margin: 0 10px;
    }

    .intro_detail .wb_url a {
        color: #1CA368;
    }

    .intro span {
        color: #ff3366;
    }

    .ab_box h3 {
        margin: 10px 0 10px;
        font-size: 18px;
    }

    .ab_box p {
        color: #666;
        margin-bottom: 5px
    }

    .avatar_pic img {
        width: 100%;
        border-radius: 50%;
    }

    .ab_dubai {
        margin-bottom: 15px;
        display: inline-block;
    }

    .ly_button {
        float: right;
        width: 100px;
        background: #000;
        text-align: center;
        border-radius: 3px;
        line-height: 30px
    }

    .ly_button a {
        color: #FFF
    }

</style>
