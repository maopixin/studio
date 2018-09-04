<template>
    <div>
        <div>
            <Crumbs :title='menuList[activeIndexF].title'/>
            <el-container class="content">
                <el-row class="tac" :gutter="20">
                    <el-col :span="24">
                        <el-menu
                            :default-active='activeIndexF'
                            class="el-menu-vertical-demo box-shadow"
                            @open="handleOpen"
                            @close="handleClose"
                            @select="handleSelect"
                        >
                            <el-menu-item
                                v-for="(e,i) in menuList"
                                :key='i'
                                :index='i+""'
                                :disabled='e.disabled'
                            >
                                <i class="el-icon-tickets"></i>
                                <span slot="title">{{e.title}}</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
                <el-main>
                    <!-- 搜索 -->
                    <!-- <div>
                        <el-input placeholder="请输入内容" v-model="searchValue" clearable class="input-with-select">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </div> -->
                    <div class="box-shadow">
                        <div class="title_box">
                            <h3 class="column_title">
                                <div class="t_l">LINE</div>
                                <div class="t_c">{{menuList[activeIndexF].title}}</div>
                            </h3>
                        </div>
                        <loading v-show="menuList[activeIndexF].l"/>
                        <fail v-show="menuList[activeIndexF].fail"/>
                        <not-more v-if="!menuList[activeIndexF].l && !menuList[activeIndexF].fail && menuList[activeIndexF].list.length<=0"/>
                        <div v-show="!menuList[activeIndexF].l && !menuList[activeIndexF].fail && menuList[activeIndexF].list.length>0">
                            <ul class="characteristic_list">
                                <li 
                                    class="clearfix"
                                    v-for="(item) in menuList[activeIndexF].list"
                                    :key='item.id'
                                >
                                    <span class="title">
                                        <a :href="item._link" target="_blank">{{item.title}}</a>
                                    </span>
                                    <span class="name">{{item.username}}</span>
                                    <span class="time">{{item.utime.y+"-"+item.utime.m+'-'+item.utime.d}}</span>
                                    <span class="num">浏览({{item.hits}})</span>
                                </li>
                            </ul>
                            <el-pagination
                                class="page_box"
                                background
                                layout="prev, pager, next"
                                :total="menuList[activeIndexF].total"
                                :page-size='pre_page'
                                @current-change='pageChange'
                            >
                            </el-pagination>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
import Crumbs from '@/components/global/crumbs';
import Loading from '@global/Loading';
import Fail from '@global/Fail';
import NotMore from '@global/NotMore'
import {getStudioObj} from '@api/index';
export default {
    name:'characteristic',
    components: {
        Crumbs,
        Loading,
        Fail,
        NotMore
    },
    data(){
        return {
            searchValue:'',
            activeIndexF:'0',
            menuList:[
                {
                    title:'教师文章',
                    list:[],
                    total:0,
                    l:false,
                    fail:false
                }
            ],
            pre_page:10
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(index,indexPath){
            this.activeIndexF = index;
        },
        pageChange(page){
            let index = this.activeIndexF;
            let st = this.menuList[index].title;
            this.menuList[index].l = true;
            getStudioObj({
                studio:this.$route.params.id,
                category_name:'教师文章',
                pre_page:this.pre_page,
                page:page
            }).then(data=>{
                this.menuList[index].l = false;
                if(data.status.code==0){
                    this.menuList[index].list = data.data.list;
                    this.menuList[index].total = Number(data.data.total);
                }else{
                    this.menuList[index].fail = true;
                }
            }).catch(error=>{
                this.menuList[index].fail = true;
            });
        }
    },
    created(){
        let index = this.activeIndexF;
        let st = this.menuList[index].title;
        this.menuList[index].l = true;
        getStudioObj({
            studio:this.$route.params.id,
            category_name:'教师文章',
            pre_page:this.pre_page
        }).then(data=>{
            this.menuList[index].l = false;
            if(data.status.code==0){
                this.menuList[index].list = data.data.list;
                this.menuList[index].total = Number(data.data.total);
            }else{
                this.menuList[index].fail = true;
            }
        }).catch(error=>{
            this.menuList[index].fail = true;
        });
    },
    watch:{
        
    },
    computed:{
        
    },
}
</script>

<style lang='less' scoped>
    .tac{
        width: 285px;
    }
    .content{
        width: 1140px;
        margin: 0 auto;
    }
    .el-main{
        padding: 0 0 0 20px;
    }
    .characteristic_list{
        background-color: #fff;
        padding: 20px;
        li{
            height: 80px;
            line-height: 80px;
            padding: 0 10px;
            border-bottom: 1px solid #efefef;
            &:hover{
                background-color: #eff3f5;
            }
            span{
                display: inline-block;
                vertical-align: middle;
                color:#acacac;
            }
            .title{
                width: 420px;
                color: #000;
                line-height: 25px;
            }
            .name{
                width: 120px;
                text-align: center;
                margin-right: 20px;
            }
            .time{
                width: 120px;
            }
            .num{
                width: 90px;
            }
        }
    }
    .page_box{
        padding: 20px 0;
        text-align: center;
        background-color: #fff;
    }
</style>
