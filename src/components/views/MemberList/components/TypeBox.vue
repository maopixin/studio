<template>
    <div class="container box-shadow">
        <div class="radio-box">
            <el-radio v-model="radio" label="1" border>总排行</el-radio>
            <el-radio v-model="radio" label="2" border>周排行</el-radio>
            <el-radio v-model="radio" label="3" border>月排行</el-radio>
        </div>
        <div class="person-num">
            共<span>758</span>位成员
        </div>
        <div>
            <ul class="person-list">
                <li class="clearfix">
                    <span class="ranking fl">排名</span>
                    <span class="name fl">姓名</span>
                    <span class="sex fl">性别</span>
                    <span class="role fl">角色</span>
                    <span class="identity fl">身份</span>
                    <span class="company fl">单位</span>
                    <span class="integral fl">积分</span>
                    <span class="social-contact fl">社交</span>
                </li>
                <li 
                    class="clearfix"
                    v-for="(item,index) in 15"
                    :key='index'
                >
                    <span class="ranking fl">
                        <span class="fl">{{index+1}}</span>
                        <img class="fl" src="https://avatar.csdn.net/2/8/2/3_qq_24122593.jpg" alt=""/>
                    </span>
                    <span class="name fl">毛丕新</span>
                    <span class="sex fl">男</span>
                    <span class="role fl">普通成员</span>
                    <span class="identity fl">学科带头人</span>
                    <span class="company fl">北京市大钟寺东联教育</span>
                    <span class="integral fl">88888</span>
                    <span class="social-contact fl"></span>
                </li>
            </ul>
            <el-pagination
                class="page_box"
                background
                layout="prev, pager, next"
                :total="30"
                :page-size='15'    
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name:'typebox',
    data(){
        return {
            radio:'1',
        }
    }
}
</script>

<style lang='less' scoped>
    .container{
        position: relative;
    }
    .radio-box{
        padding: 13px 20px 28px;
    }
    .person-num{
        position: absolute;
        top: 0;
        right: 20px;
        line-height: 58px;
        text-align: right;
        span{
            color: #0099ff;
            font-weight: 700;
        }
    }
    .person-list{
        li{
            height: 66px;
            line-height: 66px;
            background-color: #fff;
            color: #333333;
            &:nth-child(2n){
                background-color: #f5f6f7;
            }
            &:first-child{
                background-color: #e3e3e5;
                .integral{
                    color: #333333;
                }
            }
            &:nth-child(2){
                .ranking{
                    span{
                        background-color: #7ac2e6;
                    }
                }
            }
            &:nth-child(3){
                .ranking{
                    span{
                        background-color: #86ea9b;
                    }
                }
            }
            &:nth-child(4){
                .ranking{
                    span{
                        background-color: #ebb38d;
                    }
                }
            }
            .ranking{
                width: 142px;
                text-indent: 2em;
                span{
                    width: 26px;
                    height: 26px;
                    border-radius: 13px;
                    text-align: center;
                    color: #fff;
                    background-color: #cacaca;
                    font-size: 12px;
                    line-height: 26px;
                    text-indent: 0;
                    margin: 20px 46px 0 25px;
                }
                img{
                    width: 44px;
                    height: 44px;
                    border-radius: 22px;
                    margin-top: 11px;
                }
            }
            .name{
                width: 167px;
                text-align: center;
            }
            .sex{
                width: 28px;
                text-align: center;
                margin-right: 86px; 
            }
            .role{
                width: 95px;
            }
            .identity{
                width: 145px;
                text-align: center;
                margin-right: 24px;
            }
            .company{
                width: 280px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .integral{
                width: 80px;
                text-align: center;
                color: #1b9fe2;
            }
            .social-contact{
                width: 93px;
                text-align: center;
            }
        }
    }
</style>
