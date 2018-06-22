<template>
    <div>
        <Crumbs/>
        <el-container class="content">
            <NavMenu/>
            <el-main>
                <div>
                    <el-input placeholder="请输入内容" v-model="searchValue" clearable class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <div class="margin_t">
                    <div class="title_box">
                        <h3 class="column_title">
                            <div class="t_l">LINE</div>
                            <div class="t_c">特色展示</div>
                        </h3>
                    </div>
                    <div>
                        <ul class="characteristic_list">
                            <li 
                                class="clearfix"
                                v-for="(item,index) in 10"
                                :key='index'
                            >
                                <span class="title">
                                    <a href="">标标题标题标题标题标题题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</a>
                                </span>
                                <span class="studio_name">工作室名称</span>
                                <span class="time">时间yyyy-mm-dd</span>
                                <span class="browse_num">浏览（1000）</span>
                            </li>
                        </ul>
                        <el-pagination
                            class="page_box"
                            background
                            layout="prev, pager, next"
                            :total="1000">
                        </el-pagination>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Crumbs from '@/components/global/crumbs';
import NavMenu from '@/components/global/NavMenu'
export default {
    name:'characteristic',
    components: {
        Crumbs,
        NavMenu
    },
    data(){
        return {
            searchValue:''
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
                width: 358px;
                color: #000;
                line-height: 25px;
            }
            .studio_name{
                width: 158px;
            }
            .time{
                width: 160px;
            }
            .browse_num{
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
