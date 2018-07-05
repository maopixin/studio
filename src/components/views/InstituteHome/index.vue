<template>
    <div style="padding-top:20px;">
        <el-row :gutter='20' class="rankings">
            <el-col :span='16'>
                <div class="box-shadow">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">工作室排行榜</div>
                        </h3>
                    </div>
                    <div>
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane
                                v-for="(item,index) in rankListArr"
                                :key='index'
                                :label="item.label" 
                                :name="index+''"
                            >
                                <rank-list :label='item.label'></rank-list>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </el-col>
            <el-col :span='8'>
                <div class="box-shadow">
                    <div class="title_box">
                        <h3 class="column_title">
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter='20' class="news">
            <el-col :span='16'>
                <div class="box-shadow">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">工作室资讯</div>
                        </h3>
                    </div>
                    <el-row :gutter='10' class="carousel">
                        <el-col :span='12'>
                            <div>
                                <el-carousel trigger="click" height="245px" indicator-position='none'>
                                    <el-carousel-item v-for="item in 4" :key="item">
                                        <img src="http://yun.zjer.cn/uploads1/400x400/studio/album/2018/0615/236/5b22f536b2c44..jpg" alt=""/>
                                        <span class="person-num">已报名：0人</span>
                                        <span class="news-title">张金良名师工作室,从过程张金良名师工作室,从过程</span>
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                        </el-col>
                        <el-col :span='12'>
                            <div>
                                <news-list></news-list>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
            <el-col :span='8'>
                <div class="box-shadow">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">媒体宣传</div>
                        </h3>
                    </div>
                    <div style="padding: 28px 20px 6px;background-color:#ffffff;">
                        <news-list></news-list>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="characteristic-show box-shadow">
            <div class="title_box">
                <h3 class="column_title">
                    
                    <div class="t_l">LINE</div>
                    <div class="t_c">特色展示</div>
                </h3>
            </div>
            <div class="characteristic-box">
                <el-row :gutter='20' class="characteristic-list">
                    <el-col 
                        :span='6'
                        v-for="(item,index) in 4"
                        :key='index'
                    >
                        <div class="box-shadow">
                            <img src="http://yun.zjer.cn/uploads1/400x400/studio/album/2018/0615/236/5b22f536b2c44..jpg" alt=""/>
                            <div class="characteristic-info">
                                <span>特色资源</span>
                                <div>毛丕新工作室</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            
        </div>
        <div class="characteristic-show box-shadow">
            <div class="title_box">
                <h3 class="column_title">
                    
                    <div class="t_l">LINE</div>
                    <div class="t_c">活动案例</div>
                </h3>
            </div>
            <div class="characteristic-box">
                <el-row :gutter='20' class="characteristic-list">
                    <el-col 
                        :span='6'
                        v-for="(item,index) in 4"
                        :key='index'
                    >
                        <div class="box-shadow">
                            <img src="http://yun.zjer.cn/uploads1/400x400/studio/album/2018/0615/236/5b22f536b2c44..jpg" alt=""/>
                            <div class="characteristic-info">
                                <span>案例{{fontArr[index]}}</span>
                                <div>毛丕新工作室</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            
        </div>
        <el-row :gutter='20' class="teacher-star-box">
            <el-col :span='16'>
                <div class="box-shadow">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">每周名师</div>
                        </h3>
                    </div>
                    <div class="teacher-star clearfix">
                        <div class="fl teacher-pic"><img src="http://yun.zjer.cn/uploads1/400x400/studio/album/2018/0615/236/5b22f536b2c44..jpg" alt=""/></div>
                        <div class="fr teacher-info">
                            <div>毛丕新工作室</div>
                            <p>
                                <span>工作室简介：</span><br/>
                                sdas 
                            </p>
                            <el-button type="primary"><a href="">详细>></a></el-button>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span='8'>
                <div class="box-shadow qq-box">
                    <div>
                        <span>工作室QQ交流群:</span>
                        <span>xxx</span>
                    </div>
                    <div>
                        <span>服务热线:</span>
                        <span>xxx</span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="subject-box box-shadow">
            <div class="title_box">
                <h3 class="column_title">
                    <div class="t_l">LINE</div>
                    <div class="t_c">学科带头人</div>
                </h3>
            </div>
            <div class="subject">
                <el-row :gutter='20'>
                    <el-col 
                        :span='6'
                        v-for="(item,index) in 4"
                        :key='index'
                    >
                        <div class="box-shadow">
                            <a href="">
                                <img src="http://yun.zjer.cn/uploads1/400x400/studio/album/2018/0615/236/5b22f536b2c44..jpg" alt=""/>   
                                <span class="person-name">某某</span>
                                <div class="person-all-info">
                                    <p>姓名：xxx</p>
                                    <p>学科：xx</p>
                                    <p>简介：xxx<br/>xxx<br/>xxx<br/>xxx<br/>xxx<br/>xxx<br/>xxx<br/></p>
                                </div>
                            </a>    
                        </div>    
                    </el-col>
                </el-row>
            </div>
        </div>
        <el-row :gutter='20' class="day-lesson">
            <el-col :span='16'>
                <div class="box-shadow">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">每日一课</div>
                        </h3>
                    </div>
                    <div class="video-box clearfix">
                        <div class="video-play fl">
                            <a href="">
                                <img class="video-pic" src="http://yun.zjer.cn/uploads1/400x400/studio/album/2018/0615/236/5b22f536b2c44..jpg" alt=""/>
                                <img class="play" src="@icon/play.png" alt="">
                            </a>
                        </div>
                        <div class="video-info fr">
                            <div class="title">
                                解密历史与文化
                            </div>
                            <div class="info">
                                <p>主讲：xx</p>
                                <p>点评：xx</p>
                            </div>
                            <div class="btn">
                                <el-button type="primary">点击听课</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span='8'>
                <div class="box-shadow">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">往期回顾</div>
                        </h3>
                    </div>
                    <div style="padding: 28px 20px 6px;background-color:#fff;">
                        <news-list></news-list>
                    </div>
                </div>
            </el-col>
        </el-row>
        <div class="studio-list box-shadow">
            <div class="title_box">
                <h3 class="column_title">
                    <div class="t_l">LINE</div>
                    <div class="t_c">名师工作室</div>
                </h3>
            </div>
            <div class="studio-list-box">
                <el-row :gutter='20'>
                    <el-col 
                        :span='6'
                        v-for="(item) in allStudio.list"
                        :key='item.id'
                    >
                        <div class="box-shadow">
                            <a href="" class="studio-pic">
                                <img src="http://yun.zjer.cn/uploads1/400x400/studio/album/2018/0615/236/5b22f536b2c44..jpg" alt=""/>
                                <div>
                                    <span class="fl">
                                        {{item.name}}
                                    </span>
                                    <span class="fr">
                                        {{item.owner.nickname}}
                                    </span>
                                </div>
                            </a>
                            <div class="studio-info">
                                <div>主持人：{{item.owner.nickname}}</div>
                                <div>学科：暂无</div>
                                <div>资源：{{item.source_num}} 成员：{{item.member_num}}</div>
                                <div>浏览量：{{item.hit_num}}</div>
                                <div class="btn">申请加入</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <el-pagination
                class="page_box"
                background
                layout="prev, pager, next"
                :page-size='allStudio.page'
                :total="allStudio.total_page"
                @size-change='sizeChange'
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import RankList from './components/RankList';
import NewsList from './components/NewsList';
import {getStudioList} from '@api/index.js';
export default {
    components: {
        RankList,
        NewsList
    },
    data() {
        return {
            activeName: '0',
            rankListArr : [
                {
                    label:'访问量',
                },
                {
                    label:'活跃度',
                },
                {
                    label:'文章',
                },
                {
                    label:'资源',
                },
                {
                    label:'名师课堂',
                },
                {
                    label:'主题研修',
                },
                {
                    label:'话题',
                },
            ],
            fontArr:[
                '一',
                '二',
                '三',
                '四'
            ],
            allStudio:{
                list:[],
                page:1,
                total_page:1,
                pre_page:1,
            }
        };
    },
    created(){
        getStudioList({
            page:1,
            pre_page:this.allStudio.pre_page,
            institute_id:3,
        }).then(res=>{
            console.log(res);
            if(res.status.code!=0) return;
            this.allStudio.list = res.data.list;
            this.allStudio.page = res.data.page;
            this.allStudio.total_page = res.data.total_page;
        })
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab);
        },
        sizeChange(page){
            console.log(page)
        }
    }
}
</script>
<style>
    .rankings .el-tabs__nav-wrap::after{
        height: 1px;
    }
    .rankings .el-tabs__header{
        position: absolute;
        top: 1px;
        left: 190px;
        line-height: 62px;
    }
</style>

<style lang='less' scoped>
    .rankings{
        position: relative;
    }
    .news{
        margin-top: 20px;
    }
    .carousel{
        padding: 28px 20px 6px;
        background-color: #fff;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .el-carousel{
        position: relative;
        margin-top: 10px;
        .person-num{
            position: absolute;
            right: 0;
            top: 0;
            background-color: rgba(0, 0, 0, 0.4);
            font-size: 12px;
            color: #fff;
            line-height: 20px;
            height: 20px;
            padding: 0 10px;
        }
        .news-title{
            background-color: rgba(0, 0, 0, 0.4);
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 0 10px;
            color: #ffffff;
            font-size: 16px;
            line-height: 40px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .characteristic-show{
        margin-top: 20px;
        .characteristic-box{
            background-color: #fff;
            padding: 32px 20px;
        }
        .characteristic-list{
            img{
                vertical-align: top;
                width: 100%;
                height: 188px;
            }
        }
        .characteristic-info{
            background-color: #e8eaec;
            overflow: hidden;
            zoom: 1;
            span{
                display: block;
                width: 76px;
                height: 24px;
                font-size: 12px;
                background-color: red;
                border-radius: 8px;
                text-align: center;
                color: #fff;
                line-height: 24px;
                margin: 21px auto 0;
            }
            div{
                text-align: center;
                font-size: 16px;
                line-height: 44px;
                color: #595c5e;
            }
        }
    }
    .teacher-star-box{
        margin-top: 20px;
    }
    .teacher-star{
        background-color: #fff;
        padding: 35px 20px 55px;
        .teacher-pic{
            img{
                width: 276px;
                height: 222px;
            }
        }
        .teacher-info{
            width: 410px;
            div{
                font-size: 18px;
                line-height: 50px;
                color: #333333;
            }
            p{
                font-size: 14px;
                line-height: 25px;
                color: #707070;
                margin-top: 22px;
                height: 148px;
                span{
                    font-weight: 600;
                }
            }
            .el-button{
                margin-left: 338px;
                padding: 0;
                a{
                    display: inline-block;
                    padding: 9px 15px;
                }
            }
        }
    }
    .qq-box{
        height: 405px;
        box-sizing: border-box;
        background:#fff url('./img/qq.jpg') no-repeat 85px 87px;
        padding: 180px 0 0 94px;
        div{
            margin-bottom: 20px;
            span{
                display: block;
                font-size: 16px;
                line-height: 30px;
            }
        }
    }
    .subject-box{
        margin-top: 20px;
        .subject{
            padding: 50px 20px 28px;
            background-color: #fff;
        }
        .box-shadow{
            position: relative;
            img{
                vertical-align: top;
                width: 100%;
                height: 258px;
            }
            span{
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                height: 50px;
                background-color: rgba(40, 138, 215, 0.8);
                line-height: 50px;
                font-size: 20px;
                text-align: center;
                color: #fff;
            }
            div{
                position: absolute;
                top: 258px;
                left: 0;
                right: 0;
                height: 218px;
                background-color: #2289bf;
                color: #fff;
                padding: 20px;
                font-size: 16px;
                line-height: 28px;
                transition: 0.5s;
                p:nth-child(3){
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 6;
                    overflow: hidden;
                }
            }
            &:hover{
                div{
                    top:0;
                }
            }
        }
    }
    .day-lesson{
        margin-top: 20px;
        .video-box{
            background-color: #fff;
            padding: 34px 20px 76px;
        }
        .video-play{
            position: relative;
            .video-pic{
                vertical-align: top;
                width: 273px;
                height: 223px;
            }
            .play{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                z-index: 1;
            }
        }
        .video-info{
            width: 410px;
            .title{
                font-size: 18px;
                line-height: 82px;
                color: #181819;
                margin-bottom: 8px;
            }
            .info{
                font-size: 14px;
                line-height: 34px;
                height: 102px;
            }
            .btn{
                text-align: right;
            }
        }
    }
    .studio-list{
        margin-top: 20px;
        .studio-list-box{
            background-color: #fff;
            padding: 58px 20px 0px;
            .box-shadow{
                position: relative;
                margin-bottom: 30px;
                .studio-pic{
                    img{
                        vertical-align: top;
                        width: 100%;
                        height: 190px;
                    }
                    div{
                        position: absolute;
                        background-color: rgba(40, 138, 215, 0.8);
                        height: 36px;
                        color: #fff;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        padding: 0 20px;
                        line-height: 36px;
                    }
                }
                .studio-info{
                    position: absolute;
                    transition: 0.5s;
                    top: 190px;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #2289bf;
                    padding: 20px 40px;
                    color: #fff;
                    font-size: 14px;
                    line-height: 26px;
                    .btn{
                        cursor: pointer;
                        padding: 0 20px;
                        margin: 16px auto 0;
                        border: 2px solid #fff;
                        width: 60px;
                        border-radius: 40px;
                    }
                }
                &:hover{
                    .studio-info{
                        top: 0;
                    }
                }
            }
        }
    }
</style>
