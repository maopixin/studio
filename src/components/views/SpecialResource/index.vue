<template>
    <div>
        <Crumbs :title='Breadcrumb'/>
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
            <el-main class="resource_lixt_box box-shadow">
                <div class="title_box">
                    <h3 class="column_title">
                        <div class="t_l">LINE</div>
                        <div class="t_c">{{menuList.child[activeIndexF].name}}</div>
                    </h3>
                </div>
                <div
                    
                >
                    <ul class="resource_list"
                        v-loading='loading'
                    >
                        <li
                            v-for="(item) in data.list"
                            :key='item.id'
                        >
                            <!-- word ppt pdf -->
                            <span class="icon" :class="item.file_type"></span>
                            <span class="name">
                                <a :href="item._link" target="_blank">{{item.title}}</a>
                            </span>
                            <span class="type">{{item.file_type}}</span>
                            <span class="person">
                                <a href="">{{item.username}}</a>
                            </span>
                            <span class="time">{{item.udate}}</span>
                            <!-- <span class="down_num">
                                <a href="">
                                    <em></em>下载{{item.hits}}次
                                </a>
                            </span> -->
                        </li>
                    </ul>
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="data.total"
                        class="page_box"
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
import {getStudioData} from '@api/index'
export default {
    components: {
        Crumbs
    },
    data(){
        return {
            data:{
                list:[],
                total:0
            },
            loading:true,
            Breadcrumb:''
        }
    },
    computed:{
        menuList(){
            let data = this.$getNavNow(this.$store.getters.navList,this.$route.query.navId || this.$getQuery('navId'));
            this.Breadcrumb = data.name;
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
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(index,indexPath){
            this.$router.push({
                name:'resource',
                query:{
                    navId:this.$route.query.navId,
                    mId:this.menuList.child[index].id
                }
            })
        },
        getFileType(str){
            var pos = str.replace(/.+\./, "");
            return pos.toLowerCase();
        },
        getList(){
            this.loading = true;
            getStudioData({
                id:this.$route.params.id,
                category_id:this.$route.query.mId,
                pre_page:10
            }).then(data=>{
                this.loading = false;
                if(data.status.code==0){
                    data.data.total = Number(data.data.total);
                    data.data.list.forEach(e => {
                        e.file_type = this.getFileType(e.title);
                    });
                    this.data = data.data;
                }else{

                }
            }).catch(error=>{
                console.log(error);
            })
        },
        pageChange(index){
             this.loading = true;
            getStudioData({
                id:this.$route.params.id,
                category_id:this.$route.query.mId,
                pre_page:10,
                page:index
            }).then(data=>{
                this.loading = false;
                if(data.status.code==0){
                    data.data.total = Number(data.data.total);
                    data.data.list.forEach(e => {
                        e.file_type = this.getFileType(e.title);
                    });
                    this.data = data.data;
                }
            })
        }
    },
    watch:{
        menuList(){
            this.getList()
        }
    },
    created(){
        if(this.$store.getters.navL){
            this.getList();
        }
    }
};
</script>

<style lang='less' scoped>
.page_box{
    text-align: center;
    padding: 20px 0;
}
.content{
    width: 1140px;
    margin: 0 auto;
    .tac{
        width: 285px;
    }
}
.resource_lixt_box{
    padding: 0;
    margin: 0 0 0 20px;
    background-color: #fff;
}
.resource_list{
    font-size: 0;
    li{
        padding: 0 20px;
        color: #666666;
        &:nth-child(2n){
            background-color: #eff3f5;
        }
        span{
            display: inline-block;
            vertical-align: middle;
            font-size: 16px;
            line-height: 50px;
        }
        .icon{
            width: 16px;
            height: 16px;
            background-repeat: no-repeat;
            background-size: cover;
            margin-right: 50px;
        }
        .avi{
            background-image: url('../TResource/icon/avi.png');
        }
        .doc{
            background-image: url('../TResource/icon/doc.png');
        }
        .exe{
            background-image: url('../TResource/icon/exe.png');
        }
        .html{
            background-image: url('../TResource/icon/html.png');
        }
        .rar{
            background-image: url('../TResource/icon/rar.png');
        }
        .rm{
            background-image: url('../TResource/icon/rm.png');
        }
        .txt{
            background-image: url('../TResource/icon/txt.png');
        }
        .wmv{
            background-image: url('../TResource/icon/wmv.png');
        }
        .xls{
            background-image: url('../TResource/icon/xls.png');
        }
        .xlsx{
            background-image: url('../TResource/icon/xls.png');
        }
        .word{
            background-image: url('../TResource/icon/word.png');
        }
        .pdf{
            background-image: url('../TResource/icon/pdf.png');
        }
        .ppt{
            background-image: url('../TResource/icon/ppt.png');
        }
        .zip{
            background-image: url('../TResource/icon/zip.png');
        }
        .pptx{
            background-image: url('../TResource/icon/pptx.png');
        }
        .mp4{
            background-image: url('../TResource/icon/mp4.png');
        }
        .mpg{
            background-image: url('../TResource/icon/mpg.png');
        }
        .name{
            width: 318px;
            width: 436px;
            color: #1b9fe2;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            a{
                color:inherit;
            }
        }
        .type{
            width: 90px;
        }
        .person{
            width: 90px;
            color: #1b9fe2;
            a{
                color:inherit;
            }
        }
        .time{
            width: 130px;
        }
        .down_num{
            width: 100px;
            font-size: 14px;
            em{
                display: inline-block;
                vertical-align: middle;
                width: 24px;
                height: 24px;
                background: url('./icon/down.png') no-repeat;
                background-size: cover;
                margin-right: 10px;
                margin-top: -2px;
            }
        }
    }
}
</style>
