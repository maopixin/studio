<template>
    <div>
        <div class="crumbs_box">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/institute/studio/'+this.$route.params.id }">工作室首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/institute/studio/'+this.$route.params.id+'/research' }">教研活动</el-breadcrumb-item>
                <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content layui-main">
            <div class="activity_info clearfix box-shadow">
                <div class="pic_box fl">
                    <img src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=3311515793,1390357452&fm=85&s=23966023E4C7CEB5248C68A20300E060" alt="">
                    <span class="ac_type on_line">线上</span>
                </div>
                <div class="fr ac_info">
                    <h3 class="title">借助信息</h3>
                    <ul>
                        <li class="clearfix">
                            <span class="label ccc justify">活动组织者</span>
                            <span class="ccc">：</span>
                            <span class="ddd">张金良</span>
                        </li>
                        <li class="clearfix">
                            <span class="label ccc justify">参与对象</span>
                            <span class="ccc">：</span>
                            <span class="ddd">张金良名师工作室成员</span>
                        </li>
                        <li class="clearfix">
                            <span class="label ccc justify">参与人数</span>
                            <span class="ccc">：</span>
                            <span class="ddd">1人</span>
                        </li>
                        <li class="clearfix">
                            <span class="label ccc justify">起止时间</span>
                            <span class="ccc">：</span>
                            <span class="blue">2018-06-21 00:53:33 至 2018-06-21 00:53:33</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="margin_t notice p">
                <h4 class="title">
                    活动公告
                </h4>
                <div class="p_content">
                    <ul class="notice_list">
                        <li class="clearfix">
                            <span class="laber ccc">公告标题</span>
                            <span class="ccc">：</span>
                            <div class="texts">
                                标题
                            </div>
                        </li>
                        <li class="clearfix">
                            <span class="laber ccc">分类</span>
                            <span class="ccc">：</span>
                            <div class="texts">
                                活动预告
                            </div>
                        </li>
                        <li class="clearfix">
                            <span class="laber ccc">公告</span>
                            <span class="ccc">：</span>
                            <div class="texts">
                                <p>
                                    asdjlasdkla sd
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="margin_t notice p">
                <h4 class="title">
                    活动描述
                </h4>
                <div class="p_content">
                    <p>
                        爱上了大大路上看到啦开始的拉开
                    </p>
                </div>
            </div>
            <div class="margin_t notice p">
                <h4 class="title">
                    活动资源
                </h4>
                <div class="p_content">
                    <ul class="resource_list clearfix">
                        <li class="clearfix">
                            <i class="icon word fl"></i>
                            <span class="name fl">标题奥术大师大所大所多</span>
                            <span class="down fl"></span>
                        </li>
                        <li class="clearfix">
                            <i class="icon word fl"></i>
                            <span class="name fl">标题奥术大师大所大所多</span>
                            <span class="down fl"></span>
                        </li>
                        <li class="clearfix">
                            <i class="icon word fl"></i>
                            <span class="name fl">标题奥术大师大所大所多</span>
                            <span class="down fl"></span>
                        </li>
                        <li class="clearfix">
                            <i class="icon word fl"></i>
                            <span class="name fl">标题奥术大师大所大所多</span>
                            <span class="down fl"></span>
                        </li>
                        <li class="clearfix">
                            <i class="icon word fl"></i>
                            <span class="name fl">标题奥术大师大所大所多</span>
                            <span class="down fl"></span>
                        </li>
                        <li class="clearfix">
                            <i class="icon word fl"></i>
                            <span class="name fl">标题奥术大师大所大所多</span>
                            <span class="down fl"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="margin_t notice p">
                <h4 class="title">
                    活动总结
                </h4>
                <div class="p_content">
                    <p>
                        爱上了大大路上看到啦开始的拉开
                    </p>
                </div>
            </div>
            <div class="margin_t notice p">
                <h4 class="title">
                    缩略图
                </h4>
                <div class="p_content">
                    <ul class="pic_list clearfix">
                        <li class="fl">
                            <img src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=1373841749,1945258235&fm=85&s=AFE0F117CA2B71090EE944610300E032" alt="">
                        </li>
                        <li class="fl">
                            <img src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=1373841749,1945258235&fm=85&s=AFE0F117CA2B71090EE944610300E032" alt="">
                        </li>
                        <li class="fl">
                            <img src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=1373841749,1945258235&fm=85&s=AFE0F117CA2B71090EE944610300E032" alt="">
                        </li>
                        <li class="fl">
                            <img src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=1373841749,1945258235&fm=85&s=AFE0F117CA2B71090EE944610300E032" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="margin_t notice p">
                <h4 class="title">
                    活动流程
                </h4>
                <div class="p_content">
                    <ul class="step_list fl">
                        <li 
                            :class="['box-shadow',{active:index==activityShowIndex}]"
                            v-for="(item,index) in activityStep"
                            :key="index"
                            @click="stepChange(index)"
                        >{{item.title}}</li>
                        
                    </ul>
                    <div class="step_content">
                        <text-box/>
                        <msg/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextBox from './components/Text';
import Doc from './components/Doc';
import Res from './components/Res';
import Video from './components/Video';
import Pic from './components/Pic';
import Score from './components/Score';
import Vote from './components/Vote';
import Msg from './components/Msg';

export default {
    components:{
       TextBox, Doc, Res, Video, Pic, Score, Vote, Msg, 
    },
    data(){
        return {
            title:'活动详情',
            activityShowIndex:0,
            activityStep:[
                {
                    title:'活动文本',
                    type:'text'
                },
                {
                    title:'活动文档',
                    type:'doc'
                },
                {
                    title:'活动资源',
                    type:'resource'
                },
                {
                    title:'活动视频',
                    type:'video'
                },
                {
                    title:'活动图片',
                    type:'pic'
                },
                {
                    title:'活动评分',
                    type:'score'
                },
                {
                    title:'活动投票',
                    type:'vote'
                }
            ]
        }
    },
    methods:{
        stepChange(index){
            this.activityShowIndex = index;
        }
    }
}
</script>

<style lang='less' scoped>
    .justify{
        text-align: justify;
        text-align-last: justify;
    }
     .crumbs_box{
        width: 1140px;
        margin: 0 auto;
        padding: 30px 0;
    }
    .content{
        .activity_info{
            padding: 38px 36px 42px;
            background-color: #fff;
            .pic_box{
                width: 316px;
                height: 226px;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                span{
                    position: absolute;
                    width: 91px;
                    height: 85px;
                    background-repeat: no-repeat;
                    top: 0;
                    left: 0;
                    text-indent: -99999px;
                }
                .on_line{
                    background-image: url('./img/on_line.png')
                }
            }
            .ac_info{
                width: 720px;
                .title{
                    font-size: 22px;
                    line-height: 52px;
                    color: #31a5f0;
                    border-bottom: 1px solid #ececec;
                    margin-bottom: 9px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                ul{
                    span{
                        font-size: 14px;
                        line-height: 38px;
                        float: left;
                    }
                    .label{
                        width: 72px;
                    }
                    .ccc{
                        color: #686868;
                    }
                    .ddd{
                        color: #2d2d2d;
                    }
                    .blue{
                        color: #55a8ea;
                    }
                }
            }
            
        }
        .p{
            padding: 0 38px;
            background-color: #fff;
            .p_content{
                padding: 24px 0;
                .step_content{
                    float: left;
                    width: 761px;
                    
                }
                .step_content /deep/ .step_box{
                    
                    h4{
                        font-size: 22px;
                        line-height: 54px;
                        color: #696969;
                        border-bottom: 1px solid #eaeaea;
                        margin-bottom: 13px;
                        span{
                            display: inline-block;
                            vertical-align: top;
                            padding: 5px 6px 0;
                            border-bottom: 3px solid #34a7e0;
                            margin-bottom: -2px;
                        }
                    }
                    .describe{
                        font-size: 16px;
                        line-height: 43px;
                        .title{
                            width: 94px;
                            text-indent: 4px;
                            letter-spacing: 3px;
                            color: #686868;
                        }
                        .info{
                            width: 667px;
                            color: #414141;
                        }
                    }
                }
                .step_list{
                    width: 240px;
                    text-align: center;
                    font-size: 20px;
                    line-height: 78px;
                    margin-right: 63px;
                    li{
                        overflow: visible;
                        cursor: pointer;
                        background-color: #35a9e4;
                        color: #fff;
                        margin-bottom: 48px;
                        position: relative;
                        &:before{
                            content: "";
                            position: absolute;
                            top: -40px;
                            left:106px;
                            width: 34px;
                            height: 34px;
                            background: url('./img/bottom.png') no-repeat;
                            background-size: cover;
                        }
                    }
                    li:nth-of-type(1):before{
                        display: none;
                    }
                    .active{
                        background-color: #2893c9;
                        box-shadow: none;
                        &:after{
                            content:'';
                            position: absolute;
                            top: 0;
                            right: -39px;
                            width: 0;
                            height: 0;
                            border: 39px solid #fff;
                            border-left-color: #2893c9;
                        }
                    }
                }
                .pic_list{
                    li{
                        width: 258px;
                        height: 172px;
                        margin-right: 10px;
                        overflow: hidden;
                        position: relative;
                        &:nth-of-type(4){
                            margin: 0;
                        }
                        img{
                            min-width: 258px;
                            min-height: 172px;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                        }
                    }
                }
                .resource_list{
                    li:nth-of-type(2n+1){
                        float: left;
                    }
                    li:nth-of-type(2n){
                        float: right;
                    }
                    .name{
                        font-size: 16px;
                        line-height: 50px;
                        width: 350px;
                        margin-right: 34px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .down{
                        width: 20px;
                        height: 20px;
                        background: url('../TResource/icon/down.png') no-repeat center center;
                        background-size: cover;
                        margin-top: 14px;
                    }
                    .icon{
                        width: 16px;
                        height: 16px;
                        margin-top: 16px;
                        margin-right: 20px;
                    }
                    .avi{
                        background-image: url('../TResource/icon/avi.png');
                    }
                    .doc{
                        background-image: url('../TResource/icon/doc.png');
                    }
                    .exe{
                        background-image: url('../TResource/icon/exe.png');
                    }
                    .html{
                        background-image: url('../TResource/icon/html.png');
                    }
                    .rar{
                        background-image: url('../TResource/icon/rar.png');
                    }
                    .rm{
                        background-image: url('../TResource/icon/rm.png');
                    }
                    .txt{
                        background-image: url('../TResource/icon/txt.png');
                    }
                    .wmv{
                        background-image: url('../TResource/icon/wmv.png');
                    }
                    .xls{
                        background-image: url('../TResource/icon/xls.png');
                    }
                    .word{
                        background-image: url('../TResource/icon/word.png');
                    }
                    .pdf{
                        background-image: url('../TResource/icon/pdf.png');
                    }
                    .ppt{
                        background-image: url('../TResource/icon/ppt.png');
                    }
                    .zip{
                        background-image: url('../TResource/icon/zip.png');
                    }
                    .pptx{
                        background-image: url('../TResource/icon/pptx.png');
                    }
                    .mp4{
                        background-image: url('../TResource/icon/mp4.png');
                    }
                }
                p{
                    font-size: 16px;
                    line-height: 40px;
                    color: #303030;
                }
                .notice_list{
                    span,.texts{
                        font-size: 16px;
                        line-height: 40px;
                        float: left;
                    }
                    .ccc{
                        color: #545454;
                    }
                    .laber{
                        .justify();
                        width: 70px;
                    }
                    .texts{
                        color:#31a5f0;
                        margin-left: 20px;
                        *{
                            font-size: 16px !important;
                            line-height: 40px !important;
                            color: #303030 !important;
                        }
                    }
                }
            }
        }
        h4.title{
            padding-top: 5px;
            font-size: 22px;
            line-height: 56px;
            color: #31a5f0;
            text-indent: 12px;
            position: relative;
            border-bottom: 1px solid #eaeaea;
            &:after{
                content: "";
                position: absolute;
                width: 3px;
                height: 22px;
                background-color: #31a5f0;
                top: 20px;
                left: 0;
            }
        }
    }
    
</style>
