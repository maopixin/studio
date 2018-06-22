<template>
    <ul class="activity_list">
        <li 
            class="clearfix"
            v-for="(item,index) in 5"
            :key='index'
        >
            <div class="pic_box fl">
                <img src="http://img.zjer.cn/uploads1/800x800/studio/album/2018/0610/149/5b1d100c0ffb2..jpg" alt="">
                <span>线上</span>
            </div>
            <div class="activity_info fl">
                <div class="title clearfix">
                    <h4 class="fl">如何更好的啊哈塞德里克哈哈对考拉山东龙口哈圣诞快乐哈</h4>
                    <span class="fl">进行中</span>
                </div>
                <div class="time">
                    起止时间：2018-05-31 09:51:29至2018-06-13 09:51:31
                </div>
                <div class="number clearfix">
                    <span class="person fl">创建者：毛丕新</span>
                    <span class="person_num fl">参与人数：212</span>
                </div>
                <div class="sys">
                    <span class="fl">活动描述：啊说的话啊是的卡拉汉上课了啊黑色的卡拉汉顺利的话阿历山大卡拉什德库拉货收到了哈喽</span>
                    <a href="">立即参与</a>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang='less' >
    .el-tabs__content{
        overflow: visible;
    }
    .activity_list{
        li{
            padding: 24px 0;
            border-bottom: 1px solid #eeeeee;
        }
        .pic_box{
            width: 156px;
            height: 115px;
            margin: 0 14px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            span{
                width: 60px;
                height: 30px;
                background: url('./img/line.png') no-repeat ;
                position: absolute;
                top: 8px;
                left: -6px;
                color: #fff;
                line-height: 36px;
                text-indent: 1em;
                font-size: 12px;
            }
        }
        .activity_info{
            width: 518px;
            .title{
                h4{
                    font-size: 16px;
                    line-height: 24px;
                    color: #333333;
                    width: 329px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                span{
                    width: 72px;
                    height: 17px;
                    background: url('./img/going.png') no-repeat;
                    color: #fff;
                    font-size: 12px;
                    text-indent: 1em;
                    line-height: 18px;
                }
            }
            .time{
                font-size: 12px;
                line-height: 18px;
                margin-top: 15px;
                color: #666666;
            }
            .number{
                color: #1b9fe2;
                font-size: 14px;
                line-height: 36px;
                .person{
                    width: 250px;
                }
            }
            .sys{
                span{
                    width: 398px;
                    font-size: 14px;
                    line-height: 22px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                a{
                    width: 96px;
                    height: 30px;
                    background-color: red;
                    border-radius: 15px;
                    float: left;
                    text-align: center;
                    color: #fff;
                    line-height: 30px;
                    margin: -10px 0 0 20px;
                }
            }
        }
    }
</style>
