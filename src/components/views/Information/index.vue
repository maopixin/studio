<template>
    <div>
        <Crumbs :title='activeName'/>
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
                        <div class="t_c">{{activeName}}</div>
                    </h3>
                </div>
                <div>
                    <loading v-if="l"/>
                    <fail v-if="fail"/>
                    <not-more v-if="!l && !fail && data.list.length<=0"/>
                    <ul v-if="!l && !fail && data.list.length>0" class="information_list_box">
                        <!-- *10 -->
                        <li 
                            class="clearfix"
                            v-for = "(item) in data.list"
                            :key = 'item.id'
                        >
                            <span class="title">
                                <a :href="item._link" target="_blank">{{item.title}}</a>
                            </span>
                            <span class="name">
                                <a href="">{{item.username}}</a>
                            </span>
                            <span class="time">{{item.udate}}</span>
                        </li>
                    </ul>
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="Number(data.total)"
                        class="page_box"
                        v-show="!l && !fail && data.list.length>0"
                        :page-size='pre_page'
                        @current-change='pageChange'
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
import NotMore from '@global/NotMore'
import {getStudioData} from '@api/index'
export default {
    name:'information',
    components: {
        Crumbs,
        Loading,
        Fail,
        NotMore
    },
    data(){
        return {
            l:false,
            fail:false,
            pre_page:10,
            data:{
                list:[],
                total:0
            },
            activeName:''
        }
    },
    created(){
        if(this.$store.getters.navL){
            this.getList();
        }
        
    },
    computed:{
        menuList(){
            let data = this.$getNavNow(this.$store.getters.navList,this.$route.query.navId || this.$getQuery('navId'));
            if(data){
                data.child.unshift({
                    name:'全部',
                    id:this.$getQuery('navId')
                })
                return data;
            }else{
                this.$router.push({name:'notFound'});
            }
        },
        activeIndexF(){
            let data = this.$getNavNow(this.$store.getters.navList,this.$route.query.navId || this.$getQuery('navId'));
            if(!data){
                this.$router.push({name:'notFound'})
            }
            data.child.unshift({
                name:'全部',
                id:this.$getQuery('navId')
            })
            
            for (let i = 0; i < data.child.length; i++) {
                if(data.child[i].id==this.$getQuery('mId')){
                    this.activeName = data.child[i].name;
                    return i+'';
                }
            };
        },
    },
    watch:{
        menuList(){
            this.getList()
        }
    },
    methods:{
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
        },
        getList(){
            this.l = true;
            this.fail = false;
            getStudioData({
                id:this.$route.params.id,
                category_id:this.$getQuery('mId') || this.menuList.child[this.activeIndexF].id,
                pre_page:this.pre_page
            }).then(data=>{
                this.l = false;
                if(data.status.code==0){
                    this.data = data.data;
                }else{
                    this.$message.error('请求失败');
                    this.fail = true;
                }
            }).catch(error=>{
                this.$message.error('请求失败');
                this.l = false;
                this.fail = true;
            })
        },
        pageChange(index){
            this.l = true;
            this.fail = false;
            getStudioData({
                id:this.$route.params.id,
                category_id:this.$getQuery('mId') || this.menuList.child[this.activeIndexF].id,
                pre_page:this.pre_page,
                page:index
            }).then(data=>{
                this.l = false;
                if(data.status.code==0){
                    this.data = data.data;
                }else{
                    this.$message.error('请求失败');
                    this.fail = true;
                }
            }).catch(error=>{
                this.$message.error('请求失败');
                this.l = false;
                this.fail = true;
            })
        }
    },

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
.tac{
    width: 285px;
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
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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
