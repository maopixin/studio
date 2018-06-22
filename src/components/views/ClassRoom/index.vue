<template>
    <div>
        <crumbs/>
        <div class="content">
            <el-row :gutter='20'>
                <el-col :span='16'>
                    <div class="video box-shadow">
                        <div class="title_box">
                            <h3 class="column_title">
                                <div class="t_l">LINE</div>
                                <div class="t_c">名师面对面</div>
                            </h3>
                            <a href="" class="title_more">更多</a>
                        </div>
                        <div class="video-box">
                            <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane label="直播预告" name="first"></el-tab-pane>
                                <el-tab-pane label="精彩回放" name="second"></el-tab-pane>
                            </el-tabs>
                            <div class="video-list">
                                <h4 class="title">
                                    名师面对面是针对教师专业发展的线上直播主题研修活动
                                </h4>
                                <div class="video_list">
                                    <el-row :gutter='8'>
                                        <el-col 
                                            :span='8'
                                            v-for="(item,index) in 3"
                                            :key='index'
                                        >
                                            <div class="box-shadow">
                                                <div class="pic-box">
                                                    <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3757916566,3108098082&fm=58&bpow=512&bpoh=512" alt=""/>
                                                    <a href="" class="">
                                                        <img src="@icon/video-player.png" alt=""/>
                                                    </a>
                                                </div>
                                                <div class="lesson-info">
                                                    <div class="lesson-title">课程主题</div>
                                                    <div class="clearfix info">
                                                        <span class="fl">楼仙娟</span>
                                                        <span class="fr">2018-06-06</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
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
                                <div class="t_c">课程计划</div>
                            </h3>
                        </div>
                        <div class="data-box">
                            <vue-event-calendar 
                                :events="demoEvents"
                                @day-changed="handleDayChanged"
                            ></vue-event-calendar>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <div class="study box-shadow">
                <div class="title_box">
                    <h3 class="column_title">
                        <div class="t_l">LINE</div>
                        <div class="t_c">名师带你学</div>
                    </h3>
                    <a href="" class="title_more">更多</a>
                </div>
                <div>
                    <el-tabs v-model="activeName2" @tab-click="handleClick">
                        <el-tab-pane label="直播预告" name="first"></el-tab-pane>
                        <el-tab-pane label="精彩回放" name="second"></el-tab-pane>
                    </el-tabs>
                    <el-row :gutter='20' class="video_list study_list">
                        <el-col 
                            :span='6'
                            v-for="(item,index) in 4"
                            :key='index'
                        >
                            <div class="box-shadow">
                                <div class="pic-box">
                                    <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3757916566,3108098082&fm=58&bpow=512&bpoh=512" alt=""/>
                                    <a href="" class="">
                                        <img src="@icon/video-player.png" alt=""/>
                                    </a>
                                </div>
                                <div class="lesson-info">
                                    <div class="lesson-title">课程主题</div>
                                    <div class="clearfix info">
                                        <span class="fl">楼仙娟</span>
                                        <span class="fr">2018-06-06</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="demand box-shadow">
                <div class="title_box">
                    <h3 class="column_title">
                        <div class="t_l">LINE</div>
                        <div class="t_c">点播课堂</div>
                    </h3>
                    <a href="" class="title_more">更多</a>
                </div>
                <div class="total-lesson-box box-shadow">
                    <el-tabs v-model="activeName3" type="card" @tab-click="handleClick">
                        <el-tab-pane label="全部" name="first">
                            <demand-type-one></demand-type-one>
                        </el-tab-pane>
                        <el-tab-pane label="自拍视频" name="second">

                        </el-tab-pane>
                        <el-tab-pane label="网络教学视频" name="third">

                        </el-tab-pane>
                        <el-tab-pane label="专题讲座" name="fourth">

                        </el-tab-pane>
                        <el-tab-pane label="评上说课" name="fifth">

                        </el-tab-pane>
                        <el-tab-pane label="说课" name="sixth">

                        </el-tab-pane>
                        <el-tab-pane label="微课程" name="seveth">

                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Crumbs from '@global/crumbs'
import DemandTypeOne from './components/DemandTypeOne'
import Vue from 'vue'
import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'zh'}) //可以设置语言，支持中文和英文
export default {
    name:'classroom',
    components: {
        Crumbs,
        DemandTypeOne,
    },
    data() {
        return {
            activeName: 'first',
            activeName2:'first',
            activeName3:'first',
            demoEvents: [
                {
                    date:'2018/07/12',
                    title:''
                },
                {
                    date: '2018/6/28',
                    title: '',
                },
                {
                    date: '2018/6/27',
                    title: ''
                }
            ]
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        handleDayChanged(day){
            this.demoEvents.forEach(e => {
                if(e.date==day.date){
                    //do something
                }
            });
        }
    }
}
</script>

<style lang='less' scoped>
    .content{
        width: 1140px;
        margin: 0 auto;
    }
    .video{
        position: relative;
    }
    .video-box{
        background-color: #fff;
    }
    .video-list{
        padding: 0 20px;
        .title{
            font-size: 16px;
            line-height: 68px;
            color: #6a6c6d;
        }
    }
    .video_list{
        padding-bottom: 50px;
        .pic-box{
            position: relative;
            img{
                display: block;
                width: 100%;
                height: 176px;
                vertical-align: top;
            }
            a{
                position: absolute;
                opacity: 0;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
                transition: 0.5s;
                img{
                    width: 50px;
                    height: 50px;
                    display: block;
                    margin: 63px auto;
                }
            }
            .hover:hover{
                opacity: 1;
            }
        }
        .lesson-info{
            padding: 8px 10px 5px;
            .lesson-title{
                font-size: 16px;
                line-height: 30px;
                color: #333333;
            }
            .info{
                font-size: 14px;
                line-height: 22px;
                color: #797a7a;
            }
        }
    }
    .data-box{
        background-color: #fff;
    }
    .study{
        margin-top: 20px;
        position: relative;
    }
    .study_list{
        margin: 0 !important;
        padding: 46px 0;
        background-color: #fff;
        .pic-box{
            img{
                height: 201px;
            }
        }
    }
    .demand{
        margin-top: 20px;
        background-color: #fff;
    }
    .total-lesson-box{
        margin: 10px;
    }
</style>

<style lang='less'>
    .video .el-tabs__header,.study .el-tabs__header{
        position: absolute;
        line-height:62px;
        top:1px;
        left:170px;
        .el-tabs__nav-wrap::after{
            height: 1px;
        }
    }
    .cal-wrapper{
        width: 80% !important;
        padding:0 !important;
        margin: 0 auto;
    }
    .events-wrapper{
        display: none !important;
    }
    .cal-header{
        padding-bottom:0 !important;
    }
    .cal-body{
        background-color: #fff;
    }
    .date-num{
        line-height:43px !important;
    }
</style>