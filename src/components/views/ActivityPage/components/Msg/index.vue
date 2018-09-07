<template>
    <div class="msg-box">
        <h4 class="title">写评论</h4>
        <div class="leave_msg_box clearfix">
            <div class="fl person-head">
                <img :src="this.$store.getters.userInfo.largeAvatar" alt="">
            </div>
            <div class="fr msg_box">
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 4}"
                    placeholder="我也来评论一句"
                    v-model="msg"
                    @input='change'
                    @focus='focus'
                >
                </el-input>
                <div class="msg_btn">
                    <el-tooltip class="item" effect="dark" content="全角字符(中文汉字及标点等)等于一个文字,两个半角字符(英文字母及标点、阿拉伯数字等)等于一个文字" placement="bottom-end">
                        <span>还能输入<em>{{textNum}}</em>个字</span>
                    </el-tooltip>
                    <el-button 
                        type="primary"
                        @click='comment'
                    >评论</el-button>
                </div>
            </div>
        </div>
        <h4 class="title">最新评论</h4>
        <div>
            <not-more v-if="data.comments.data.length<=0"/>
            <ul class="msg-list" v-if="data.comments.data.length>0">
                <li 
                    class="msg-item"
                    v-for="(item) in data.comments.data"
                    :key="item.id"
                >
                    <div class="clearfix">
                        <div class="fl msg_head">
                            <a href="javascript:;">
                                <img :src="item.create_user_mediumAvatar" alt="">
                            </a>
                        </div>
                        <div class="fr msg_content">
                            <div class="text">
                                <a href="javascript:;" class="color">{{item.create_user_name}}</a>：{{item.content}}
                            </div>
                            <div class="time_fn clearfix">
                                <time class="fl color" datatime=''>{{item.utime}}</time>
                                <div class="fr fn-box">
                                    <!-- <div class="fl zan">
                                        <span class="fl"></span>
                                        （0）
                                    </div> -->
                                    <!-- <div 
                                        class="fl color return ns"
                                        @click='reply'
                                    >
                                        回复
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <ul class="replay-list">
                        <li>
                            <div class="clearfix">
                                <div class="fl msg_head">
                                    <a href="javascript:;">
                                        <img src="@/assets/img/person128*128.png" alt="">
                                    </a>
                                </div>
                                <div class="fr msg_content">
                                    <div class="text">
                                        <a href="javascript:;" class="color">李月兰</a> 回复 <a href="javascript:;" class="color">李月兰</a>：哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                                    </div>
                                    <div class="time_fn clearfix">
                                        <time class="fl color" datatime=''>2018-08-09 23:24</time>
                                        <div class="fr fn-box">
                                            <div class="fl zan">
                                                <span class="fl"></span>
                                                （0）
                                            </div>
                                            <div 
                                                class="fl color return ns"
                                                @click='reply'
                                            >
                                                回复
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="clearfix">
                                <div class="fl msg_head">
                                    <a href="javascript:;">
                                        <img src="@/assets/img/person128*128.png" alt="">
                                    </a>
                                </div>
                                <div class="fr msg_content">
                                    <div class="text">
                                        <a href="javascript:;" class="color">李月兰</a> 回复 <a href="javascript:;" class="color">李月兰</a>：哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                                    </div>
                                    <div class="time_fn clearfix">
                                        <time class="fl color" datatime=''>2018-08-09 23:24</time>
                                        <div class="fr fn-box">
                                            <div class="fl zan">
                                                <span class="fl"></span>
                                                （0）
                                            </div>
                                            <div 
                                                class="fl color return ns"
                                                @click='reply'
                                            >
                                                回复
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div 
                        class="replay-box"

                    >
                        <div>
                            <el-input
                                type="textarea"
                                :autosize="{ minRows: 4, maxRows: 4}"
                                :placeholder="msg2tip"
                                v-model="msg2">
                            </el-input>
                        </div>
                        <div class="btn-box">
                            <el-button type="primary">回复</el-button>
                        </div>
                    </div> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {activityUserComment} from '@api/index'
import NotMore from '@global/NotMore'
export default {
    components:{
        NotMore
    },
    props:['data'],
    data(){
        return {
            msg: '',
            textNum:140,
            textNumShow:140,
            msg2:'',
            msg2tip:'回复 xxx',
            first:true
        }
    },
    methods:{
        change(value){
            let num = this.GetLength(value);
            if(num>this.textNumShow*2){
                this.$message({
                    message: `单条评论最多输入${this.textNumShow}个字`,
                    type: 'warning'
                });
                this.$nextTick(() => {
                    let str = this.cutstr(value,this.textNumShow*2);
                    this.msg = str;
                    this.textNum = parseInt(140-this.GetLength(str)/2)
                })
            }else{
                this.$nextTick(()=>{
                    this.textNum = parseInt(140-num/2)
                })
            }
        },
        GetLength (str) {
            var realLength = 0, len = str.length, charCode = -1;
            for (var i = 0; i < len; i++) {
                charCode = str.charCodeAt(i);
                if (charCode >= 0 && charCode <= 128) realLength += 1;
                else realLength += 2;
            }
            return realLength;
        },
        cutstr(str, len) {
            var str_length = 0;
            var str_len = 0;
            var str_cut = new String();
            var str_len = str.length;
            for (var i = 0; i < str_len; i++) {
                var a = str.charAt(i);
                str_length++;
                if (escape(a).length > 4) {
                    //中文字符的长度经编码之后大于4  
                    str_length++;
                }
                str_cut = str_cut.concat(a);
                if (str_length >= len) {
                    return str_cut;
                }
            }
            //如果给定字符串小于指定长度，则返回源字符串
            if (str_length < len) {
                return str;
            }
        },
        reply(){
            return false;
        },
        comment(){
            if(this.msg.trim()==''){
                this.$message({
                    message: '请输入内容再进行评论',
                    type: 'warning'
                });
            }else{
                activityUserComment({
                    activity_tache_id:this.data.id,
                    content:this.msg.trim()
                }).then(data=>{
                    console.log(data);
                    if(data.status.code==0){
                        this.$message({
                            message: '评论成功',
                            type: 'success'
                        });
                        this.$emit('addCommont',this.msg);
                        this.msg = '';
                        this.textNum = 140;
                    }else{
                        if(data.status.code==10105){
                            this.$alert('发表评论需要登录，请您先进行登录', '未登录', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                            }).then(() => {
                                window.open('http://account.dljy.com/user/login/login?goto='+window.location.href);
                            }).catch(()=>{
                                console.log('取消登录')
                            })
                        }else{
                            this.$message.error(this.$tips(data.data));
                        }
                    }
                }).catch(error=>{
                    this.$message.error('评论出错，请稍后尝试');
                })
            }
        },
        focus(){
            if(!this.$store.getters.userInfo.nickname && this.first){
                this.first = false;
                this.$alert('发表评论需要登录，请您先进行登录', '未登录', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(() => {
                    window.location.href = 'http://account.dljy.com/user/login/login?goto='+window.location.href;
                }).catch(()=>{
                    console.log('取消登录')
                })
            }
        }
    },
}
</script>

<style lang='less' scoped>
    .msg-box{
        .title{
            font-size: 22px;
            line-height: 48px;
            border-bottom: 1px solid #eaeaea;
            text-indent: 6px;
        }
        .leave_msg_box{
            padding-top: 38px;
        }
        .person-head{
            width: 80px;
            height: 80px;
            border-radius: 4px;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                background-color: #c2c8cb;
            }
        }
        .msg_box{
            width: 660px;
            padding-bottom: 20px;
            /deep/ .el-textarea__inner{
                padding: 15px;
                resize: none;
            }
            .msg_btn{
                text-align: right;
                padding-top: 9px;
                span{
                    display: inline-block;
                    vertical-align: top;
                    font-size: 16px;
                    color: #b3b3b3;
                    line-height: 32px;
                    margin-right: 30px;
                    em{
                        font-size: 22px;
                    }
                }
            }
        }
        .msg-list{
            padding-top: 32px;
            font-size: 16px;
            .msg_head{
                width: 50px;
                height: 50px;
                border-radius: 4px;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    background-color: #c2c8cb;
                }
            }
            .msg_content{
                width: 690px;
                .text{
                    line-height: 18px;
                    padding-top: 6px;
                    padding-bottom: 25px;
                    color: #545454;
                }
                .time_fn{
                    line-height: 18px;
                    margin-bottom: 40px;
                    time{
                        font-size: 14px;
                    }
                    .fn-box{
                        .zan{
                            // margin-right: 40px;
                            color: #b3b3b3;
                            span{
                                width: 18px;
                                height: 18px;
                                background: url('../../../../../assets/icon/zan.png') no-repeat;
                                background-size: cover;
                                margin-top: -1px;
                                cursor: pointer;
                                &:hover{
                                    background: url('../../../../../assets/icon/zan-active.png') no-repeat;
                                    background-size: cover;
                                }
                            }
                            span.active{
                                background: url('../../../../../assets/icon/zan-active.png') no-repeat;
                                background-size: cover;
                            }
                        }
                        .return{
                            cursor: pointer;
                        }
                    }
                }
            }
            .color{
                color: #1b9fe2;
            }
            .replay-list{
                width: 690px;
                margin-left: 71px;
                .msg_content{
                    width: 619px;
                }
            }
            .replay-box{
                width: 690px;
                margin-left: 71px;
                /deep/ textarea{
                    padding: 15px;
                    resize: none;
                }
                .btn-box{
                    text-align: right;
                    padding: 10px 0 20px;
                }
            }
        }
    }
</style>
