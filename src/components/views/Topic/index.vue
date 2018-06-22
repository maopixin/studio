<template>
    <div class="content">
        <crumbs/>
        <div class="container clearfix">
            <div class="topic_list box-shadow fl">
                <div class="title_box">
                    <h3 class="column_title">
                        <div class="t_l">LINE</div>
                        <div class="t_c">话题列表</div>
                    </h3>
                </div>
                <div>
                    <ul class="topic-list">
                        <li 
                            class="clearfix"
                            v-for="(item,index) in 10"
                            :key='index'
                        >
                            <div class="data-box fl">
                                <img src="@icon/msg.png" alt="">
                                <span>999</span>
                            </div>
                            <div class="data-box fl">
                                <img src="@icon/eye.png" alt="">
                                <span>999</span>
                            </div>
                            <div class="topic-info fl">
                                <div class="topic-title clearfix">
                                    <span class="set-top fl">
                                        置顶
                                    </span>
                                    <h4 class="fl">
                                        我是标题
                                    </h4>
                                </div>
                                <div class="return">
                                    学习了
                                </div>
                            </div>
                            <div class="topic-person-info fl">
                                <div class="item clearfix">
                                    <img src="@icon/person.png" alt=""/>
                                    <a href="" class="master">
                                        发起人
                                    </a>
                                    <time>2018-04-19</time>
                                </div>
                                <div class="item clearfix">
                                    <img src="@icon/msg2.png" alt=""/>
                                    <a href="">
                                        回复人
                                    </a>
                                    <time>2018-04-19</time>
                                </div>
                            </div>
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
            <div class="hot_topic box-shadow fr">
                <div class="title_box">
                    <h3 class="column_title">
                        <div class="t_l">LINE</div>
                        <div class="t_c">热门话题</div>
                    </h3>
                </div>
                <div>
                    <example-list></example-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Crumbs from '@/components/global/crumbs';
import ExampleList from '@/components/global/ExampleList.vue';
export default {
    components: {
        Crumbs,
        ExampleList
    },
    name:'topic',
}
</script>

<style lang='less' scoped>
    .page_box{
        padding: 20px 0;
        background-color: #fff;
        text-align: center;
    }
    .content{
        width: 1140px;
        margin: 0 auto;
        .topic_list{
            width: 775px;
        }
        .hot_topic{
            width: 337px;
        }
    }
    .container{
        overflow: visible;
    }
    .topic-list{
        background-color: #fff;
        li{
            border-bottom: 1px solid #e9e9e9;
            padding: 23px 18px 27px;
            .data-box{
                box-sizing: border-box;
                padding-top: 9px;
                width: 73px;
                height: 73px;
                margin-right: 9px;
                border: 1px solid #dfdfdf;
                border-radius: 37.5px;
                img{
                    display: block;
                    height: 20px;
                    margin: 0 auto;
                }
                span{
                    display: block;
                    width: 100%;
                    text-align: center;
                    color: #36a9e2;
                    font-size: 14px;
                    line-height: 45px;
                }
            }
            .topic-info{
                font-size: 14px;
                width: 385px;
                .topic-title{
                    padding-top: 10px;
                    .set-top{
                        width: 36px;
                        height: 20px;
                        background-color: red;
                        text-align: center;
                        color: #fff;
                        font-size: 12px;
                        line-height: 20px;
                        border-radius: 10px;
                        margin-right: 6px;
                    }
                    h4{
                        font-size: 16px;
                        line-height: 20px;
                        color: #43aee4;
                    }
                }
                .return{
                    color: #a3a3a3;
                    line-height: 20px;
                    margin-top: 20px;
                }
            }
            .topic-person-info{
                .item{
                    padding-top: 6px;
                    height: 18px;
                    &:nth-child(2){
                        padding-top: 26px;
                    }
                    img{
                        float: left;
                        width: 17px;
                        height: 17px;
                        margin-right: 8px;
                    }
                    a{
                        float: left;
                        font-size: 14px;
                        line-height: 18px;
                        width: 66px;
                        color: #666666;
                    }
                    .master{
                        color: #ffa740;
                    }
                    time{
                        float: left;
                        line-height: 18px;
                        color: #ababab;
                    }
                }
            }
        }
    }
</style>
