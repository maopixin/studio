<template>
    <div>
        <crumbs/>
        <div class="content">
            <el-input placeholder="请输入内容" v-model="input" class="input-with-select" :clearable='true'>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <ul class="day-lesson-list box-shadow">
                <li 
                    class="day-lesson-iten clearfix" 
                    v-for="(item,index) in 12"
                    :key='index'
                >
                    <div class="pic-box fl">
                        <img src="http://edu.dljy.com/files/article/2018/06-15/1626411add39863764.jpg" alt=""/>
                        <a href="" class="play-btn">
                            <img src="@icon/video-player.png" alt="">
                        </a>
                    </div>
                    <div class="lesson-info fl">
                        <div class="info-title clearfix">
                            <h4>科学于态度:曲线运动的准则</h4>
                            <span>日期:2018-01-19</span>
                        </div>
                        <div class="lesson-teacher">授课人：毛丕新</div>
                        <div class="lesson-evaluate">点评：讲的很好</div>
                        <div class="join-a">
                            <a href="" target="_blank">点击听课</a>
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
</template>

<script>
import Crumbs from '@global/crumbs'
export default {
    name:'DayLesson',
    components: {
        Crumbs
    },
    data(){
        return {
            input:''
        }
    }
}
</script>

<style lang='less' scoped>
    .content{
        width: 1140px;
        margin: 0 auto;
    }
    .el-input{
        width: 872px;
    }
    .day-lesson-list{
        margin-top: 46px;
        background-color: #fff;
        li{
            padding: 32px 20px;
            border-bottom: 1px solid #dedede;
            .pic-box{
                position: relative;
                img{
                    width: 273px;
                    height: 179px;
                    vertical-align: top;
                }
                a{
                    opacity: 0;
                    position: absolute;
                    transition: 0.5s;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    img{
                        display: block;
                        width: 50px;
                        height: 50px;
                        margin: 64px auto 0;
                    }
                    &:hover{
                        opacity: 1;
                    }
                }
            }
            .lesson-info{
                padding-left: 38px;
                width: 788px;
                color: #707070;
                .info-title{
                    h4{
                        float: left;
                        font-size: 16px;
                        line-height: 28px;
                        color: #333333;
                    }
                    span{
                        float: right;
                        font-size: 14px;
                        line-height: 28px;
                    }
                }
                .lesson-teacher{
                    font-size: 14px;
                    line-height: 34px;
                }
                .lesson-evaluate{
                    padding-top: 25px;
                    font-size: 14px;
                    line-height: 24px;
                    height: 48px;
                }
                .join-a{
                    width: 72px;
                    height: 24px;
                    margin-top: 20px;
                    a{
                        display: block;
                        background-color: red;
                        color: #fff;
                        border-radius: 6px;
                        font-size: 12px;
                        line-height: 24px;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>
