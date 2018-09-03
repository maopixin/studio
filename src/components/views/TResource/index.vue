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
                <el-main class="resource_lixt_box box-shadow">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">{{menuList[activeIndexF].title}}</div>
                        </h3>
                    </div>
                    <loading v-show="menuList[activeIndexF].l"/>
                    <fail v-show="menuList[activeIndexF].fail"/>
                    <div v-show="!menuList[activeIndexF].l && !menuList[activeIndexF].fail">
                        <ul class="resource_list">
                            <li
                                v-for="(item) in menuList[activeIndexF].list"
                                :key='item.id'
                            >
                                <!-- word ppt pdf -->
                                <span class="icon" :class="item.file_type"></span>
                                <span class="name">
                                    <a :href="item._link" target="_blank">{{item.title}}</a>
                                </span>
                                <span class="type">{{item.file_type||'未知类型'}}</span>
                                <span class="person">
                                    <a href="javascript:;">{{item.nackname}}</a>
                                </span>
                                <span class="time">{{item.utime.y+"-"+item.utime.m+"-"+item.utime.d}}</span>
                                <span class="down_num">
                                    <a href="javascript:;">
                                        <em></em>下载{{item.hits}}次
                                    </a>
                                </span>
                            </li>
                        </ul>
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="menuList[activeIndexF].total"
                            :page-size='pre_page'
                            class="page_box"
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
import Fail from '@global/Fail';
import {getStudioObj} from '@api/index'
export default {
    components: {
        Crumbs,
        Loading,
        Fail
    },
    data(){
        return {
            activeIndexF:'0',
            menuList:[
                {
                    title:'教学资源',
                    list:[],
                    l:true,
                    fail:false,
                    total:0
                }
            ],
            pre_page:10
        }
    },
    computed:{
        
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(index,indexPath){
            
        },
        getFileType(str){
            var pos = str.replace(/.+\./, "");
            return pos;
        },
        pageChange(page){
            let index = this.activeIndexF;
            let st = this.menuList[index].title;
            this.menuList[index].l = true;
            getStudioObj({
                studio:this.$route.params.id,
                category_name:'教学资源',
                pre_page:this.pre_page,
                page
            }).then(data=>{
                this.menuList[index].l = false;
                if(data.status.code==0){
                    let obj = data.data.list;
                    obj.forEach(e => {
                        e.file_type = this.getFileType(e.title);
                    });
                    this.menuList[index].list = obj;
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
            category_name:'教学资源',
            pre_page:this.pre_page
        }).then(data=>{
            this.menuList[index].l = false;
            if(data.status.code==0){
                let obj = data.data.list;
                obj.forEach(e => {
                    e.file_type = this.getFileType(e.title);
                });
                this.menuList[index].list = obj;
                this.menuList[index].total = Number(data.data.total);
            }else{
                this.menuList[index].fail = true;
            }
        }).catch(error=>{
            this.menuList[index].fail = true;
        });
        
    },
    watch:{
        bodyList(){
            let index = this.activeIndexF;
            let st = this.menuList[index].title;
            this.menuList[index].l = true;
            getStudioData({
                id:this.$route.params.id,
                category_id:this.bodyList[st].id,
                pre_page:this.pre_page
            }).then(data=>{
                this.menuList[index].l = false;
                if(data.status.code==0){
                    let obj = data.data.list;
                    obj.forEach(e => {
                        e.file_type = this.getFileType(e.title);
                    });
                    this.menuList[index].list = obj;
                    this.menuList[index].total = Number(data.data.total);
                }else{
                    this.menuList[index].fail = true;
                }
            }).catch(error=>{
                this.menuList[index].fail = true;
            });
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
            width: 18px;
            height: 18px;
            background-repeat: no-repeat;
            background-size: cover;
            margin-right: 50px;
        }
        .avi{
            background-image: url('./icon/avi.png');
        }
        .doc{
            background-image: url('./icon/doc.png');
        }
        .exe{
            background-image: url('./icon/exe.png');
        }
        .html{
            background-image: url('./icon/html.png');
        }
        .rar{
            background-image: url('./icon/rar.png');
        }
        .rm{
            background-image: url('./icon/rm.png');
        }
        .txt{
            background-image: url('./icon/txt.png');
        }
        .wmv{
            background-image: url('./icon/wmv.png');
        }
        .xls{
            background-image: url('./icon/xls.png');
        }
        .word{
            background-image: url('./icon/word.png');
        }
        .pdf{
            background-image: url('./icon/pdf.png');
        }
        .ppt{
            background-image: url('./icon/ppt.png');
        }
        .zip{
            background-image: url('./icon/zip.png');
        }
        .pptx{
            background-image: url('./icon/pptx.png');
        }
        .mp4{
            background-image: url('./icon/mp4.png');
        }
        .mpg{
            background-image: url('./icon/mpg.png');
        }
        .name{
            width: 318px;
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
