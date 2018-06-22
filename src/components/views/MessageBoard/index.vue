<template>
    <div class="content">
        <crumbs/>
        <div class="">
            <div class="title_box">
                <h3 class="column_title">
                    <img src="@icon/msg3.png"/>
                    <div class="t_c">名师寄语</div>
                </h3>
            </div>
            <div class="msg-box">
                <div class="msg-state">
                    暂无 留言（<span>1600</span>条）
                </div>
                <ul class="msg-list">
                    <li 
                        class="msg-list-item"
                        v-for="(item,index) in 5"
                        :key='index'
                    >
                        <div class="clearfix">
                            <div class="fl head_pic">
                                <img src="https://avatar.csdn.net/9/5/5/3_mr_hexs.jpg" alt="">
                            </div>
                            <div class="fl msg-info">
                                <div class="name">张三</div>
                                <div class="talk">学习</div>
                                <div class="time">
                                    <time class="fl">2017-02-02 14:07</time>
                                    <span class="fr">回复（100）</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul class="reply-list">
                                <li class="reply-list-item">
                                    <div class="clearfix">
                                        <div class="fl head_pic">
                                            <img src="https://avatar.csdn.net/9/5/5/3_mr_hexs.jpg" alt="">
                                        </div>
                                        <div class="fl msg-info">
                                            <div class="name">张三</div>
                                            <div class="talk">学习</div>
                                            <div class="time">
                                                <time class="fl">2017-02-02 14:07</time>
                                                <span class="fr">回复（100）</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
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
    </div>
</template>

<script>
import Crumbs from '@global/crumbs'
export default {
    name:'MessageBoard',
    components: {
        Crumbs
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang='less' scoped>
    .content{
        width: 1140px;
        margin: 0 auto;
    }
    .column_title{
        img{
            display: inline-block;
            vertical-align: middle;
        }
    }
    .msg-box{
        padding:0 20px;
        background-color: #fff;
    }
    .msg-state{
        line-height: 62px;
        font-size: 14px;
        border-bottom: 1px solid #e3e3e3;
        span{
            color: #1b9fe2;
        }
    }
    .msg-list{
        .msg-list-item{
            padding: 22px 8px 0;
            border-bottom: 1px solid #e3e3e3;
        }
        li{
            .head_pic{
                padding-bottom: 30px;
                margin-right: 20px;
                img{
                    width: 48px;
                    height: 48px;
                }
            }
            .msg-info{
                width: 1016px;
                .name{
                    font-size: 14px;
                    line-height: 26px;
                    color: #53b7ec;
                }
                .talk{
                    font-size: 12px;
                    line-height: 22px;
                    color: #000;
                }
                .time{
                    font-size: 14px;
                    line-height: 22px;
                    .fr{
                        color: #1b9fe2;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .reply-list{
        padding-left: 68px;
        li{
            border-top: 1px solid #e3e3e3;
            padding: 22px 0 0;
            .msg-info{
                width: 948px !important;
            }
        }
        
    }
</style>
