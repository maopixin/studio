<template>
    <div class="content">
        <Crumbs/>
        <el-container>
            <nav-menu :menu-list='menuList' :activeIndexF='activeIndexF' @selectChange='selectChange'></nav-menu>
            <el-main class="box-shadow">
                <div class="title_box">
                    <h3 class="column_title">
                        <div class="t_l">LINE</div>
                        <div class="t_c">最新动态</div>
                    </h3>
                </div>
                <div>
                    <ul class="dynamic_condition_list">
                        <li>
                            <div class="dynamic_condition_person_info">
                                <div class="head_pic_box">
                                    <a href="">
                                        <img src="http://mmbiz.qpic.cn/mmbiz_jpg/lDBMe6ULicpWqRCozFU6wbHADGonuJqTcNEKt27jgnMl45PQzRT18Bywxp5mMLbAvR7M1Dgfhv1RMWCcQ5NmKibA/640?wx_fmt=jpeg&tp=webp&wxfrom=5" alt=""/>
                                    </a>
                                </div>
                                <div class="name">
                                    <a href="">
                                        name
                                    </a>
                                </div>
                                <div class="resource_name">
                                    <a href="">
                                        发表了文章《爱上大厦的》
                                    </a>
                                </div>
                                <div class="time">06-09 15:31</div>
                            </div>
                            <div class="dynamic_condition_resource">
                                <div class="p">
                                    因技术改变蚊子性别构成 ： 会叮人的雌蚊子是疟疾传播的最大“帮凶”。英国新一期《自然—通讯》杂志10日报告说，科研人员开发出一种转基因技术，可大幅改变蚊子后代的性别构成，让雄性占绝大多数，最终致使蚊群在数代后无法繁衍，从而阻断疟疾的传播途径。 在英国伦敦大学帝国理工学院研究人员与美国、意大利同行合作进行的这项研究中，他们尝试给疟疾的主要传播者冈比亚按蚊注射一种“内切酶”。这种酶具有“切割”染色体脱氧核糖核酸的功能，可附着在Ｘ染色体上并起到破坏作用，使这些蚊子只能繁衍出雄性后代。 初期实验结果显示，用这种基因技术改造过的蚊子所产后代中，约95％是雄性。 进一步研究发现，到第6代时，这些蚊子会因为缺少雌性而无法繁衍。研究人员据此认为，如果将这一方法运用到自然界，可有
                                </div>
                            </div>
                            <div class="btn_box topic">
                                <div class="topic_box">
                                    <div>
                                        <em class="eye"></em>
                                        浏览 110
                                    </div>
                                    <div>
                                        <em class="msg"></em>
                                        回复 110
                                    </div>
                                </div>
                                <div class="resource_box">
                                    <div>
                                        <em class="star"></em>
                                        评分 110
                                    </div>
                                    <div>
                                        <em class="up"></em>
                                        下载 110
                                    </div>
                                    <div>
                                        <em class="msg"></em>
                                        评论 1010
                                    </div>
                                </div>
                                <div class="article_box">
                                    <div>
                                        <em class="eye"></em>
                                        浏览 110
                                    </div>
                                    <div>
                                        <em class="up"></em>
                                        点赞 110
                                    </div>
                                    <div>
                                        <em class="msg"></em>
                                        评论 1010
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li>
                            <div class="dynamic_condition_person_info">
                                <div class="head_pic_box">
                                    <a href="">
                                        <img src="http://mmbiz.qpic.cn/mmbiz_jpg/lDBMe6ULicpWqRCozFU6wbHADGonuJqTcNEKt27jgnMl45PQzRT18Bywxp5mMLbAvR7M1Dgfhv1RMWCcQ5NmKibA/640?wx_fmt=jpeg&tp=webp&wxfrom=5" alt="" />
                                    </a>
                                </div>
                                <div class="name">
                                    <a href="">
                                        name
                                    </a>
                                </div>
                                <div class="resource_name">
                                    <a href="">
                                        发表了文章《爱上大厦的》
                                    </a>
                                </div>
                                <div class="time">06-09 15:30</div>
                            </div>
                            <div class="dynamic_condition_resource">
                                <div class="video">

                                </div>
                            </div>
                            <div class="btn_box resource">
                                <div class="topic_box">
                                    <div>
                                        <em class="eye"></em>
                                        浏览 110
                                    </div>
                                    <div>
                                        <em class="up"></em>
                                        回复 110
                                    </div>
                                </div>
                                <div class="resource_box">
                                    <div>
                                        <em class="star"></em>
                                        评分 110
                                    </div>
                                    <div>
                                        <em class="up"></em>
                                        下载 110
                                    </div>
                                    <div>
                                        <em class="msg"></em>
                                        评论 1010
                                    </div>
                                </div>
                                <div class="article_box">
                                    <div>
                                        <em class="eye"></em>
                                        浏览 110
                                    </div>
                                    <div>
                                        <em class="up"></em>
                                        点赞 110
                                    </div>
                                    <div>
                                        <em class="msg"></em>
                                        评论 1010
                                    </div>
                                </div>

                            </div>
                        </li>
                        <li>
                            <div class="dynamic_condition_person_info">
                                <div class="head_pic_box">
                                    <a href="">
                                        <img src="http://mmbiz.qpic.cn/mmbiz_jpg/lDBMe6ULicpWqRCozFU6wbHADGonuJqTcNEKt27jgnMl45PQzRT18Bywxp5mMLbAvR7M1Dgfhv1RMWCcQ5NmKibA/640?wx_fmt=jpeg&tp=webp&wxfrom=5" alt="">
                                    </a>
                                </div>
                                <div class="name">
                                    <a href="">
                                        name
                                    </a>
                                </div>
                                <div class="resource_name">
                                    <a href="">
                                        发表了文章《爱上大厦的》
                                    </a>
                                </div>
                                <div class="time">06-09 15:31</div>
                            </div>
                            <div class="dynamic_condition_resource">
                                <div class="resource">
                                    <div class="icon-box">
                                        <img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3168244347,156854584&fm=58" alt=""/>
                                    </div>
                                    <div class="resource-info">
                                        <span class="resource-title">济源市奥斯卡都好看啊很少看到</span>
                                        <span class="resource-sys">简介：暗色大赛打算</span>
                                    </div>
                                </div>
                            </div>
                            <div class="btn_box article">
                                <div class="topic_box">
                                    <div>
                                        <em class="eye"></em>
                                        浏览 110
                                    </div>
                                    <div>
                                        <em class="up"></em>
                                        回复 110
                                    </div>
                                </div>
                                <div class="resource_box">
                                    <div>
                                        <em class="star"></em>
                                        评分 110
                                    </div>
                                    <div>
                                        <em class="up"></em>
                                        下载 110
                                    </div>
                                    <div>
                                        <em class="msg"></em>
                                        评论 1010
                                    </div>
                                </div>
                                <div class="article_box">
                                    <div>
                                        <em class="eye"></em>
                                        浏览 110
                                    </div>
                                    <div>
                                        <em class="up"></em>
                                        点赞 110
                                    </div>
                                    <div>
                                        <em class="msg"></em>
                                        评论 1010
                                    </div>
                                </div>

                            </div>
                        </li>
                    </ul>
                    <el-pagination
                        class="page_box"
                        background
                        layout="prev, pager, next"
                        :total="1000">
                    </el-pagination>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Crumbs from "@/components/global/crumbs";
import NavMenu from '@/components/global/NavMenu';
export default {
    components: {
        Crumbs,
        NavMenu
    },
    data(){
        return {
            menuList:[
                {
                    title:'工作室动态',
                    disabled:false
                },
                {
                    title:'成员动态',
                    disabled:false
                },
                {
                    title:'与我相关',
                    disabled:false
                }
            ],
            activeIndexF: '0',

        }
    },
    methods:{
        selectChange(index){
            this.activeIndexF = index;
        }
    }
}
</script>

<style lang='less' scoped>
    .content{
        width: 1140px;
        margin: 0 auto;
    }
    .el-main{
        padding: 0;
        margin-left: 20px;
    }
    .page_box{
        padding: 20px 0;
        text-align: center;
        background-color: #fff;
    }
    .dynamic_condition_list{
        background-color: #fff;
        width: 855px;
        li{
            font-size: 0;
        }
        .dynamic_condition_person_info{
            height: 115px;
            padding: 0 20px;
            border-bottom: 1px solid #ebebeb;
            div{
                display: inline-block;
                vertical-align: middle;
                font-size: 16px;
                line-height: 115px;
            }
            .head_pic_box{
                width: 70px;
                height: 70px;
                border-radius: 35px;
                overflow: hidden;
                margin-right: 30px;
                img{
                    width: 70px;
                    height: 70px;
                    vertical-align: top;
                }
            }
            .name{
                width: 100px;
                color: #666;
                a{
                    color: inherit;
                }
            }
            .resource_name{
                width: 520px;
                a{
                    color: #1b9fe2;
                }
            }
            .time{
                color: #666666;
            }
        }
        .dynamic_condition_resource{
            padding: 20px;
            .p{
                font-size: 14px;
                line-height: 26px;
                text-indent: 2em;
                color: #797979;
            }
            .video{
                height: 330px;
            }
            .resource{
                padding-left: 20px;
                .icon-box{
                    display: inline-block;
                    vertical-align: top;
                    width: 50px;
                    height: 50px;
                    margin-right: 12px;
                    img{
                        width: 50px;
                        height: 50px;
                    }
                }
                .resource-info{
                    display: inline-block;
                    vertical-align: top;
                    font-size: 14px;
                    span{
                        display: block;
                        line-height: 25px;
                        color: #797979;
                    }
                }

            }
        }
        .btn_box{
            text-align: right;
            border-bottom:1px solid #e3e3e3;
            div{
                display: inline-block;
                vertical-align: middle;
                font-size: 12px;
                line-height: 60px;
                width: 155px;
                text-align: left;
                em{
                    width: 20px;
                    height: 20px;
                    background-repeat: no-repeat;
                    background-size: cover;
                    display: inline-block;
                    vertical-align: middle;
                    margin-top: -2px;
                }
                .eye{
                    background-image: url('../../../assets/icon/eye.png');
                }
                .up{
                    background-image: url('../../../assets/icon/up.png');
                }
                .msg{
                    background-image: url('../../../assets/icon/msg.png');
                }
                .star{
                    background-image: url('../../../assets/icon/star.png');
                }
            }
        }
        .topic{
            width: 100%;
            
        }
        .topic_box,.resource_box,.article_box{
            display: none !important;
        }
        .topic{
            .topic_box{
                width: 100%;
                text-align: right;
                display: inline-block !important;
            }
        }
        .resource{
            .resource_box{
                width: 100%;
                text-align: right;
                display: inline-block !important;
            }
        }
        .article{
            .article_box{
                width: 100%;
                text-align: right;
                display: inline-block !important;
            }
        }
    }
</style>
