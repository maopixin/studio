<template>
    <div class="layui-main">
        <!-- 左右布局启动 -->
        <div class="studio_box clearfix">
            <!-- 左边启动 -->
            <div class="studio_left fl">
                <!-- 建设度数据可视化饼图 -->
                <div class="plan_box box-shadow">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">基本任务建设进度</div>
                        </h3>
                    </div>
                    <loading v-if='!studioState.l'/>
                    <fail v-if="studioState.fail"/>
                    <div class="echart_main" id="main" v-show="studioState.l && !studioState.fail">

                    </div>
                </div>
                <!-- 建设度可视化数字 -->
                <div class="plan_box box-shadow margin_t">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">基本任务建设进度</div>
                        </h3>
                    </div>
                    <loading v-if='!studioState.l'/>
                    <fail v-if="studioState.fail"/>
                    <div class="number_main" v-show="studioState.l && !studioState.fail">
                        <ul class="number_list clearfix">
                            <li>
                                <span>昨日新增</span>
                                <span style="color:#fc6232;">{{studioState.data.yesterday_added}}</span>
                            </li>
                            <li>
                                <span>年活跃度</span>
                                <span style='color:#1fb7fc;'>{{studioState.data.year_active}}</span>
                            </li>
                            <li>
                                <span>排名</span>
                                <span style="color:#fdad68;">{{studioState.data.rank}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 工作室index信息 -->
                <div class="home_info margin_t">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">工作室简介</div>
                        </h3>
                    </div>
                    <div>
                        <loading v-if='!studioInfo.l'/>
                        <fail v-if="studioInfo.fail"/>
                        <div v-if="studioInfo.l && !studioInfo.fail" class="info_box">
                            <div class="info clearfix">
                                <img src="http://yun.zjer.cn/uploads/snsPhotos/snscover/551e070cc5593_100.jpg" alt="">
                                <div class="text">
                                    <span class="name">
                                        <router-link :to='{name:"introduce"}'>{{studioInfo.data.name}}</router-link>
                                    </span>
                                    <span class="type">{{studioInfo.data.subject_major}}</span>
                                </div>
                            </div>
                            <div class="num clearfix">
                                <div>
                                    <a href="javascript:;">
                                        <span>{{studioInfo.data.member_count}}</span>
                                        <span>成员</span>
                                    </a>
                                </div>
                                <em></em>
                                <div>
                                    <a href="javascript:;">
                                        <span>{{studioInfo.data.resource_count}}</span>
                                        <span>资源</span>
                                    </a>
                                </div>
                                <em></em>
                                <div>
                                    <a href="javascript:;">
                                        <span>{{studioInfo.data.info_count}}</span>
                                        <span>文章</span>
                                    </a>
                                </div>
                            </div>
                            <a href="javascript:;" @click="()=>{this.$message('加入工作室功能未开放')}" class="join" id="btn">
                                <span class="text">申请加入工作室</span>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- 成员排行 -->
                <div class="member_list_box margin_t">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">成员排行</div>
                        </h3>
                        <router-link :to='{name:"member"}' class="title_more">更多</router-link>
                    </div>
                    <div class="">
                        <loading v-if='!member.l'/>
                        <fail v-if="member.fail"/>
                        <ul v-if="member.l && !member.fail" class="member_list">
                            <li 
                                v-for="(item,index) in member.list"
                                :key='item.id'
                            >
                                <span class="no fl">{{index+1}}</span>
                                <img class="fl" :src="item.smallAvatar" alt="">
                                <a href="javascript:;" class="name fl">{{item.nickname}}</a>
                                <span class="number fr">{{item.integral}}</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <!-- 统计 -->
                <div class="statistics_list_box margin_t">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">统计</div>
                        </h3>
                    </div>
                    <div>
                        <loading v-if='!studioState.l'/>
                        <fail v-if="studioState.fail"/>
                        <ul class="statistics_list" v-show="studioState.l && !studioState.fail">
                            <li>
                                <span class="fl">成员数</span>
                                <span class="fr">{{studioState.data.member_count}}</span>
                            </li>
                            <li>
                                <span class="fl">文章数</span>
                                <span class="fr">{{studioState.data.article_count}}</span>
                            </li>
                            <li>
                                <span class="fl">资源数</span>
                                <span class="fr">{{studioState.data.resource_count}}</span>
                            </li>
                            <li>
                                <span class="fl">名师课堂数</span>
                                <span class="fr">{{studioState.data.course_count}}</span>
                            </li>
                            <li>
                                <span class="fl">教研活动数</span>
                                <span class="fr">{{studioState.data.activity_count}}</span>
                            </li>
                            <li>
                                <span class="fl">话题数</span>
                                <span class="fr">{{studioState.data.rank}}</span>
                            </li>
                            <li>
                                <span class="fl">总活跃度数</span>
                                <span class="fr">{{studioState.data.activity}}</span>
                            </li>
                        </ul>
                    </div>

                </div>
                <!-- 最近访客 -->
                <div class="margin_t" style='overflow:visible;'>
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">最近访客</div>
                        </h3>
                    </div>
                    <loading v-if='!studioState.l'/>
                    <fail v-if="studioState.fail"/>
                    <div v-show="studioState.l && !studioState.fail">
                        <ul class="visitor_list clearfix">
                            <li 
                                v-for="(item,index) in studioState.data.visitors"
                                :key='index'
                                @mouseover="HandelHover(index)" 
                                @mouseout="HandelOut(index)"
                            >
                                <img class="pic_head" src="@img/head_pic.png" alt="">
                                <a href="javascript:;">{{item.nickname}}</a>
                                <span>{{item.time_ago}}</span>
                                <!-- <div class="info_jump_box" v-show='visitor_show_index==index'>
                                    <div class="pic_join fl">
                                        <img src="https://avatars1.githubusercontent.com/u/30068481?s=460&v=4" alt="">
                                        <a href="">进入空间</a>
                                    </div>
                                    <div class="info_boxs fl">
                                        <div>
                                            <span class="name">xxx</span>
                                            <span class="sex man"></span>
                                        </div>
                                        <p>
                                            阿里；速度快了；暗色大赛；距离；大家商量；就；按时间东联； 就
                                        </p>
                                    </div>
                                </div> -->
                            </li>
                        </ul>
                        <div class="visitor_total_num_box clearfix">
                            <div class="fl">
                                <span>今日访问量</span>
                                <span>{{studioState.data.today_pv}}</span>
                            </div>
                            <div class="fl">
                                <span>总访问量</span>
                                <span>{{studioState.data.total_pv}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <!-- 右边启动 -->
            <div class="studio_right fr">
                <div class="clearfix">
                    <div class="fl box-shadow news">
                        <div class="title_box">
                            <h3 class="column_title">
                                <div class="t_l">LINE</div>
                                <div class="t_c">资讯</div>
                            </h3>
                            <router-link :to='{name:"gather",query:{mid:"0"}}' class="title_more">更多</router-link>
                        </div>
                        <div class="clearfix news_boxs">
                            <loading v-if='!information.l'/>
                            <fail v-if="information.fail"/>
                            <div class="carousel_box" v-if="information.l&&!information.fail">
                                <el-carousel indicator-position="outside" height='186px'>
                                    <el-carousel-item v-for="item in information.list" :key="item.id">
                                        <a href="">
                                            <img :src="item.media.small" alt="">
                                        </a>
                                        <span>{{item.title}}</span>
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                            <div class="sss">
                                <ul class="new_list_text" v-if='information.l&&!information.fail'>
                                    <li 
                                        v-for="(item) in information.list"
                                        :key='item.id'

                                    >
                                        <a href="">
                                            {{item.title}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="fr box-shadow notice">
                        <div class="title_box">
                            <h3 class="column_title">
                                <div class="t_l">LINE</div>
                                <div class="t_c">通告</div>
                            </h3>
                            <router-link :to='{name:"gather",query:{mid:"1"}}' class="title_more">更多</router-link>
                        </div>
                        <div>
                            <loading v-if='!announcement.l'/>
                            <fail v-if="announcement.fail"/>
                            <ul class="studio_new_list" v-if='announcement.l&&!announcement.fail'>
                                <li 
                                    v-for="(item,index) in announcement.list"
                                    :key="index"
                                >
                                    <span class="data">
                                        <em>{{item.utime.m}}/{{item.utime.d}}</em>
                                        <em>{{item.utime.y}}</em>
                                    </span>
                                    <span class="new_title">
                                        <a href="">
                                            {{ item.title || '无标题' }}
                                        </a>
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <!-- 成果展示 -->
                <div class="margin_t">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">成果展示</div>
                        </h3>
                        <router-link :to='{name:"gather",query:{mid:"2"}}' class="title_more">更多</router-link>
                    </div>
                    <loading v-if='!achievements.l'/>
                    <fail v-if="achievements.fail"/>
                    <div class="clearfix three_box" v-show=" achievements.l && !achievements.fail">
                        <el-carousel :interval="4000" type="card" height="200px">
                            <el-carousel-item v-for="item in achievements.list" :key="item.id">
                                <a href="">
                                    <img :src="item.media.middle" alt="">
                                    <span class="name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{item.title}}</span>
                                </a>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <!-- 文章和资源 -->
                <div class="clearfix resource_and_text">
                    <div class="fl margin_t item">
                        <div class="title_box">
                            <h3 class="column_title">
                                <div class="t_l">LINE</div>
                                <div class="t_c">教师文章</div>
                            </h3>
                            <router-link :to="{name:'article'}" class="title_more">更多</router-link>
                        </div>
                        <loading v-if='!article.l'/>
                        <fail v-if="article.fail"/>
                        <div v-if="article.l && !article.fail">
                            <div class="resource_info_box clearfix">
                                <div class="fl img_box">
                                    <img src="./img/teacher_img.jpg" alt="">
                                </div>
                                <div class="fr resource_info">
                                    <div class="title">
                                        <a href="">{{article.data.title}}</a>
                                    </div>
                                    <div class="sys">简介简介简介简介简介简介简介简介简介简介简介简介</div>
                                    <div class="name_time">
                                        <span class="name fl">{{article.data.username}}</span>
                                        <span class="time fl">{{article.data.utime.m + '-' + article.data.utime.d}}</span>
                                        <span class="fr">
                                            <em class="eye"></em>
                                            {{article.data.hits}}次
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <ul class="resource_info_list">
                                <!-- *5 -->
                                <li 
                                    class="clearfix"
                                    v-for = "(item) in article.list"
                                    :key = 'item.id'
                                >
                                    <div class="type fl">{{item.category_name}}</div>
                                    <div class="title fl">{{item.title}}</div>
                                    <div class="name fl">{{item.username}}</div>
                                    <div class="time fl">{{article.data.utime.m + '-' + article.data.utime.d}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="fr margin_t item">
                        <div class="title_box">
                            <h3 class="column_title">
                                <div class="t_l">LINE</div>
                                <div class="t_c">教学资源</div>
                            </h3>
                            <router-link :to="{name:'t_resource'}" class="title_more">更多</router-link>
                        </div>
                        <loading v-if='!teachingResources.l'/>
                        <fail v-if="teachingResources.fail"/>
                        <div v-if="teachingResources.l && !teachingResources.fail">
                            <div class="resource_info_box clearfix">
                                <div class="fl img_box">
                                    <img src="./img/source_img.jpg" alt="">
                                </div>
                                <div class="fr resource_info">
                                    <div class="title">
                                        <a href="">{{teachingResources.data.title}}</a>
                                    </div>
                                    <div class="sys">简介简介简介简介简介简介简介简介简介简介简介简介</div>
                                    <div class="name_time">
                                        <span class="name fl">{{teachingResources.data.username}}</span>
                                        <span class="time fl">{{teachingResources.data.utime.m + '-' + teachingResources.data.utime.d}}</span>
                                        <span class="num fr">
                                            <em class="down"></em>{{teachingResources.data.hits}}次
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <ul class="resource_info_list">
                                <!-- *5 -->
                                <li 
                                    class="clearfix"
                                    v-for="(item) in teachingResources.list"
                                    :key='item.id'
                                >
                                    
                                    <div class="type fl">{{item.category_name}}</div>
                                    <div class="title fl">
                                        <a href="">{{item.title}}</a>
                                    </div>
                                    <div class="name fl">{{item.username}}</div>
                                    <div class="time fl">{{item.hits}}次</div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <!-- 教研活动 -->
                <div class="margin_t">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">教研活动</div>
                        </h3>
                        <router-link :to='{name:"research"}' class="title_more">更多</router-link>
                    </div>
                    <div>
                        <loading v-if='!activity.l'/>
                        <fail v-if="activity.fail"/>
                        <ul v-if="activity.l && !activity.fail" class="teaching_and_researching_activity">
                            <!-- 第一个不变  循环第二个 -->
                            <li class="clearfix">
                                <div class="title fl">活动标题</div>
                                <div class="name fl">创建者</div>
                                <div class="io fl">活动状态</div>
                                <div class="start_end fl">起止时间</div>
                            </li>
                            <li 
                                class="clearfix"
                                v-for="(item) in activity.list"
                                :key = 'item.id'
                            >
                                <div class="title fl">
                                    <a href="">{{item.title}}</a>
                                </div>
                                <div class="name fl">
                                    <a href="">{{item.creator_name}}</a>
                                </div>
                                <div class="io fl">{{item.process_status_text}}</div>
                                <div class="start_end fl">{{item.start_time}}至{{item.stop_time}}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 名师课堂 -->
                <div class="margin_t">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">名师课堂</div>
                        </h3>
                        <!-- <router-link :to='{name:"research"}' class="title_more">更多</router-link> -->
                    </div>
                    <div>
                        <loading v-if='!lesson.l'/>
                        <fail v-if="lesson.fail"/>
                        <ul class="list_box clearfix" v-if="lesson.l && !lesson.fail">
                            <li 
                                v-for="(item) in lesson.list"
                                :key = 'item.id'
                            >
                                <a href="" class="video_show_box">
                                    <img :src="item.media.middle" alt="">
                                    <div class="video_play">
                                        <div class="play">

                                        </div>
                                    </div>
                                </a>
                                <span class="title">{{item.title}}</span>
                                <div class="list_info clearfix">
                                    <em class="teacher_name">主讲人：{{item.username}}</em>
                                    <em class="time">{{item.utime.y+ '-' + item.utime.m + '-' + item.utime.d}}</em>
                                    <a href="javascript:;">点击听课</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--  -->
                <div class="clearfix  resource_and_text">
                    <div class="fl item margin_t">
                        <div class="title_box">
                            <h3 class="column_title">
                                <div class="t_l">LINE</div>
                                <div class="t_c">最新动态</div>
                            </h3>
                            <router-link :to="{name:'news'}" class="title_more">更多</router-link>
                        </div>
                        <div style="background-color:#fff;overflow:hidden;">

                            <div class="resource_list_box" id="test1">
                                 <loading v-if='!latest.l'/>
                                <fail v-if="latest.fail"/>
                                <ul 
                                    class="resource_list"
                                    v-if='latest.l && !latest.fail'
                                >
                                    <li 
                                        class="clearfix"
                                        v-for="(item) in latest.list"
                                        :key='item.id'
                                    >
                                        <span class="time fl">{{item.utime.y+"-"+item.utime.m+"-"+item.utime.d}}</span>
                                        <span class="line fl"></span>
                                        <a class="head_pic fl" href="">
                                            <img src="@img/head_pic.png" alt="">
                                        </a>
                                        <div class="info fl">
                                            <a href="" class="name">{{item.username}}</a>
                                            <span>
                                                发布：
                                                <a href="javascript:;">{{item.title}}</a>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="fr item margin_t">
                        <div class="title_box">
                            <h3 class="column_title">
                                <div class="t_l">LINE</div>
                                <div class="t_c">留言板</div>
                            </h3>
                            <router-link :to='{name:"msgboard"}' class="title_more">更多</router-link>
                        </div>
                        <div>
                            <ul class="leave_message_box">
                                <li 
                                    class="clearfix"
                                    v-for="(item) in studioState.data.comments.slice(0,5)"
                                    :key='item.id'
                                >
                                    <a href="javascript:;" class="head_pic_border head_pic fl">
                                        <img src="@img/head_pic.png" alt="">
                                    </a>
                                    <div class="fl people_info">
                                        <div class="name">
                                            <span class="line"></span>
                                            <span class="text">{{item.nickname}}</span>
                                        </div>
                                        <div class="msg clearfix">
                                            <span class="line"></span>
                                            <span class="text">{{item.msg}}</span>
                                        </div>
                                    </div>
                                    <div class="time fr">{{item.time_ago}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getStudioData, getStudioDetail, getStudioLatest, getActivityList ,getStuidoMembers ,getStudioState} from '@api/index';
import Loading from '@global/Loading';
import Fail from '@global/Fail'
export default {
    name:'Home',
    
    data(){
        return {
            visitor_show_index:-1,
            announcement:{
                l:false,
                list:[],
                fail:false
            },
            information:{
                l:false,
                list:[],
                fail:false
            },
            activity:{
                l:false,
                list:[],
                fail:false
            },
            latest:{
                l:false,
                list:[],
                fail:false
            },
            studioInfo:{
                l:false,
                data:{},
                fail:false
            },
            member:{
                l:false,
                list:[],
                fail:false
            },
            article:{
                l:false,
                list:[],
                data:{},
                fail:false
            },
            teachingResources:{
                l:false,
                list:[],
                data:{},
                fail:false
            },
            studioState:{
                l:false,
                data:{
                    comments:[],
                    visitors:[]
                },
                fail:false
            },
            achievements:{
                l:false,
                list:[],
                fail:false
            },
            lesson:{
                l:false,
                list:[],
                fail:false
            },
        }
    },
    components:{
        Loading,
        Fail
    },
    methods:{
        HandelHover(i){
            this.visitor_show_index = i;
        },
        HandelOut(){
            this.visitor_show_index = -1;
        },
        firstLoading(){
            let bodyList = this.$store.getters.bodyList;
            // 通告
            getStudioData({
                id:this.$route.params.id,
                category_id:bodyList['通告'].id,
                pre_page:5
            }).then(data=>{
                console.log(data,'通告');
                this.announcement.l = true;
                if(data.status.code==0){
                    this.announcement.list = data.data.list
                }else{
                    this.announcement.fail = true;
                }
            }).catch(error=>{
                this.announcement.fail = true;
            })
            // 资讯
            getStudioData({
                id:this.$route.params.id,
                category_id:bodyList['资讯'].id,
                pre_page:7,
                require_media:1

            }).then(data=>{
                console.log(data,'资讯');
                this.information.l = true;
                if(data.status.code==0){
                    this.information.list = data.data.list
                }else{
                    this.information.fail = true;
                }
            }).catch(error=>{
                this.information.fail = true;
            })
            getStudioData({
                id:this.$route.params.id,
                category_id:bodyList['成果展示'].id,
                pre_page:7,
                require_media:1

            }).then(data=>{
                console.log(data,'成果展示');
                this.achievements.l = true;
                if(data.status.code==0){
                    this.achievements.list = data.data.list
                }else{
                    this.achievements.fail = true;
                }
            }).catch(error=>{
                this.achievements.l = true;
                this.achievements.fail = true;
            })
            getStudioData({
                id:this.$route.params.id,
                category_id:bodyList['教师文章'].id,
                pre_page:6
            }).then(data=>{
                console.log(data,'教师文章');
                this.article.l = true;
                if(data.status.code==0){
                    this.article.data = data.data.list[0];
                    this.article.list = data.data.list.slice(1);
                }else{
                    this.article.fail = true;
                }
            }).catch(error=>{
                this.article.fail = true;
            });
            getStudioData({
                id:this.$route.params.id,
                category_id:bodyList['教学资源'].id,
                pre_page:6
            }).then(data=>{
                console.log(data,'教学资源');
                this.teachingResources.l = true;
                if(data.status.code==0){
                    this.teachingResources.data = data.data.list[0];
                    this.teachingResources.list = data.data.list.slice(1);
                }else{
                    this.teachingResources.fail = true;
                }
            }).catch(error=>{
                this.teachingResources.fail = true;
            })
            getStudioData({
                id:this.$route.params.id,
                category_id:bodyList['名师课堂'].id,
                pre_page:3,
                require_media:1
            }).then(data=>{
                console.log(data,'名师课堂');
                this.lesson.l = true;
                if(data.status.code==0){
                    this.lesson.list = data.data.list
                }else{
                    this.lesson.fail = true;
                }
            }).catch(error=>{
                this.lesson.l = true;
                this.lesson.fail = true;
            })
            // 工作室信息
            getStudioDetail({
                id:this.$route.params.id
            }).then(data=>{
                console.log(data,'工作室信息');
                this.studioInfo.l = true;
                if(data.status.code==0){
                    this.studioInfo.data = data.data
                }else{
                    this.studioInfo.fail = true;
                }
            }).catch(error=>{
                this.studioInfo.fail = true;
            })
           
            // 教研活动
            getActivityList({
                studio_id:this.$route.params.id,
                pre_page:5
            }).then(data=>{
                console.log(data,'教研活动');
                this.activity.l = true;
                if(data.status.code==0){
                    this.activity.list = data.data.list
                }else{
                    this.activity.fail = true;
                }
            }).catch(error=>{
                this.activity.fail = true;
            })
            // 成员列表
            getStuidoMembers({
                studio_id:this.$route.params.id,
                pre_page:7
            }).then(data=>{
                console.log(data,'成员列表');
                this.member.l = true;
                if(data.status.code==0){
                    console.log(data)
                    this.member.list = data.data.list
                }else{
                    this.member.fail = true
                }
            }).catch(error=>{
                this.member.fail = true;
            })
            // 最新动态
            getStudioLatest({
                id:this.$route.params.id,
                require_user:1,
                pre_page:5
            }).then(data=>{
                console.log(data,'最新动态')
                this.latest.l = true;
                if(data.status.code==0){
                    this.latest.list = data.data.list
                }else{
                    this.latest.fail = true;
                }
            }).catch(error=>{
                this.latest.fail = true;
            });
        
            getStudioState({
                id:this.$route.params.id
            }).then(data=>{
                console.log(data,'0.0');
                this.studioState.l = true;
                if(data.status.code==0){
                    var obj = data.data;
                    this.studioState.data = obj;
                    this.$nextTick(()=>{
                        var myChart = this.$echarts.init(document.getElementById('main'));
                        var option = {
                            tooltip: {
                                show: true,
                                trigger: 'item',
                                formatter: "{d}%",

                            },
                            series: [{
                                type: 'pie',
                                radius: '65%',
                                center: ['50%', '50%'],
                                radius: ['60%', '70%'],
                                selectedMode: 'single',
                                data: [{
                                        value: data.data.complete,
                                        name: '已完成',
                                        itemStyle: {
                                            color: '#1b9fe2'
                                        }
                                    },
                                    {
                                        value: 100 - data.data.complete,
                                        name: '未完成',
                                        itemStyle: {
                                            color: '#aaaaaa'
                                        }
                                    }
                                ]
                            }]
                        };
                        myChart.setOption(option);
                    })
                    
                }else{
                    this.studioState.fail = true;
                }
            }).catch(error=>{
                this.studioState.l = true;
                this.studioState.fail = true;
            })
        }
    },
    mounted () {        
        if(this.$store.getters.navL){
            console.log('导航已激活，加载首页数据')
            this.firstLoading();
        }else{
            console.log('等待导航激活')
        }
    },
    computed:{
        bodyList(){
            return this.$store.getters.bodyList;
        }
    },
    watch:{
        bodyList(){
            // 初次加载需要等待导航请求结束，并且拿到bodylist
            console.log('导航已激活，加载首页数据')
            this.firstLoading();
        }
    }
}
</script>

<style lang='less' scoped>

.studio_box{
    margin-top: 23px;
    .studio_left{
        width: 330px;
        padding: 0 10px;
    }
    .studio_right{
        width: 770px;
        padding: 0 10px;
    }
}
.echart_main{
    width: 100%;
    height: 128px;
    background-color: #fff;
    position: relative;
    .tip{
        position: absolute;
        z-index: 999999;
        width: 42px;
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        top: 54px;
        left: 148px;
    }
}

.number_list{
    padding: 20px;
    background-color: #fff;
    li{
        float: left;
        width: 33.3%;
        &:last-child{
            margin-right: 0;
        }
        span{
            font-size: 16px;
            display: block;
            text-align: center;
            line-height: 44px;
        }
    }
}

.info_box{
    padding: 39px 20px 54px;
    background-color: #fff;
    // margin: 17px 20px;
    .info{
        padding-left: 18px;
        img{
            float: left;
            width: 90px;
            height: 90px;
            border-radius: 45px;
        }
        .text{
            float: left;
            padding-left: 14px;
            span{
                display: block;
            }
            .name{
                font-size: 20px;
                font-weight: 600;
                line-height: 36px;
                padding-top: 8px;
                color: #222;
            }
            .type{
                font-size: 14px;
                line-height: 30px;
                color: #666;
            }
        }
    }
    .num{
        margin-top: 26px;
        div{
            float: left;
            width: 33%;
            text-align: center;
            span{
                display: block;
                &:nth-child(1){
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 33px;
                    color: #4b4b4b;
                }
                &:nth-child(2){
                    font-size: 15px;
                    line-height: 29px;
                    color: #9b9b9b;
                }
            }
        }
        em{
            float: left;
            width: 1px;
            height: 40px;
            background-color: #ebebeb;
            margin-top: 13px;
        }
    }
    .join{
        display: block;
        width: 224px;
        height: 40px;
        background-color: #1b9fe2;
        margin: 26px auto 0;
        text-align: center;
        color: #fff;
        font-size: 18px;
        line-height: 40px;
        font-weight: 600;
        border-radius: 6px;
        box-shadow: 0 5px 0px 0px #1689c3;
        position: relative;
        overflow: hidden;
        .text{
            position: relative;
        }
    }
}

.member_list{
    background-color: #fff;
    padding: 27px 20px 20px;
    li{
        line-height: 37px;
        height: 37px;
        margin-bottom: 15px;
        color: #8c8c8c;
        .no{
            width: 27px;
            height: 37px;
            margin-right: 24px;
            text-align: center;
        }
        img{
            display: none;
            width: 37px;
            height: 37px;
            margin-right: 8px;
            border-radius: 18.5px;
        }
        .name{
            width: 90px;  
            color: inherit;
        }
        .number{
            font-weight: 600;
        }
        &:nth-child(1){
            color:#fc637a;
            .no{
                background: url('./img/flower-red.png') no-repeat ;
                background-size: cover;
                line-height: 30px;
                font-size: 12px;
                text-indent: 2px;
            }
            img{
                display: block;
            }
        }
        &:nth-child(2){
            color:#4dc9d5;
            .no{
                background: url('./img/flower_blue.png') no-repeat ;
                background-size: cover;
                line-height: 30px;
                font-size: 12px;
                text-indent: 2px;
            }
            img{
                display: block;
            }
        }
        &:nth-child(3){
            color:#8ccd72;
            .no{
                background: url('./img/flower_yellow.png') no-repeat ;
                background-size: cover;
                line-height: 30px;
                font-size: 12px;
                text-indent: 2px;
                color: #975a12;
            }
            img{
                display: block;
            }
        }
        &:last-child{
            margin-bottom: 0;
        }
    }
}

.statistics_list{
    background-color: #fff;
    padding: 0px 20px 26px;
    color: #8c8c8c;
    li{
        line-height: 60px;
        height: 60px;
        border-bottom: 1px solid #e4e4e4;
        .fr{
            font-weight: 600;
        }
    }
}

.visitor_list{
    background-color: #fff;
    padding: 22px 20px ;
    border-bottom: 1px solid #e4e4e4;
    overflow: visible;
    li{
        width: 57px;
        float: left;
        margin-right: 59px;
        position: relative;
        &:nth-child(3n){
            margin-right: 0;
        }
        .pic_head{
            width: 57px;
            height: 57px;
            border: 1px solid rgba(0, 0, 0, 0);
            border-radius: 30px;
            display: block;
            &:hover{
                border: 1px solid #1b9fe2;
            }
        }
        a{
            display: block;
            text-align: center;
            line-height: 29px;
            font-size: 14px;
            color: #1b9fe2;
            margin-top: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        span{
            display: block;
            line-height: 29px;
            font-size: 14px;
            text-align: center;
            color: #7e766b;
        }
        .info_jump_box{
            position: absolute;
            background-color: #fff;
            z-index: 9;
            width: 242px;
            height: 138px;
            border: 1px solid #e6e6e6;
            top: 64px;
            left: -20px;
            &:after{
                content: '';
                width: 5px;
                height: 5px;
                display: block;
                background: url('./icon/arrow_top.png') 0 0 no-repeat;
                position: absolute;
                top: -4px;
                left: 46px;
            }
            .pic_join{
                margin: 9px 24px 19px 20px;
                img{
                    width: 57px;
                    height: 57px;
                    border: 1px solid #1b9fe2;
                    border-radius: 30px;
                    display: block;
                    margin: 0 auto;
                }
                a{
                    width: 67px;
                    height: 25px;
                    background-color: #1b9fe2;
                    color: #fff;
                    margin: 33px 0 5px 0;
                }
            }
            .info_boxs{
                padding: 6px 0 0;
                width: 84px;
                div{
                    height: 37px;
                    line-height: 37px;
                    font-size: 14px;
                    color: #1b9fe2;
                    
                    span{
                        float: left;
                    }
                    .sex{
                        width: 16px;
                        height: 16px;
                        margin-left: 12px;
                        background: url('./icon/women.png') no-repeat;
                        background-size: cover;
                        margin-top: 6px;
                    }
                    .man{
                        background-image: url('./icon/man.png');
                    }
                }
                p{
                    padding-top: 4px;
                    line-height: 24px;
                    font-size: 12px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                }
            }
        }
    }
}

.three_box{
    padding: 20px;
    background-color: #fff;
    a{
        display: block;
        position: relative;
    }
    img{
        width: 365px;
        height: 200px;
    }
    .name{
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        font-size: 16px;
        background-color: rgba(0, 0, 0, 0.2);
        text-align: center;
        color: #fff;
        line-height: 40px;
    }
}
.visitor_total_num_box{
    background-color: #fff;
    height: 72px;
    div{
        width: 50%;
        text-align: center;
        line-height: 36px;
        color: #565858;
    }
    span{
        display: block;
    }
}

.news{
    width: 522px;
}
.notice{
    width: 240px;
}
.studio_new_list{
    padding: 28px 20px 3px;
    background-color: #fff;
    font-size: 0;
    li{
        margin-bottom: 24px;
        span{
            display: inline-block;
            vertical-align: middle;
            font-size: 14px;
        }
        .data{
            background-color: #1b9fe2;
            width: 48px;
            height: 35px;
            color: #fff;
            border-radius: 6px;
            box-sizing: border-box;
            padding: 0 4px;
            text-align: center;
            em{
                font-style: normal;
                display: inline-block;
                line-height: 18px;
                &:nth-child(2){
                    font-size: 12px;
                    text-align: right;
                    width: 36px;
                }
            }
        }
        .new_title{
            width: 138px;
            padding-left: 14px;
            line-height: 36px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #666566;
        }
    }
}

.carousel_box{
    position: relative;
    margin-top: 30px;
    padding: 40px 20px 40px;
    background-color: #fff;
    width: 248px;
    img{
        display: block;
        width: 100%;
        height: 100%;
    }
    span{
        position: absolute;
        box-sizing: border-box;
        height: 32px;
        padding: 0 22px;
        line-height: 32px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.2);
        color: #fff;
    }
}
.carousel_box{
    float: left;
    width: 248px;
    // height: 18px;
}
.sss{
    float: left;
}

.news_boxs{
    background-color: #fff;
    
}
.new_list_text{
    background-color: #fff;
    padding: 37px 0 28px;
    width: 206px;
    li{
        font-size: 14px;
        color: #666666;
        line-height: 38px;
        height: 38px;
        overflow: hidden;
        a{
            color: inherit;
        }
        &:nth-child(1){
            font-size: 20px;
            color: #1b9fe2;
        }
    }
}

.list_box{
    padding: 35px 20px 34px;
    background-color: #fff;
    li{
        width: 237px;
        a{
            background-color: red;
        }
        img{
            width: 100%;
            height: 206px;
        }
        .name{
            text-align: center;
            padding: 0;
            line-height: 52px;
            margin-top: 10px;
            background-color: #f3f5f7;
            box-shadow: 0 1px 3px #ccc;
        }
    }
}

.resource_and_text{
    .item{
        width: 380px;
    }
}

.resource_info_box{
    padding: 24px 22px 16px;
    background-color: #fff;
    .img_box{
        width: 164px;
        height: 110px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .resource_info{
        width: 160px;
        .title{
            line-height: 30px;
            font-size: 14px;
            color: #152433;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .sys{
            font-size: 12px;
            line-height: 22px;
            color: #8c8c8c;
        }
        .name_time{
            font-size: 14px;
            line-height: 30px;
            margin-top: 8px;
            color: #152433;
            span{
                width: 33%;
                text-align: center;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                &:nth-child(1){
                    text-align: left;
                }
                &:nth-child(3){
                    text-align: right;
                    em{
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        vertical-align: middle;
                        background-repeat: no-repeat;
                        background-size: cover;
                        margin-top: -2px;
                    }
                    .down{
                        background-image: url('./icon/down.png');
                    }
                    .eye{
                        background-image: url('./icon/eye.png');
                    }
                }
            }
        }
    }
}

.resource_info_list{
    background-color: #fff;
    padding: 0 22px 22px;
    li{
        line-height: 22px;
        margin-bottom: 10px;
    }
    .type{
        width: 98px;
        height: 22px;
        background-color: #1b9fe2;
        border-radius: 11px;
        margin-right: 12px;
        color: #fff;
        text-align: center;
    }
    .title{
        width: 118px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 12px;
    }
    .name{
        width: 55px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .time{
        width: 40px;
        text-align: right;
    }
}

.teaching_and_researching_activity{
    background-color: #fff;
    padding: 0 20px 10px;
    font-size: 14px;
    line-height: 36px;
    text-align: left;
    color: #152433;
    li:first-child{
        font-weight: 600;
        color: #1b9fe2;
        line-height: 50px;
    }
    .title{
        width: 300px;
    }
    .name{
        width: 100px;
        color: #1b9fe2;
        a{
            color: inherit;
        }
    }
    .io{
        width: 58px;
        margin-right: 68px;
    }
    .start_end{
        width: 186px;
        text-align: center;
    }
}
.video_show_box{
    position: relative;
    .video_play{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        .play{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 48px;
            height: 48px;
            background: url('./icon/play.png') no-repeat;
            background-size: cover;
        }
    }
    &:hover{
        .video_play{
            display: block;
        }
    }
}
// .resource_list_box{
//     margin: 17px 20px;
//     background-color: #fff;
//     overflow: hidden;
// }
.resource_list{
    padding: 15px 20px 14px;
    li{

        .time{
            width: 85px;
            font-size: 12px;
            color: #949ca2;
            line-height: 56px;
            margin-top: 10px;
        }
        .line{
            width: 1px;
            height: 104px;
            background-color: #a0d2f9;
            position: relative;
            &:after{
                content: '';
                position: absolute;
                top: 32px;
                left: -5px;
                width: 11px;
                height: 11px;
                background-color: #a0d2f9;
                border-radius: 6px;
            }
        }
        .head_pic{
            width: 56px;
            height: 56px;
            border-radius: 28px;
            overflow: hidden;
            margin:10px 16px 0 15px;
            border: 1px solid rgba(0, 0, 0, 0);
            &:hover{
                border-color: #1b9fe2;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
        .info{
            width: 165px;
            margin-top: 10px;
            .name,span{
                display: block;
            }
            .name{
                font-size: 16px;
                line-height: 26px;
                color: #363622;
                &:hover{
                    color: #1b9fe2;
                }
            }
            span{
                font-size: 14px;
                line-height: 34px;
                color: #555555;
                height: 68px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
        }
    }
}
.leave_message_box{
    padding: 33px 20px 30px;
    background-color: #fff;
    li{
        margin-bottom: 44px;
        &:last-child{
            margin-bottom: 0;
        }
    }
    .head_pic{
        width: 58px;
        height: 58px;
        border-radius: 29px;
        overflow: hidden;
        margin: 0 14px 0 0;
        img{
            width: 58px;
            height: 58px;
        }
    }
    .people_info{
        width: 195px;
        span{
            display: inline-block;
            vertical-align: middle;
        }
        line-height: 30px;
        .text{
            width: 148px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .name{
        font-size: 16px;
        color: #5e5c5a;
        .line{
            width: 16px;
            height: 16px;
            background: url('./icon/personal.png') no-repeat;
            border-right: 1px solid #bebebe;
            padding-right: 12px;
            margin-right: 12px;
        }
    }
    .msg{
        font-size: 14px;
        color: #878585;
        .line{
            width: 16px;
            height: 16px;
            background: url('./icon/pen.png') no-repeat;
            border-right: 1px solid #bebebe;
            padding-right: 12px;
            margin-right: 12px;
        }

    }
    .time{
        color: #7f818a;
        font-size: 14px;
        line-height: 30px;
    }
}
</style>
