<template>
    <div>
        <div class="crumbs_box">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/institute/studio/'+this.$route.params.id }">工作室首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/institute/studio/'+this.$route.params.id+'/classroom' }">名师课堂</el-breadcrumb-item>
                <el-breadcrumb-item>{{navNow || '课程列表'}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content">
            <!-- 搜索框 -->
            <!-- <el-input placeholder="请输入内容" v-model="input" class="input-with-select" :clearable='true'>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input> -->
            <ul 
                class="day-lesson-list box-shadow"
                v-loading='loading'
            >
                <li 
                    class="day-lesson-iten clearfix" 
                    v-for="(item,index) in data.list"
                    :key='index'
                >
                    <div class="pic-box fl">
                        <img :src="item.media.large" alt=""/>
                        <a :href="item._link" target="_blank" class="play-btn">
                            <img src="@icon/video-player.png" alt="">
                        </a>
                    </div>
                    <div class="lesson-info fl">
                        <div class="info-title clearfix">
                            <h4>{{item.title}}</h4>
                            <span>日期:{{item.utime.y}}-{{item.utime.m}}-{{item.utime.d}}</span>
                        </div>
                        <div class="lesson-teacher">授课人：{{item.username}}</div>
                        <!-- <div class="lesson-evaluate">点评：讲的很好</div> -->
                        <div class="join-a">
                            <a :href="item._link" target="_blank">点击听课</a>
                        </div>
                    </div>
                </li>
            </ul>
            <el-pagination
                class="page_box"
                background
                layout="prev, pager, next"
                :total="Number(data.total)"
                :page-size='pre_page'
                @current-change='pageChange'
            >
            </el-pagination>

        </div>
    </div>
</template>

<script>
import Crumbs from '@global/crumbs'
import {getLessonMore} from '@api/index'
export default {
    name:'DayLesson',
    components: {
        Crumbs
    },
    data(){
        return {
            input:'',
            data:{
                list:[],
                total:0
            },
            loading:false,
            fail:false,
            pre_page:10
        }
    },
    methods:{
        getList(){
            this.loading = true;
            this.fail = false;
            getLessonMore({
                studio:this.$route.params.id,
                category_id:this.$getQuery('mId') || 'all',
                pre_page:this.pre_page
            }).then(data=>{
                this.loading = false;
                if(data.status.code==0){
                    this.data = data.data;
                }else{
                    this.$message.error('获取课程列表失败');
                    this.fail = true;
                }
            }).catch(error=>{
                this.$message.error('课程列表请求出错');
                this.loading = false;
                this.fail = true;
            })
        },
        pageChange(page){
            this.loading = true;
            this.fail = false;
            getLessonMore({
                studio:this.$route.params.id,
                category_id:this.$getQuery('mId') || 'all',
                pre_page:this.pre_page,
                page
            }).then(data=>{
                this.loading = false;
                if(data.status.code==0){
                    this.data = data.data;
                }else{
                    this.$message.error('获取课程列表失败');
                    this.fail = true;
                }
            }).catch(error=>{
                this.$message.error('课程列表请求出错');
                this.loading = false;
                this.fail = true;
            })
        }
    },
    created(){
        this.getList();
    },
    computed:{
        navNow(){
            let title = '';
            this.$store.getters.navList.forEach(e=>{
                if(e.id== (this.$getQuery('navId') || this.$route.query.navId)){
                    e.child.forEach(item=>{
                        console.log(item.id,this.$route.query.mId,item)
                        if(item.id == (this.$getQuery('mId') || this.$route.query.mId)){
                            console.log(item)
                            title = item.name;
                            return false;
                        }
                    })
                }
            })
            return title;
        }
    },
    watch:{
        '$route'(to,from){
            this.loading = true;
            this.fail = false;
            getLessonMore({
                studio:this.$route.params.id,
                category_id:to.query.mId,
                pre_page:this.pre_page
            }).then(data=>{
                this.loading = false;
                if(data.status.code==0){
                    this.data = data.data;
                }else{
                    this.$message.error('获取课程列表失败');
                    this.fail = true;
                }
            }).catch(error=>{
                this.$message.error('课程列表请求出错');
                this.loading = false;
                this.fail = true;
            })
        }

    }
}
</script>

<style lang='less' scoped>
    .crumbs_box{
        width: 1140px;
        margin: 0 auto;
        padding: 30px 0;
    }
    .content{
        width: 1140px;
        margin: 0 auto;
    }
    .el-input{
        width: 872px;
    }
    .day-lesson-list{
        margin-top: 46px;
        background-color: #fff;
        li{
            padding: 32px 20px;
            border-bottom: 1px solid #dedede;
            .pic-box{
                position: relative;
                img{
                    width: 273px;
                    height: 179px;
                    vertical-align: top;
                }
                a{
                    opacity: 0;
                    position: absolute;
                    transition: 0.5s;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    img{
                        display: block;
                        width: 50px;
                        height: 50px;
                        margin: 64px auto 0;
                    }
                    &:hover{
                        opacity: 1;
                    }
                }
            }
            .lesson-info{
                padding-left: 38px;
                width: 788px;
                height: 179px;
                position: relative;
                color: #707070;
                .info-title{
                    h4{
                        float: left;
                        font-size: 16px;
                        line-height: 28px;
                        color: #333333;
                    }
                    span{
                        float: right;
                        font-size: 14px;
                        line-height: 28px;
                    }
                }
                .lesson-teacher{
                    font-size: 14px;
                    line-height: 34px;
                }
                .lesson-evaluate{
                    padding-top: 25px;
                    font-size: 14px;
                    line-height: 24px;
                    height: 48px;
                }
                .join-a{
                    width: 72px;
                    height: 24px;
                    margin-top: 20px;
                    position: absolute;
                    bottom: 0;
                    left: 38px;
                    a{
                        display: block;
                        background-color: red;
                        color: #fff;
                        border-radius: 6px;
                        font-size: 12px;
                        line-height: 24px;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
