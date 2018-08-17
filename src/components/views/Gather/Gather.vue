<template>
    <div>
        <loading
            v-if="!navL"
        />
        <div
            v-if="navL"
        >
            <Crumbs :title='menuList[activeF].title'/>
            <el-container class="content">
                <el-row class="tac" :gutter="20">
                    <el-col :span="24">
                        <el-menu
                            :default-active='activeF'
                            class="el-menu-vertical-demo box-shadow"
                            @open="handleOpen"
                            @close="handleClose"
                            @select="handleSelect"
                        >
                            <el-menu-item
                                v-for="(item,index) in menuList"
                                :key='index'
                                :index='index+""'
                            >
                                <i class="el-icon-tickets"></i>
                                <span slot="title">{{item.title}}</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
                <el-main class="information_list box-shadow">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">{{getType[activeF]}}</div>
                        </h3>
                    </div>
                    <loading v-show="menuList[activeF].l"/>
                    <fail v-show="menuList[activeF].fail"/>
                    <div
                        v-for="(item,index) in menuList"
                        v-show="activeF==index"
                        :key='index'
                    >
                        <ul 
                            class="information_list_box"
                            v-show="!menuList[index].l"
                        >
                            <!-- *10 -->
                            <li 
                                class="clearfix"
                                v-for="(e) in item.list"
                                :key="e.id"
                            >
                                <span class="title">
                                    <a href="">{{e.title}}</a>
                                </span>
                                <span class="name">
                                    <a href="">{{e.username}}</a>
                                </span>
                                <span class="time">{{e.utime.y+"-"+e.utime.m+"-"+e.utime.d}}</span>
                            </li>
                        </ul>
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="Number(menuList[index].total)"
                            class="page_box"
                            :page-size='pre_page'
                            @current-change='pageChange'
                        >
                        </el-pagination>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
import Crumbs from "@/components/global/crumbs";
import Loading from '@global/Loading';
import Fail from '@global/Fail'
import {getStudioData} from '@api/index'
export default {
    components:{
        Crumbs,
        Loading,
        Fail
    },
    data(){
        return {
            menuList:[
                {
                    title:'工作室资讯',
                    list:[],
                    total:0,
                    l:true,
                    fail:false,
                    first:true
                },
                {
                    title:'工作室通告',
                    list:[],
                    total:0,
                    l:true,
                    fail:false,
                    first:true
                },
                {
                    title:'成果展示',
                    list:[],
                    total:0,
                    l:true,
                    fail:false,
                    first:true
                }
            ],
            activeF:'0',
            pre_page:10,
            getType:['资讯','通告','成果展示']
        }
    },
    methods:{
        handleOpen(key, keyPath) {

        },
        handleClose(key, keyPath) {

        },
        handleSelect(index,indexPath){
            this.activeF = index;
            this.$router.push({
                name:'gather',
                query:{
                    mid:index
                }
            });
            if(this.menuList[index].first){
                getStudioData({
                    id:this.$route.params.id,
                    category_id:this.$store.getters.bodyList[this.getType[index]].id,
                    pre_page:this.pre_page,
                }).then(data=>{
                    console.log(data,this.getType[index]);
                    this.menuList[index].l = false;
                    if(data.status.code==0){
                        this.menuList[index].list = data.data.list;
                        this.menuList[index].first = false;
                        this.menuList[index].total = data.data.total;
                    }else{
                        this.menuList[index].fail = true;
                    }
                }).catch(error=>{
                    this.menuList[index].fail = true;
                })
            };
        },
        pageChange(page){
            let index = this.activeF;
            this.menuList[index].l = true;
            getStudioData({
                id:this.$route.params.id,
                category_type_name:this.getType[index],
                pre_page:this.pre_page,
                page:page
            }).then(data=>{
                console.log(data,this.getType[index]);
                this.menuList[index].l = false;
                if(data.status.code==0){
                    this.menuList[index].list = data.data.list;
                    this.menuList[index].total = data.data.total;
                }else{
                    this.menuList[index].fail = true;
                }
            }).catch(error=>{
                this.menuList[index].fail = true;
            })
        }
    },
    computed:{
        bodyList(){
            return this.$store.getters.bodyList;
        },
        navL(){
            return this.$store.getters.navL;
        }
    },
    created(){
        // 初次加载需要等待导航请求结束，并且拿到bodylist ,如果为假 代表nav请求未结束，此时会走watch
        if(this.$store.getters.navL){
            let index = this.$getQuery('mid');
            this.activeF = index;
            getStudioData({
                id:this.$route.params.id,
                category_id:this.$store.getters.bodyList[this.getType[index]].id,
                pre_page:this.pre_page
            }).then(data=>{
                console.log(data,this.getType[index]);
                this.menuList[index].l = false;
                if(data.status.code==0){
                    this.menuList[index].list = data.data.list;
                    this.menuList[index].first = false;
                    this.menuList[index].total = data.data.total;
                }else{
                    this.menuList[index].fail = true;
                }
            }).catch(error=>{
                this.menuList[index].fail = true;
            })
        }
    },
    watch:{
        bodyList(){
            // 初次加载需要等待导航请求结束，并且拿到bodylist
            let index = this.$getQuery('mid');
            this.activeF = index;
            getStudioData({
                id:this.$route.params.id,
                category_id:this.$store.getters.bodyList[this.getType[index]].id,
                pre_page:this.pre_page
            }).then(data=>{
                console.log(data,this.getType[index]);
                this.menuList[index].l = false;
                if(data.status.code==0){
                    this.menuList[index].list = data.data.list;
                    this.menuList[index].first = false;
                    this.menuList[index].total = data.data.total;
                }else{
                    this.menuList[index].fail = true;
                }
            }).catch(error=>{
                this.menuList[index].fail = true;
            })
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
.nav{
    height: 60px;
    background-color: #393D49;
}
.tac{
    width: 240px;
}
.content{
    position: relative;
}
.information_list{
    background-color: #fff;
    font-size: 14px;
    color: #555555;
    a{
        color: inherit;
    }
    .information_list_box{
        line-height: 62px;
        li{
            height: 62px;
            border-bottom: 1px solid #dfdfdf;
            padding: 0 42px;
        }
        span{
            float: left;
        }
        .title{
            width: 540px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .name{
            width: 88px;
            text-align: center;
        }
        .time{
            width: 136px;
            text-align: right;
        }
    }
}  
.page_box{
    text-align: center;
    padding: 20px 0;
}
</style>
