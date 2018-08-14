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
            <el-main class="resource_lixt_box box-shadow">
                <div class="title_box">
                    <h3 class="column_title">
                        <div class="t_l">LINE</div>
                        <div class="t_c">专题资源</div>
                    </h3>
                </div>
                <div>
                    <ul class="resource_list">
                        <li>
                            <!-- word ppt pdf -->
                            <span class="icon word"></span>
                            <span class="name">
                                <a href="">资源名称</a>
                            </span>
                            <span class="type">PDF</span>
                            <span class="person">
                                <a href="">name</a>
                            </span>
                            <span class="time">2018-06-60</span>
                            <span class="down_num">
                                <a href="">
                                    <em></em>下载10次
                                </a>
                            </span>
                        </li>
                        <li>
                            <!-- word ppt pdf -->
                            <span class="icon word"></span>
                            <span class="name">
                                <a href="">资源名称</a>
                            </span>
                            <span class="type">PDF</span>
                            <span class="person">
                                <a href="">name</a>
                            </span>
                            <span class="time">2018-06-60</span>
                            <span class="down_num">
                                <a href="">
                                    <em></em>下载10次
                                </a>
                            </span>
                        </li>
                        <li>
                            <!-- word ppt pdf -->
                            <span class="icon word"></span>
                            <span class="name">
                                <a href="">资源名称</a>
                            </span>
                            <span class="type">PDF</span>
                            <span class="person">
                                <a href="">name</a>
                            </span>
                            <span class="time">2018-06-60</span>
                            <span class="down_num">
                                <a href="">
                                    <em></em>下载10次
                                </a>
                            </span>
                        </li>
                        <li>
                                <!-- word ppt pdf -->
                                <span class="icon word"></span>
                                <span class="name">
                                    <a href="">资源名称</a>
                                </span>
                                <span class="type">PDF</span>
                                <span class="person">
                                    <a href="">name</a>
                                </span>
                                <span class="time">2018-06-60</span>
                                <span class="down_num">
                                    <a href="">
                                        <em></em>下载10次
                                    </a>
                                </span>
                            </li>
                    </ul>
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="500"
                        class="page_box"
                    >
                    </el-pagination>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Crumbs from "@/components/global/crumbs";
export default {
    components: {
        Crumbs
    },
    data(){
        return {
            activeIndexF:''
        }
    },
    computed:{
        menuList(){
            let data = this.$getNavNow(this.$store.getters.navList,this.$route.query.navId);
            if(data){
                return data;
            }else{
                this.$router.push({name:'notFound'})
            }
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
            console.log(index,indexPath);
            
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
        .word{
            background-image: url('./icon/word.png');
        }
        .pdf{
            background-image: url('./icon/pdf.png');
        }
        .ppt{
            background-image: url('./icon/ppt.png');
        }
        .name{
            width: 318px;
            color: #1b9fe2;
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
