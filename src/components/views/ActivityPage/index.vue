<template>
    <div 
        v-loading="loading"
    >
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
                    <img :src="data.cover" alt="">
                    <!-- <span class="ac_type on_line">线上</span> -->
                </div>
                <div class="fr ac_info">
                    <h3 class="title">{{data.title}}</h3>
                    <ul>
                        <li class="clearfix">
                            <span class="label ccc justify">活动组织者</span>
                            <span class="ccc">：</span>
                            <span class="ddd">{{data.creator_name}}</span>
                        </li>
                        <li class="clearfix">
                            <span class="label ccc justify">参与对象</span>
                            <span class="ccc">：</span>
                            <span class="ddd">{{data.participant_text}}</span>
                        </li>
                        <li class="clearfix">
                            <span class="label ccc justify">参与人数</span>
                            <span class="ccc">：</span>
                            <span class="ddd">{{data.partner_cnt}}人</span>
                        </li>
                        <li class="clearfix">
                            <span class="label ccc justify">起止时间</span>
                            <span class="ccc">：</span>
                            <span class="blue">{{data.start_time}} 至 {{data.stop_time}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="margin_t notice p" v-if="false">
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
                        {{data.description}}
                    </p>
                </div>
            </div>
            <div class="margin_t notice p" v-if="false">
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
            <div class="margin_t notice p" v-if="false">
                <h4 class="title">
                    活动总结
                </h4>
                <div class="p_content">
                    <p>
                        活动总结
                    </p>
                </div>
            </div>
            <div class="margin_t notice p" v-if="false">
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
                            v-for="(item,index) in data.tache"
                            :key="index"
                            @click="stepChange(index)"
                        >
                            <div>
                                {{item.name}}
                            </div>
                        </li>
                        
                    </ul>
                    <div 
                        class="step_content"
                        v-if='!loading'
                    >
                        <component v-bind:is="currentTabComponent" :data="data.tache[activityShowIndex]"></component>
                        <msg 
                            :data="data.tache[activityShowIndex]"
                            @addCommont='addCommont'
                        />
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
import VideoBox from './components/Video';
import Pic from './components/Pic';
import Score from './components/Score';
import Vote from './components/Vote';
import Msg from './components/Msg';
import {getActivityDetail} from '@api/index';
export default {
    components:{
       TextBox, Doc, Res, VideoBox, Pic, Score, Vote, Msg, 
    },
    data(){
        return {
            title:'活动详情',
            activityShowIndex:0,
            data:{
                tache:[]
            },
            typeList:{
                1 : 'TextBox',
                2 : 'Doc', 
                3 : 'Res', 
                4 : 'VideoBox', 
                5 : 'Score', 
                6 : '直播',
                7 : 'Pic',
                8 : 'Vote'
            },
            
            currentTabComponent:'TextBox',
            loading:true
        }
    },
    methods:{
        addCommont(str){
            let info = this.$store.getters.userInfo;
            this.data.tache[this.activityShowIndex].comments.data.unshift({
                content:str,
                utime:"刚刚",
                create_user_name:info.nickname,
                create_user_mediumAvatar:info.largeAvatar
            })
        },
        stepChange(index){
            this.activityShowIndex = index;
            this.currentTabComponent = this.data.tache[index].my_type;
        },
        getType(index){
            switch(index){
                case '1':
                    return 'TextBox';
                    break;
                case '2':
                    return 'TextBox';
                    break;
                case '3':
                    return 'Res';
                    break;
                case '4':
                    return 'VideoBox';
                    break;
                case '5':
                    return 'Score';
                    break;
                case '6':
                    return '直播';
                    break;
                case '7':
                    return 'Pic';
                    break;
                case '8':
                    return "Vote";
                    break;
                default:
                    return "TextBox"
            }
        },
        handelData(arr){
            let newArr = [];
            for (let i = 0; i < arr.length; i++) {
                if(arr[i].tache_type==4){
                    if(arr[i].detail.file_type=='image'){
                        arr[i].my_type = 'Pic'
                    }else if(arr[i].detail.file_type=='video'){
                        arr[i].my_type = 'VideoBox'
                    }else if(arr[i].detail.file_type=='doc'){
                        arr[i].my_type = 'Doc'
                    }else{
                        arr[i].my_type = 'Doc'
                    }
                    newArr.push(JSON.parse(JSON.stringify(arr[i])))
                }else{
                    arr[i].my_type = this.getType(arr[i].tache_type)
                    newArr.push(JSON.parse(JSON.stringify(arr[i])))
                }
            };
            this.currentTabComponent = newArr[0].my_type;
            return newArr;
        }
    },
    created(){
        getActivityDetail({
            studio_id:this.$route.params.id,
            id:this.$route.params.activityId
        }).then(data=>{
            console.log(data);
            this.loading = false;
            if(data.status.code==0){
                data.data.tache = this.handelData(data.data.tache);
                this.data = data.data
            }
        }).catch(error=>{
            this.loading = false;

        })
    }
}
</script>

<style lang='less' scoped>
    .justify{
        text-align: justify;
        text-align-last: justify;
        &:after{
            content: "";
            display: inline-block;
            width: 100%;
        }
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
                .under_line{
                    background-image: url('./img/under_line.png')
                }
                .total{
                    background-image: url('./img/total.png')
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
                        height: 38px;
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
                    .doc-box{
                        padding: 0 4px !important;
                        margin: 0 !important;
                        color: #b6b6b6 !important;
                        font-size: 14px !important;
                        line-height: 20px !important;
                        p{
                            padding: 10px 0 !important;
                            margin: 0 !important;
                        }
                        *{
                            color: #b6b6b6 !important;
                            font-size: 14px !important;
                            line-height: 20px !important;
                        }
                    }
                    .doc-list{
                        padding:10px 15px 10px 0;
                        margin-bottom: 30px;
                        font-size: 14px;
                        line-height: 54px;
                        li{
                            padding-left: 50px;
                        }
                        .type{
                            color: #616161;
                        }
                        .type-doc{
                            background: url('../../../assets/icon/page.png') no-repeat 0 center;
                            background-size: 28px;
                        }
                    }
                }
                .step_list{
                    width: 240px;
                    text-align: center;
                    font-size: 14px;
                    line-height: 60px;
                    margin-right: 63px;
                    li{
                        overflow: visible;
                        cursor: pointer;
                        background-color: #35a9e4;
                        color: #fff;
                        margin-bottom: 48px;
                        position: relative;
                        div{
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            padding: 0 1em;
                        }
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
                        div{
                            position: relative;
                            z-index: 1;
                        }
                        &:after{
                            content:'';
                            position: absolute;
                            z-index: 0;
                            top: 0;
                            right: -39px;
                            width: 0;
                            height: 0;
                            border: 30px solid #fff;
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
                        .justify;
                        width: 70px;
                        height: 40px;
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
