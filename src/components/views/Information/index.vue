<template>
    <div>
        <Crumbs/>
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
                            v-for="(e,i) in menuList.child"
                            :key='i'
                            :index='i+""'
                            :disabled='e.disabled'
                        >
                            <i class="el-icon-tickets"></i>
                            <span slot="title">{{e.name}}</span>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
            <el-main class="information_list box-shadow">
                <div class="title_box">
                    <h3 class="column_title">
                        <div class="t_l">LINE</div>
                        <div class="t_c">资讯</div>
                    </h3>
                </div>
                <div>
                    <loading v-if="l"/>
                    <fail v-if="data1.fail"/>
                    <ul v-if="!l && !data1.fail" class="information_list_box">
                        <!-- *10 -->
                        <li 
                            class="clearfix"
                            v-for = "(item) in data1.data.list"
                            :key = 'item.id'
                        >
                            <span class="title">
                                <a href="">{{item.title}}</a>
                            </span>
                            <span class="name">
                                <a href="">name</a>
                            </span>
                            <span class="time">time</span>
                        </li>
                    </ul>
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="Number(data1.data.total)"
                        class="page_box"
                        v-show="!this.l"
                        :page-size='pre_page'
                        @current-change='data1ListChange'
                    >
                    </el-pagination>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Crumbs from "@/components/global/crumbs";
import Loading from '@global/Loading';
import Fail from '@global/Fail'
import {getStudioData} from '@api/index'
export default {
    name:'information',
    components: {
        Crumbs,
        NavMenu,
        Loading,
        Fail
    },
    data(){
        return {
            l:false,
            pre_page:10,
            data1:{
                data:{
                    list:[]
                },
                fail:false
            }
        }
    },
    created(){
        this.l = true;
        getStudioData({
            id:this.$route.params.id,
            category_type_name:'资讯',
            page:1,
            pre_page:this.pre_page,
        }).then(data=>{
            this.l = false
            console.log(data);
            if(data.status.code==0){
                this.data1.data = data.data
            }else{
                this.data1.fail = true;
            }
        }).catch(error=>{
            this.l = false;
            this.data1.fail = true;
        })
    },
    computed:{
        menuList(){
            let data = this.$getNavNow(this.$store.getters.navList,this.$getQuery('navId'));
            if(data){
                return data;
            }else{
                this.$router.push({name:'notFound'});
            }
        },
        activeIndexF(){
            let data = this.$getNavNow(this.$store.getters.navList,this.$getQuery('navId'));
            if(!data){
                this.$router.push({name:'notFound'})
            }
            for (let i = 0; i < data.child.length; i++) {
                if(data.child[i].id==this.$getQuery('mId')){
                    return i+'';
                }
            };
            return '0';
        }
    },
    methods:{
        data1ListChange(page){
            this.l = true;
            getStudioData({
                id:this.$route.params.id,
                category_type_name:'资讯',
                page:page,
                pre_page:this.pre_page,
            }).then(data=>{
                this.l = false
                console.log(data);
                if(data.status.code==0){
                    this.data1.data = data.data
                }else{
                    this.data1.fail = true;
                }
            }).catch(error=>{
                this.l = false;
                this.data1.fail = true;
            })
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(index,indexPath){
            this.$router.push({
                name:'information',
                query:{
                    navId:this.$route.query.navId,
                    mId:this.menuList.child[index].id
                }
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
