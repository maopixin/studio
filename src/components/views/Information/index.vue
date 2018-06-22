<template>
    <div>
        <Crumbs/>
        <el-container class="content">
            <NavMenu/>
            <el-main class="information_list box-shadow">
                <div class="title_box">
                    <h3 class="column_title">
                        <div class="t_l">LINE</div>
                        <div class="t_c">基本任务建设进度</div>
                    </h3>
                </div>
                <div>
                    <ul class="information_list_box">
                        <!-- *10 -->
                        <li class="clearfix">
                            <span class="title">
                                <a href="">标题</a>
                            </span>
                            <span class="name">
                                <a href="">name</a>
                            </span>
                            <span class="time">time</span>
                        </li>
                        <li class="clearfix">
                            <span class="title">
                                <a href="">标题</a>
                            </span>
                            <span class="name">
                                <a href="">name</a>
                            </span>
                            <span class="time">time</span>
                        </li>

                        <li class="clearfix">
                            <span class="title">
                                <a href="">标题</a>
                            </span>
                            <span class="name">
                                <a href="">name</a>
                            </span>
                            <span class="time">time</span>
                        </li>
                        <li class="clearfix">
                            <span class="title">
                                <a href="">标题</a>
                            </span>
                            <span class="name">
                                <a href="">name</a>
                            </span>
                            <span class="time">time</span>
                        </li>
                        <li class="clearfix">
                            <span class="title">
                                <a href="">标题</a>
                            </span>
                            <span class="name">
                                <a href="">name</a>
                            </span>
                            <span class="time">time</span>
                        </li>
                        <li class="clearfix">
                            <span class="title">
                                <a href="">标题</a>
                            </span>
                            <span class="name">
                                <a href="">name</a>
                            </span>
                            <span class="time">time</span>
                        </li>
                        <li class="clearfix">
                            <span class="title">
                                <a href="">标题</a>
                            </span>
                            <span class="name">
                                <a href="">name</a>
                            </span>
                            <span class="time">time</span>
                        </li>

                        <li class="clearfix">
                            <span class="title">
                                <a href="">标题</a>
                            </span>
                            <span class="name">
                                <a href="">name</a>
                            </span>
                            <span class="time">time</span>
                        </li>
                        <li class="clearfix">
                            <span class="title">
                                <a href="">标题</a>
                            </span>
                            <span class="name">
                                <a href="">name</a>
                            </span>
                            <span class="time">time</span>
                        </li>
                        <li class="clearfix">
                            <span class="title">
                                <a href="">标题</a>
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
import NavMenu from '@/components/global/NavMenu';
export default {
    name:'information',
    components: {
        Crumbs,
        NavMenu
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
