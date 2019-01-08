<template>
    <div class="content">
        <div class="box-shadow">
            <div class="title_box">
                <h3 class="column_title">
                    <div class="t_l">LINE</div>
                    <div class="t_c">名师简介</div>
                </h3>
            </div>
            <div class="clearfix teacher-info">
                <div class="fl teacher-pic">
                    <div class="pic-box">
                        <img :src="studioData.avatar" alt=""/>
                    </div>
                </div>
                
                <div class="fr teacher-text">
                    <div class="t-t">
                        <div class="name">
                            名师： <span>{{studioData.user.nickname}}</span>
                        </div>
                        <div class="clearfix">
                            <div class="fl">学科/专业：<span>{{studioData.subject_major}}</span></div>
                            <div class="fl">评定时间：<span>{{studioData.user_relation.honor_date}}</span></div>
                        </div>
                        <div class="clearfix">
                            <div class="fl">荣誉职称：<span>{{studioData.user_relation.honor}}</span></div>
                            <div class="fl">设立单位：<span>无</span></div>
                        </div>
                    </div>
                    <div class="info">
                        {{studioData.user_relation.synopsis}}
                    </div>
                </div>
            </div>
            <!-- <div class="plan-box">
                <div class="plan box-shadow">
                    <div class="title">
                        <i class="el-icon-date"></i>
                        <h4>工作室简介</h4>
                    </div>
                    <div class="p-box">
                        {{studioData.synopsis}}
                    </div>
                </div>
            </div> -->
        </div>
        <div class="margin_t">
            <div class="title_box">
                <h3 class="column_title">
                    <div class="t_l">LINE</div>
                    <div class="t_c">工作室简介</div>
                </h3>
            </div>
            <div class="studio_content">
                {{studioData.synopsis}}
            </div>
        </div>
    </div>
</template>

<script>
import {getStudioDetail} from '@api/index.js'
export default {
    data(){
        return {
            studioData:{
                user:{},
                user_relation:{}
            }
        }
    },
    created(){
        getStudioDetail({
            id:this.$route.params.id
        }).then(data=>{
            if(data.status.code==0){
                this.studioData = data.data;
            }
        }).catch(error=>{
            console.log(error)
        })
    }
}
</script>

<style lang='less' scoped>
    .content{
        width: 1140px;
        margin: 0 auto;
        padding: 20px 0;
    }
    .box-shadow{
        background-color: #fff;
    }
    .teacher-info{
        padding: 20px;
    }
    .teacher-pic{
        width: 306px;
        height: 256px;
        position: relative;
    }
    .teacher-text{
        width: 770px;
        .t-t{
            font-size: 16px;
            font-weight: 600;
            span{
                color: #4296d3;
            }
            .name{
                line-height: 78px;
                margin-bottom: 10px;
                position: relative;
                &:after{
                    content: "";
                    position: absolute;
                    width: 30px;
                    height: 4px;
                    background-color: #8f8e91;
                    top: 70px;
                    left: 0;
                }
            }
            .clearfix{
                line-height: 30px;
                .fl{
                    width:50%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
        .info{
            border-top: 1px solid #cccccc;
            margin-top: 20px;
            font-size: 14px;
            line-height: 22px;
            color: #747474;
            padding: 20px 0;
        }
    }
    .plan-box{
        padding: 40px 20px 0;
        .plan{
            border: 1px solid #3396d5;
            padding: 30px 20px 0;
        }
    }
    .title{
        i{
            font-size: 20px;
            color: #1b9fe2;
            margin-left: 5px;
        }
        h4{
            display: inline-block;
            font-size: 18px;
            line-height: 40px;
            margin-left: 20px;
            border-bottom: 1px solid #ccc;
        }
    }
    .p-box{
        padding: 20px 50px;
        color: #747474;
    }
    .pic-box{
        padding-bottom: 0;
        position: absolute;
        top:50%;
        left: 50%;
        transform:translate3d(-50%,-50%,0);
        img{
            border: 1px solid #ccc;
            width: 200px;
            height: 200px;
            border-radius: 4px;
            overflow: hidden;
            -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
        }
    }
    .studio_content{
        padding: 20px;
        background-color: #fff;
        font-size: 14px;
        line-height: 22px;
        color: #747474;
    }
</style>
